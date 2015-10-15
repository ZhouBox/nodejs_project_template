FROM ubuntu:14.04
MAINTAINER zhx910322@163.com

RUN mkdir -p /app
WORKDIR /app


COPY test/* /app/

ADD docker-entrypoint.sh /app/docker-entrypoint.sh 


EXPOSE 8888

RUN sh /app/docker-entrypoint.sh










