FROM node:latest
WORKDIR /srv
COPY . /srv/
EXPOSE 3000
RUN  npm install
CMD ["nodejs”, “/srv/app"]