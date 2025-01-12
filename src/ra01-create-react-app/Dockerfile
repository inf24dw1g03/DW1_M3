FROM node:18-slim

WORKDIR /home/node/app

COPY ./ra01-create-react-app/package*.json ./

RUN npm install

COPY ./ra01-create-react-app/ ./

RUN npm run build

EXPOSE 3006

CMD ["npm", "start"]
