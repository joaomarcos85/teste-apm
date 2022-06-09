FROM node:14.15.0

WORKDIR /usr/src/app

COPY . .

RUN npm install 

EXPOSE 80

CMD [ "npm", "start"]