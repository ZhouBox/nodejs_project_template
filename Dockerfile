FROM daocloud.io/ubuntu:14.04
MAINTAINER zhx910322@163.com

RUN mkdir -p /app
WORKDIR /app


COPY test/* /app/


RUN apt-get update 
RUN apt-get install -y nodejs 


EXPOSE 8888

ENTRYPOINT ["nodejs", "app.js"]












