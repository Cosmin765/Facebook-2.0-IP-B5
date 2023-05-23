import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { getGraphData, getUser } from '../../util';

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

function forceGraph(nodes, links, width = 640, height = 400) {
  const forceCollideValue = 50;
  const radius = 20;

  const color = d3.scaleOrdinal(
    d3.map(nodes, v => v.group || 1),
    d3.schemeTableau10
  );

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(node => node.id).strength(1))
    .force('charge', d3.forceManyBody().strength(1))
    .force('collide', d3.forceCollide().radius(forceCollideValue))
    .force('center', d3.forceCenter())
    .on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .select(function () {
          return this.parentNode;
        })
        .selectAll('text')
        .attr('x', d => d.x)
        .attr('y', d => d.y + 35);
    });

  const svg = d3.create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

  const link = svg.append('g')
    .attr('stroke', 'black')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-linecap', 'round')
    .selectAll('line')
    .data(links)
    .join('line');

  const nodesContainer = svg.append('g')
    .attr('stroke', 'black')
    .attr('stroke-opacity', 1)
    .attr('stroke-width', 1.5);

  const nodeEl = nodesContainer
    .selectAll('g')
    .data(nodes)
    .join('g');

  const node = nodeEl
    .append('circle')
    .attr('fill', v => color(v.group || 1))
    .attr('r', radius)
    .call(drag(simulation));

  nodeEl
    .append('text')
    .text(d => d.firstName + ' ' + d.lastName)
    .style('text-anchor', 'middle');

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

  return Object.assign(svg.node(), { scales: { color } });
}

function ForceGraph() {
  // const chartRef = useRef();

  // useEffect(() => {
  //   if (graphData) {
  //     const [nodes, links] = parseGraphData(graphData);
  //     const chart = forceGraph(nodes, links, width, height);
  //     chartRef.current.appendChild(chart);
  //   }
  // }, [graphData, width, height]);

  const [graphData, setGraphData] = useState(null);

  const width = 640, height = 400;

  useEffect(() => {
    getUser().then(user => {
      getGraphData(user.id).then(graphData => {
        setGraphData(graphData);
      });
    });
    // const user = await getUser();
    // const graphData = await getGraphData(user.id);
    // setGraphData(graphData);
  }, []);

  let chart;


  if(graphData) {
    // console.log(graphData);
    const [nodes, links] = parseGraphData(graphData);
    chart = forceGraph(nodes, links, width, height);
  } else {
    chart = null;
  }

  return (graphData ? <svg ref={chart} /> : <p />);
}

export default ForceGraph;
