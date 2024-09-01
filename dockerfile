FROM node as vite-app

WORKDIR /app

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM nginx:alpine

COPY ./nginx.conf /nginx
COPY --from=vite-app ./app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
