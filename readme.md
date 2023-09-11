Essa aplicação contem um servidor http para que seja possivel compartilhar os projetos feitos em JS e TS com o navegador

Dentro da pasta `app` rode `npm install` para baixar as dependencias

A pasta `dist` contem os arquivos de distribuição: html, css, js. É essa pasta que vai ser compartilhada com o navegador

Para rodar a aplicação execute `npm run start`. Comando esse que indetifica qualquer alteração feita no codigo e compila novamente o codigo(`npm run watch`) e exibe no navegador(`npm run server`).

Dentro da pasta `app` em `src` é onde se localiza as pastas(controllers, decorators, enums, models, views)

Na pasta `servidor-api` é onde está localizada a API utilizada na aplicação, rode o `npm install` e em seguida execute `npm start` para rodar.  Para acessar os dados acesse `localhost:8080/dados`
