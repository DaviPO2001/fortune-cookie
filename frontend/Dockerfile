FROM nginx:alpine                                               
# Usa imagem leve do Nginx

COPY . /usr/share/nginx/html                                    
# Copia os arquivos do frontend

EXPOSE 80                                                       
# Porta padrão do Nginx

CMD ["nginx", "-g", "daemon off;"]                              
# Inicia o Nginx