FROM node:11.13-alpine
RUN apk add --no-cache && apk upgrade && \
    apk add --no-cache git
WORKDIR /home/node/app
COPY ["app.js", "package.json", "package-lock.json", ".git", "/home/node/app/"]
RUN npm install  && \
    npm run last-commit

EXPOSE 3000
CMD [ "npm", "start" ]
