# Capítulo 3 : Produto

## 3.1 Desenvolvimento

### 3.1.1 Express

Esta API foi formulada com recurso ao express, uma framework que engrena com a funcionalidade de Web Server do Node.js e que visa adicionar novas características de forma simples, facilitanto a organização de uma API relativamente aos middlewares e às rotas. No nosso caso, provou-se especialmente útil na definição de endpoints e de rotas, permitindo uma organização mais legível dos ficheiros da API, evitando a que todas as funcionalidades da mesma estivessem descritos num só ficheiro.

### 3.1.2 Docker

Com vista a API poder ser montada rapidamente e utilizada através de uma interface, ignorando definições anteriores, a API e o servidor MySQL, foram colocados em containers Docker. Para estes containers conseguirem comunicar entre si, foi desenvolvido um docker-compose que junta as imagens, detalhando o seu espaço de trabalho, e cria uma rede interna partilhada pelos dois contentores.

## 3.2 Instalação

Para efetuar a instalação e compilação deste projeto, estão abaixo apresentados os passos que serão necessários:

* Passo 1: Importar o ficheiro **['docker-compose.yaml'](../docker-compose.yaml)**;
* Passo 2: Abrir a linha de comandos (CLI);
* Passo 3: Entrar no diretório onde se encontra o ficheiro importado anteriormente;
* Passo 4: Executar o seguinte comando **'docker-compose up'**;
* Passo 5: Abrir o Browser no URL **'http://localhost:3000'**.

## 3.3 Instruções de Utilização

O ecrã inicial remete o utilizador para a possibilidade de efetuar login ou visualizar a documentação da API. Caso o utilizador não se autentique, poderá apenas efetuar os pedidos GET disponibilizados pela API. Em contrapartida, depois de autenticado, poderá efetuar qualquer um dos pedidos documentados.
Depois de efetuar Login, o utilizador poderá verificar as informações da conta GitHub utilizada.
Na documentação estarão definidos os schemas utilizados para cada recurso bem como exemplos da sua utilização em cada um dos tipos de pedidos, pelo que essa formulação deverá ser seguida de forma a criar pedidos válidos.

## 3.4 Detalhes de Implementação

Efetuado o desenvolvimento referido no ponto 3.1, foi necessário adaptar a API para que esta pudesse funcionar em containers. Para tal foram desenvolvidos os seguintes ficheiros:
* **['database_v1.sql'](../API/db/database_v1.sql)** - Ficheiro com a criação do Schema, Tabelas e inserções de dados a usar pelo container de MySQL e com a alteração de permissões para o utilizador;
* **['setup.sh'](../API/db/setup.sh)** - Script responsável por ligar o serviço MySQL, carregar a base de dados e desligar o serviço novamente;
* **['dockerfile.mysql'](../API/dockerfile.mysql)** - Ficheiro dockerfile responsável pela configuração da imagem MySQL, definição de espaço de trabalho;
* **['dockerfile'](../API/dockerfile)** - Ficheiro dockerfile responsável pela configuração da imagem da aplicação, definição de espaço de trabalho e definição do **port** que ficaria exposto;
* **['docker-compose.yml'](../API/docker-compose.yml)** - Ficheiro docker-compose que, durante o desenvolvimento, permitiu aos dois containers serem lançados em paralelo e estabelecerem uma ligação entre si;
* **['docker-compose.yaml'](../docker-compose.yaml)** - Ficheiro docker-compose responsável por, numa versão final, facilitar a obtenção dos dois containers, gerando também uma ligação entre os mesmos.

<br>

| [<<](capitulo1.md) | [<](capitulo2.md) | [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |