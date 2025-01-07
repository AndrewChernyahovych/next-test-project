FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NEXT_PUBLIC_DIR=src/app
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
