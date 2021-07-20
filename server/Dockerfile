
FROM node:12.18.1

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

CMD [ "node", "server.js" ]
