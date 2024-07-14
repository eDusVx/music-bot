# Usa uma imagem base oficial do Node.js
FROM node:20

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 10000

# Define o comando para rodar a aplicação
CMD ["npm", "start"]
