FROM node:8.3.0
WORKDIR /usr/app
COPY . .
RUN npm install --silent
EXPOSE 80
CMD ["npm", "run", "start"]