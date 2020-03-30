FROM node:12.16.1-alpine
MAINTAINER lgou2w <lgou2w@hotmail.com>

COPY . /app
WORKDIR /app

RUN node -v
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "start"]
