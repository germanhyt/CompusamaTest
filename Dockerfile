FROM  node:alpine3.14

WORKDIR /opt/web-app/server

COPY server.js *.json ./ 

RUN npm i

EXPOSE 3000

CMD ["compusamaapp","server.js"]