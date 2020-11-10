<<<<<<< HEAD
FROM node:15-alpine3.10
=======
FROM node:12-alpine
>>>>>>> e888c7dc6b5bb97367345842902eb69571c8f4ed

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]