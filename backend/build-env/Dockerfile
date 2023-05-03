FROM ubuntu:focal

WORKDIR /

RUN apt update
RUN apt install wget -y
RUN apt install openjdk-17-jdk -y
RUN wget https://mirrors.estointernet.in/apache/maven/maven-3/3.8.5/binaries/apache-maven-3.8.5-bin.tar.gz
RUN tar -xvf apache-maven-3.8.5-bin.tar.gz
RUN ln -s /apache-maven-3.8.5/bin/mvn /usr/bin/mvn
