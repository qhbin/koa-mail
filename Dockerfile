FROM node:latest
COPY . /srv/mail
WORKDIR /srv/mail
RUN  npm install
EXPOSE 3000
<<<<<<< HEAD
CMD ["nodejs", "/srv/mail/app.js"]
=======
CMD ["nodejs", "/srv/mail/app.js"]
>>>>>>> cd9a02b359d5ecc1be92ae49af3921c024d5a3ef
