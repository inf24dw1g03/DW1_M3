FROM node:18-slim

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=8000

EXPOSE ${PORT}

CMD ["npm", "start"]
