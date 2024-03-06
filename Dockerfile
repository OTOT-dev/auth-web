FROM nginx

ARG WORKDIR=/etc/nginx
WORKDIR ${WORKDIR}

COPY ./dist/ ${WORKDIR}/website/default/
COPY nginx.conf ${WORKDIR}/nginx.conf

# nginx 镜像里面已经写了 EXPOSE 80 和 CMD ["nginx", "-g", "daemon off;"]
