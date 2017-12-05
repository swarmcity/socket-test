FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8033

CMD [ "npm", "start" ]