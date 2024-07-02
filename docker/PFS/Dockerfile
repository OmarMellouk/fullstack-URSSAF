FROM nginx:alpine

RUN apk update && apk add tzdata
ENV TZ=Europe/Paris

RUN rm -rf /usr/share/nginx/html/*

COPY dist/fullstack-spa-intranet /usr/share/nginx/html
COPY docker/PFS/nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /etc/nginx
EXPOSE 4200 80
CMD ["nginx", "-g", "daemon off;"]
