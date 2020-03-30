## Etape 1, récupérer l'image node
FROM node:11-alpine as builder

# Create app directory
WORKDIR /app

COPY package.json /app

RUN cd /app && npm set progress=false && npm install

#Copier tout ce qui est dans ng-app dans le container
COPY . .

COPY .  /app


# Builder l'application en mode production et sauvegarder les artifacts dans le dossier dist

RUN cd /app && $(npm bin)/ng build --prod --output-path=dist

#Etape 2, nginx

FROM nginx:alpine

## Copy our default nginx config
RUN rm /etc/nginx/nginx.conf

COPY nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html