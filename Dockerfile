FROM node:16.20.1-alpine3.17 as build

WORKDIR /app

COPY package.json /app/
RUN pnpm install
COPY . /app
RUN pnpm build


FROM nginx
COPY --from=build app/dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
