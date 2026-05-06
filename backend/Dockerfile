FROM node:20                                    # Usa a imagem oficial do Node.js versão 20

WORKDIR /app                                    # Define /app como diretório principal do container

COPY package*.json ./                           # Copia package.json e package-lock.json

RUN npm install                                 # Instala as dependências do projeto

COPY . .                                        # Copia todos os arquivos para dentro do container

EXPOSE 3000                                     # Informa que a aplicação usa a porta 3000

CMD ["node", "server.js"]                       # Inicia o servidor Node.js