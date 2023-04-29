# Trilha Dev - Pixel - 23.1 
## Exercício 2
### Introdução
No segundo exercício você irá praticar um pouco de Javascript.
Para isso, você irá baixar este repositório para sua máquina local, e resolver cada um dos 12 exercícios, que estão separados por pastas. Por fim você irá subir para esse repositório remoto uma branch com seu nome que possui a sua resolução dos exercícios.

### Flow básico
1. Para baixar o repositório você deve criar um *clone*
   - `git clone https://github.com/pixel-ufsc/trilha-dev-ex2-23.1.git`
   - ou
   - `git clone git@github.com:pixel-ufsc/trilha-dev-ex2-23.1`
   - ou
   - Baixar zip e descompactar
1. Vá para a pasta /trilha-dev-ex2-23.1
   - `cd trilha-dev-ex2-23.1`
1. Crie uma branch seguindo o seguinte padrão para nome: new/nome-sobrenome
   - `git branch new/nome-sobrenome`
1. Altere da branch main para a sua nova branch criada
   - `git checkout new/nome-sobrenome`
1. Resolva os exercícios alterando os arquivos index.js de cada pasta
1. Para cada exercício commit suas mudanças
   - `git add .`
   - `git commit -m "Add resolução do exercício 01"`
1. Publique a branch e envie sua adição para o repositório remoto
   - `git push -u origin new/nome-sobrenome`

### Requisitos e como rodar scripts .js
Para conseguir rodas scripts em Javascript no seu computador é necessário que você tenha o Node.js instalado na sua máquina. Uma vez que tenha o Node.js instalado, e seu script esteja finalizado rode o seguinte comando:

`node ./01`

Esse comando irá executar o arquivo index.js que se encontra na pasta nomeada como 01.
Caso o nome do arquivo não seja index.js, é necessário informar o caminho completo, vide exemplo:

`node ./pasta/nome_arquivo.js`
