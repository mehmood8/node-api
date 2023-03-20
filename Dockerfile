FROM node:16

WORKDIR /app

#copy package.json and package-lock.json

COPY package*.json ./


RUN npm ci --only=production

COPY . /app

EXPOSE 3000

CMD ["npm","start"]