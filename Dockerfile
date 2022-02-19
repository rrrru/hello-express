FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json  ./
COPY src/ ./
RUN npm ci
USER node
ENTRYPOINT ["node", "index.js"]
