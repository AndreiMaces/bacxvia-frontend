# Bacxvia frontend - static site cu nginx
FROM nginx:alpine

# Șterge conținutul implicit din directorul default
RUN rm -rf /usr/share/nginx/html/*

# Copiază site-ul static în directorul servit de nginx
COPY . /usr/share/nginx/html/

# Configurare nginx custom (opțional: cache, gzip, fallback pentru SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
