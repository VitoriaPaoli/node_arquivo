

- Comando para iniciar um projeto em node
	*npm init

==============================================================================

- Em seguida instalar o typescript no projeto
	*npm install -g typescript

===============================================================================

- Em seguida vamo criar um arquivo de configuração do typescript
	*tsc --init
	*tsc -D --init
	*npm i --save-dev typescript
	*npm install -D typescript


	- *npx tsc --init* -
sera criado um arquivo de configuracao do typrescript

================================================================================

- Deixar moduel resolution habilitado (linha 30) - ("moduleResolution": "node",)

- Deixar moduel rootDir habilitado (linha 29) - ( "rootDir": "./src", )

-Deixar moduel outDir habilitado (linha 52) - ("outDir": "./dist",)

=================================================================================

- Em seguida vamo instalar uma dependencia 

	*npm install --save-dev @types/node


==================================================================================

- Em seguida crie uma pasta nova chamada "src"
- Depois crair um arquivo chamado "index.ts"

===================================================================================


Testar no arquivo "index.ts"

let nome: String = 'rodrigo'
let idade: number = 10

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`)


==================================================================================
- Em seguida fazer a instalaçao do nodemon

	*npm install nodemon* 

=====================================================================================

- Apos instalar o ts-nodemon coloque o comando 

	*npm install -D ts-node*

======================================================================================

	Oj: ir no aquivo "package.json" na linha 7, coloque virgula e na 
	linha 9 coloque - 

		*"start-dev":"nodemon src/index.ts"*

======================================================================================
	Em seguida abrir o terminal e para rdar o arquivo, usar o comando

		* npm run start-dev*

