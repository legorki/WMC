FROM node:current-alpine3.19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY *js ./

COPY --from=flag ./flag.txt .

CMD [ "node", "index.js" ]