FROM  node:18.18.0

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install npm install @reduxjs/toolkit

COPY . . 

EXPOSE 8083

CMD [ "npm" , "start" ]


