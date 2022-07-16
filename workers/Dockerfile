FROM node:16-alpine

RUN mkdir /app/

COPY / /app/

COPY /package.json /package-lock.json app/

WORKDIR /app

RUN npm ci

RUN npm i -g ts-node

CMD [ "ts-node", "workers/polls.worker.ts" ]