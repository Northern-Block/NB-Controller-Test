FROM node:12.13.0-alpine

RUN apk add git
RUN mkdir -p /opt/app && \
    cd /opt/app && \
    git clone https://github.com/Northern-Block/NB-Controller-Test.git

WORKDIR /opt/app/NB-Controller-Test

RUN adduser --system app && \
    npm install pm2 && \
    chown -R app /opt/app && \
    chmod -R 777 /opt/app && \
    npm run build

RUN mkdir -p /.pm2 && \
    chown -R app /.pm2 && \
    chmod -R 777 /.pm2

USER app
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]
