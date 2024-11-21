# Usa una imagen base con Node.js
FROM node:18-alpine AS frontend-builder

# Crea y establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente del proyecto al contenedor
COPY . .

# Ejecuta el build del proyecto
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos de build desde el contenedor anterior
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Expone el puerto 80 para el contenedor
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
