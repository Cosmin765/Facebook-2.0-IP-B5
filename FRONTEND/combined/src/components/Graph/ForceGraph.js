
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { getGraphData, getUser } from '../../util';
import StretchedMenu from '../HomePage/components/streched_menu';
import LargeMenu from '../HomePage/components/large_menu';

function parseGraphData(graphData) {
  const nodes = [];
  const links = [];
  const seen = new Set();
  const graph = graphData.first;
  const groups = graphData.second;

  for (const pair of graph) {
    const { first, second } = pair;

    if (!seen.has(first.id)) {
      seen.add(first.id);
      first.group = groups[first.id];
      first.name = first.firstName + ' ' + first.lastName;
      nodes.push(first);
    }

    if (!seen.has(second.id)) {
      seen.add(second.id);
      second.group = groups[second.id];
      second.name = second.firstName + ' ' + second.lastName;
      nodes.push(second);
    }

    links.push({ source: first.id, target: second.id });
  }

  return [nodes, links];
}

function ForceGraph() {
  const [graphData, setGraphData] = useState(null);
  const svgRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  const constructGraph = async () => {
    const user = await getUser();
    const graphData = await getGraphData(user.id);
    setGraphData(graphData);
  };

  useEffect(() => {
    constructGraph();
  }, []);
  useEffect(() => {
    if (graphData) {
      const [nodes, links] = parseGraphData(graphData);

      const color = d3.scaleOrdinal(d3.map(nodes, v => v.group || 1), d3.schemeTableau10);

      const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(node => node.id).strength(1))
        .force('charge', d3.forceManyBody().strength(1))
        .force('collide', d3.forceCollide().radius(50))
        .force('center', d3.forceCenter());

      const svg = d3.select(svgRef.current)
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [-width / 2, -height / 2, width, height])
        .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

      svg.selectAll('*').remove();

      const link = svg.append('g')
        .attr('stroke', 'black')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-linecap', 'round')
        .selectAll('line')
        .data(links)
        .join('line');

      const node = svg.append('g')
        .attr('stroke', 'black')
        .attr('stroke-opacity', 1)
        .attr('stroke-width', 1.5)
        .selectAll('circle')
        .data(nodes)
        .join('circle')
        .attr('fill', v => color(v.group || 1))
        .attr('r', 20) // radius
        .call(drag(simulation));

      const label = svg.append('g')
        .selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => d.firstName + ' ' + d.lastName)
        .style('text-anchor', 'middle')
        .attr('x', 0)
        .attr('y', 35);

      simulation.on('tick', () => {
        link.attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        node.attr('cx', d => d.x)
          .attr('cy', d => d.y);

        label.attr('x', d => d.x)
          .attr('y', d => d.y + 35);
      });

      function drag(simulation) {
        function dragstarted(event) {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          event.subject.fx = event.subject.x;
          event.subject.fy = event.subject.y;
        }

        function dragged(event) {
          event.subject.fx = event.x;
          event.subject.fy = event.y;
        }

        function dragended(event) {
          if (!event.active) simulation.alphaTarget(0);
          event.subject.fx = null;
          event.subject.fy = null;
        }

        return d3.drag()
          .on('start', dragstarted)
          .on('drag', dragged)
          .on('end', dragended);
      }
    }
  }, [graphData]);

  return (
    <div>
      {window.innerWidth < 1200 ? <StretchedMenu /> : <LargeMenu />}
      {graphData ? (
        <svg ref={svgRef} />
      ) : (
        <p>Loading graph data...</p>
      )}
    </div>
  );
}

export default ForceGraph;
