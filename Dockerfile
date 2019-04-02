FROM node:11.13-alpine
RUN apk add --no-cache && apk upgrade && \
    apk add --no-cache git

EXPOSE 8080

WORKDIR /home/node/app

COPY ["app.js", "package.json", "package-lock.json", ".git", "/home/node/app/"]
RUN chown -R node:node /home/node/app
USER node
RUN npm install  && \
    npm run last-commit
CMD [ "npm", "start" ]
