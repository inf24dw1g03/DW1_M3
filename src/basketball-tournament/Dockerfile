FROM node:18-slim

WORKDIR /home/node/app

COPY ./basketball-tournament/package*.json ./

RUN npm install

COPY ./basketball-tournament/ ./

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE ${PORT}

CMD ["node", "."]
