FROM node:12.13.1

WORKDIR /usr/local/app

COPY . .

RUN yarn