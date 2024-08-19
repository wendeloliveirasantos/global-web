# Usar a imagem oficial do Node.js como base
FROM node:20-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código para o contêiner
COPY . .

# Construir o projeto
RUN npm run build

# Expor a porta que o Next.js usará
EXPOSE 4000

# Comando para rodar o servidor Next.js
CMD ["node", "server.js"]
