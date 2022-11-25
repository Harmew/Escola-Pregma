# Escola Pregma

## Integrantes 

Nome: Daniel de Oliveira

RA: 172214678


## Utilização

```É necessário ter o NodeJS e o PostgreSQL instalado```

### Primeira etapa!
	
Abra o vscode utilize o comando ```cd server/``` no terminal e faça um ```npm i``` 
	
Já na parte do **.env** faça a conexão da sua db colocando o  usuario e a senha no lugar de ```postgres:123(usuario:senha)```

Em seguida utilize o comando ```npx prisma generate dev``` e depois ```npx prisma migrate dev```

E por fim utilize o ```npm start``` e seu servidor estara online

### Segunda etapa!

Abra um novo terminal dentro do vscode e execulte o comando ```cd client/``` e depois um ```npm i``` e logo em seguida um ```npm start```

### Fim! 

Pronto, caso tenha feito todos esses passos em ordem, tudo dever estar funcionando.


### Extra!

Pasta Figma contendo o wireframe e o design do projeto pelo Figma

Modelo do Banco de Dados em pregma.pgerd (abrir no pgAdmin)