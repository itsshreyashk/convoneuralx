FROM node:alpine as builder


WORKDIR /app


COPY . /app

RUN yarn install

COPY --from=builder /app .

EXPOSE 3001


CMD ["yarn", "start"]