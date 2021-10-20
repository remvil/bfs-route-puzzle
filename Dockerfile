FROM node:14-alpine

COPY . .
RUN ls
RUN pwd
RUN npm i

CMD ["npm", "start"]