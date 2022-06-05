FROM node:16.13.1

WORKDIR /app

COPY ./app/src .
COPY ./app/tsconfig.json .
COPY ./app/package.json .
COPY ./app/yarn.lock .

COPY ./script /script

RUN chmod +x /script/*

ENTRYPOINT [ "/script/script.sh" ]