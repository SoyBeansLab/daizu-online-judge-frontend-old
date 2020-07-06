FROM node:11.14.0-alpine AS builder

RUN apk update && \
    apk add --no-cache git && \
    git clone --depth 1 https://github.com/SoyBeansLab/daizu-online-judge-frontend /daizu-online-judge-front && \
    cd /daizu-online-judge-front && \
    npm install && \
    npm run build

FROM node:11.14.0-alpine

RUN npm install -g serve

COPY --from=builder /daizu-online-judge-front/build /daizu

CMD ["npx", "serve", "/daizu", "-l", "8080"]
