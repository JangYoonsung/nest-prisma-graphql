FROM node:latest

WORKDIR /app

COPY ./app/src .
COPY ./app/tsconfig.json .
COPY ./app/package.json .
COPY ./app/yarn.lock .
COPY ./app/prisma .

COPY ./script /script

RUN chmod +x /script/*

ENTRYPOINT [ "/script/script.sh" ]