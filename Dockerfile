FROM node:12.13.0-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
RUN adduser -S app
RUN git clone https://github.com/Northern-Block/NB-Controller-Test.git
RUN npm install
RUN chown -R app /opt/app
RUN npm run build
USER app
EXPOSE 3000
CMD [ "npm", "run", "pm2" ]
