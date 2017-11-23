FROM node:latest
WORKDIR /srv
COPY . /srv/
EXPOSE 3000
RUN  npm install
CMD ["node”, “/srv/app.js"]
