FROM node:8.3.0-alpine
WORKDIR /usr/app
COPY . .
RUN ["npm", "install", "--silent"]
EXPOSE 4000
CMD ["npm", "run", "start"]
