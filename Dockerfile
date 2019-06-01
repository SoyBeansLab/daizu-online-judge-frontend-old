FROM node:11.14.0-alpine

MAINTAINER Taichi Uchihara <hoge.uchihara@gmail.com>

RUN apk update && \
    apk add --no-cache git && \
    git clone https://github.com/SoyBeansLab/daizu-online-judge-frontend /daizu-online-judge-front && \
    cd /daizu-online-judge-front && \
    git checkout develop

COPY docker-entrypoint.sh /daizu-online-judge-front/docker-entrypoint.sh

RUN chmod +x /daizu-online-judge-front/docker-entrypoint.sh

WORKDIR /daizu-online-judge-front

EXPOSE 8080

ENTRYPOINT ["/daizu-online-judge-front/docker-entrypoint.sh"]
