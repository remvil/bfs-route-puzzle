FROM node:14-alpine

COPY . .

CMD ["node", "bin/retro-puzzle-cli.js"]