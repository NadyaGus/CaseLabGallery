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



# FROM node:18-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# ENTRYPOINT [ "nginx" ]

# CMD [ "serve", "-s", "dist" ]
# # CMD [ "npm", "run", "dev" ]
# # CMD ["nginx", "-g", "daemon off;"]

# FROM node as vite-app

# WORKDIR /app
# COPY . .

# RUN ["npm", "install"]
# RUN ["npm", "run", "build"]

# FROM nginx:alpine

# WORKDIR /usr/share/nginx/

# RUN rm -rf html
# RUN mkdir html

# WORKDIR /

# COPY ./nginx.conf /etc/nginx
# COPY --from=vite-app ./app/dist /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]
