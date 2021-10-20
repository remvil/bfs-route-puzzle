FROM node:14-alpine

COPY . .

RUN npm i

ENTRYPOINT ["npm", "start"]