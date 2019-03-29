FROM node:10-alpine as builder
COPY . ./fridge-app
WORKDIR /fridge-app
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.14.1-alpine
COPY --from=builder /fridge-app/dist/hackathon-fridge/ /usr/share/nginx/html