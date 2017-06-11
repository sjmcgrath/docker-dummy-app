FROM mhart/alpine-node:6

ADD . .

EXPOSE 3000
CMD ["node", "server.js" ]
