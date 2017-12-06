FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8099

CMD [ "npm", "start" ]