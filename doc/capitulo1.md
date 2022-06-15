# Capítulo 1 : Car Dealpership API

## Descrição

Esta API foi desenvolvida com o recurso à OpenAPI, baseada na Arquitetura REST.
A API tem o intuito de fazer a gestão de um Concessionário de Automóveis. Consegue oferecer informação sobre motores, carros, fabricantes e proprietários. Abaixo apresenta-se todas as funcionalidades para controlar toda a informação descrita anteriormente.

A API é composta por 9 controladores, sendo 7 deles para manipular a base de dados, 1 para controlar a autenticação realizada pelo OAuth 2.0 e um último que define a API utilizada. Sendo esses:

* CarsController
* EnginesController
* ManufacturersController
* OwnersController
* CarsByEngineController
* CarsByOwnerController
* CarsByManufacturerController

</br>

* AuthController
* swagger-controller

</br>

O controlador **CarsController** é composto por 6 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET(Count)** -> Retorna o número de carros presente na base de dados.
* **GET** -> Retorna um array com todos os carros presentes na base de dados.
* **POST** -> Adiciona um carro à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo carro.
* **PUT{id}** -> Efetua alterações a um dado carro com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Elimina um carro da base de dados com um dado ID passado como parâmetro.

<br>

O controlador **EnginesController** é composto por 6 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET(Count)** -> Retorna o número de motores presente na base de dados.
* **GET** -> Retorna um array com todos os motores presentes na base de dados.
* **POST** -> Adiciona um motor à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo motor.
* **PUT{id}** -> Efetua alterações a um dado motor com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Elimina um motor da base de dados com um dado ID passado como parâmetro.

<br>

O controlador **ManufacturersController** é composto por 6 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET(Count)** -> Retorna o número de fabricantes presente na base de dados.
* **GET** -> Retorna um array com todos os fabricantes presentes na base de dados.
* **POST** -> Adiciona um fabricante à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo fabricante.
* **PUT{id}** -> Efetua alterações a um dado fabricante com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Elimina um fabricante da base de dados com um dado ID passado como parâmetro.

<br>

O controlador **OwnersController** é composto por 6 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET(Count)** -> Retorna o número de donos presente na base de dados.
* **GET** -> Retorna um array com todos os donos presentes na base de dados.
* **POST** -> Adiciona um dono à base de dados.
* **GET{id}** -> Dado um ID passado como parâmetro, retorna o respetivo dono.
* **PUT{id}** -> Efetua alterações a um dado dono com um respetivo ID passado como parâmetro.
* **DELETE{id}** -> Elimina um dono da base de dados com um dado ID passado como parâmetro.

<br>

O controlador **CarsByEngineController** é composto por 1 funcionalidade baseada em verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os carros associados a um motor com um ID passado como parâmetro.

<br>

O controlador **CarsByOwnerController** é composto por 1 funcionalidade baseada em verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os carros associados a um dono com um ID passado como parâmetro.

<br>

O controlador **CarsByManufacturerController** é composto por 1 funcionalidade baseada em verbos do protocolo HTTP:
* **GET{id}** -> Retorna todos os carros associados a um fabricante com um ID passado como parâmetro.

<br>

O controlador **AuthController** é composto por 7 funcionalidades baseadas em verbos do protocolo HTTP:
* **GET** (login) -> Retorna uma página pública onde é possivel efetuar login ou ir para a documentação da API.
* **GET** (protected) -> Retorna uma página privada onde é possivel aceder a endpoints que retornam informação do utilizador, ir para a documentação da API ou efetuar logout.
* **GET** (logout) -> Efetua logout e retorna uma página pública onde é possivel efetuar login ou ir para a documentação da API.
* **GET** (me) -> Retorna informações do utilizador.
* **GET** (gitHubMe) -> Retorna informações do utilizador com recurso à token de authentication.
* **GET** (auth/github) -> Operação responsável por efetuar a autenticação.
* **GET** (auth/github/callback) -> Operação responsável por comunicar de volta o token.


<br>

O controlador **swagger-controler** é responsável pela definição da documentação da API e é composto por 1 funcionalidade baseada em verbos do protocolo HTTP:
* **GET** (docs/swagger.json) -> Retorna uma página com a documentação da API no formato .json.


<br>

## Grupo 2

* André Cacheira / Perfil GitHub: [@Cacheira14](https://github.com/Cacheira14)
* Bruno Sousa / Perfil GitHub: [@brunomfsrw1](https://github.com/brunomfsrw1)
* Raul Gonçalves / Perfil GitHub: [@RaulGoncalves21x](https://github.com/RaulGoncalves21x)

<br>

| [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) | [>](capitulo2.md) | [>>](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |
