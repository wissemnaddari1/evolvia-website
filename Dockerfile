# ==========================
# 🏗️ STAGE 1 — Build React App
# ==========================
FROM node:18-alpine AS build
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the production version of your app
RUN npm run build

# ==========================
# 🚀 STAGE 2 — Serve with Nginx
# ==========================
FROM nginx:alpine

# Copy build output to Nginx web root
COPY --from=build /app/build /usr/share/nginx/html

# Optional: add custom nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
