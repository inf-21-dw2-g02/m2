# Capítulo 2 : Recursos
Esta API consegue trabalhar com 4 recursos diferentes, sendo esses:

## Engine:
* **id** -> (int) Valor identificativo do recurso;
* **name** -> (string) Nome do motor;
* **horsepower** -> (int) Potência do motor em cavalos;
* **brand** -> (string) Marca do motor;

## Manufacturer:
* **id** -> (int) Valor identificativo do recurso;
* **name** -> (string) Nome do fabricante;
* **founded** -> (int) Ano em que fabricante foi fundado;
* **description** -> (string) Descrição do fabricante;

## Owner:
* **id** -> (int) Valor identificativo do recurso;
* **name** -> (string) Nome do dono;
* **age** -> (int) Idade do dono;
* **sex** -> (string) Sexo do dono;

## Car:
* **id** -> (int) Valor identificativo do recurso;
* **name** -> (string) Nome/modelo do carro;
* **description** -> (string) Descrição do carro;
* **color** -> (string) Cor do carro;
* **engineId** -> (int) Valor utilizado para estabelecer a ligação motor/carro;
* **manufacturerId** -> (int) Valor utilizado para estabelecer a ligação fabricante/carro;
* **ownerId** -> (int) Valor utilizado para estabelecer a ligação dono/carro;

**Nota:** O recurso carro serve como recurso "mãe", sendo a ligação entre todos os outros recursos.

<br>

| [<](capitulo1.md) | [1](capitulo1.md) | [2](capitulo2.md) | [3](capitulo3.md) | [>](capitulo3.md) |
| :---: | :---: | :---: | :---: | :---: |