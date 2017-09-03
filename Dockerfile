FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# copy package-lock.json 
COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
