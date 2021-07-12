FROM mhart/alpine-node:14 AS builder
WORKDIR /app

COPY landing-gatsby /app

RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev
RUN yarn && yarn build

CMD [ "yarn", "start" ]
