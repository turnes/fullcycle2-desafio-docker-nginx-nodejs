FROM node:16-buster-slim

WORKDIR /usr/src/app

COPY . .

RUN yarn install

EXPOSE 3000

CMD [ "node", "index.js" ]