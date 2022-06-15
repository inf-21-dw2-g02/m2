CREATE SCHEMA `car_dealership`;

USE `car_dealership`;

CREATE TABLE `car` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) NOT NULL,
  `color` varchar(512) NOT NULL,
  `engineId` int NULL,
  `manufacturerId` int NULL,
  `ownerId` int NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `engine` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `horsepower` int NOT NULL,
  `brand` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `founded` int NOT NULL,
  `description` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

CREATE TABLE `owner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL,
  `age` int NOT NULL,
  `sex` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

GRANT ALL ON *.* TO 'root' @'%' IDENTIFIED BY '12345678';

INSERT INTO
  `car`
VALUES
  (1, 'BMW M4', 'BMW Car', '#bfb9b9', 3, 1, 1),
  (2, 'FIAT 500', 'FIAT Car', '#dd0bbc', 2, 2, 3),
  (
    3,
    'Nissan GTR R34',
    'Nissan Car',
    '#000000',
    1,
    3,
    2
  ),
  (
    4,
    'Acura NSX Type S',
    'Honda Car',
    '#8d8686',
    6,
    4,
    13
  ),
  (5, 'BMW M240i', 'BMW Car', '#a6168f', 7, 1, 4),
  (
    6,
    'Lamborghini Countach LPI 800-4 ',
    'Lamborghini Car',
    '#eae2e2',
    8,
    15,
    12
  ),
  (
    7,
    'Toyota Celsior',
    'Toyota Car',
    '#1c0202',
    9,
    7,
    8
  ),
  (
    8,
    'Toyota Corolla Cross 1.8 XR',
    'Toyota Car',
    '#c4b6b6',
    10,
    7,
    11
  ),
  (
    9,
    'Skoda Octavia 2.0 TDI',
    'Skoda Car',
    '#c41515',
    11,
    9,
    7
  ),
  (
    10,
    'Volkswagen Polo',
    'German Car',
    '#1033df',
    11,
    8,
    10
  ),
  (
    11,
    'DS3 ',
    'Ds Automobiles Car',
    '#000000',
    18,
    22,
    30
  ),
  (
    12,
    'Audi Q3',
    'German Car',
    '#c41515',
    27,
    23,
    25
  ),
  (
    13,
    'Audi Q5',
    'German Car',
    '#8d8686',
    28,
    23,
    23
  ),
  (
    14,
    'Audi Q5',
    'German Car',
    '#ee17f9',
    28,
    23,
    22
  ),
  (
    15,
    'Opel Corsa',
    'Opel City Car',
    '#22a035b',
    24,
    25,
    21
  ),
  (
    16,
    'Opel Insignia',
    'Opel LiftBack Car',
    '#62b372a',
    24,
    25,
    19
  ),
  (
    17,
    'Opel Mokka',
    'Opel SUV Car',
    '#57e2b1',
    24,
    25,
    20
  );
  

INSERT INTO
  `engine`
VALUES
  (1, 'BMW V12', 685, 'BMW'),
  (2, 'FIAT V6', 423, 'FIAT'),
  (3, 'Nissan V10', 658, 'Nissan'),
  (6, 'Honda V6', 586, 'Honda'),
  (7, 'BMW Straight 6', 500, 'BMW'),
  (8, 'Lamborghini V12', 542, 'Lamborghini'),
  (9, 'Toyota V8', 496, 'Toyota'),
  (10, 'Toyota Straight 4', 450, 'Toyota'),
  (11, 'Smart Straight 4', 62, 'Smart'),
  (12, 'Volvo Straight 4', 192, 'Volvo'),
  (13, 'Maserati V10', 492, 'Maserati'),
  (14, 'Alfa Romeo V8', 366, 'Alfa Romeo'),
  (15, 'Mazda Straight 4', 111, 'Mazda'),
  (16, 'Skoda V4', 132, 'Skoda'),
  (17, 'Skoda V8', 365, 'Skoda'),
  (18, 'Ds Automobiles V6', 492, 'Ds Automobiles'),
  (19, 'Abarth Spiral Engine', 33, 'Abarth'),
  (20, 'Abarth V4', 77, 'Abarth'),
  (21, 'Lancia Straight 4', 152, 'Lancia'),
  (22, 'Hyundai V4', 99, 'Hyundai'),
  (23, 'Citroen V8', 292, 'Citroen'),
  (24, 'Opel Straight 4', 110, 'Opel'),
  (25, 'Opel V6', 189, 'Opel'),
  (26, 'Opel V8', 342, 'Opel'),
  (27, 'Audi V4', 122, 'Audi'),
  (28, 'Audi V8', 431, 'Audi'),
  (29, 'Lexus V10', 666, 'Lexus'),
  (30, 'Hyundai  V6', 272, 'Hyundai');

INSERT INTO
  `manufacturer`
VALUES
  (1, 'BMW', 1969, 'German Manufacturer'),
  (2, 'FIAT', 1841, 'Italian Manufacturer'),
  (3, 'Nissan', 1952, 'Japanese Manufacturer'),
  (4, 'Honda', 1942, 'Japanese Manufacturer'),
  (5, 'Ferrari', 1853, 'Italian Manufacturer'),
  (6, 'Porsche', 1928, 'German Manufacturer'),
  (7, 'Toyota', 1852, 'Japanese Manufacturer'),
  (8, 'Volkswagen', 1965, 'German Manufacturer'),
  (9, 'Škoda', 1962, 'Czech Manufacturer'),
  (10, 'Mitsubishi', 1942, 'Japanese Manufacturer'),
  (11, 'Citroën', 1919, 'French Manufacturer'),
  (12, 'Peugeot', 1896, 'French Manufacturer'),
  (13, 'Renault', 1893, 'French Manufacturer'),
  (14, 'Smart', 1957, 'German Manufacturer'),
  (15, 'Lamborghini', 1894, 'Italian Manufacturer'),
  (16, 'Lexus', 1960, 'Japanese Manufacturer'),
  (17, 'Mazda', 1954, 'Japanese Manufacturer'),
  (18, 'Hyundai', 1933, 'South Korean Manufacturer'),
  (19, 'Skoda', 1918, 'Czech Manufacturer'),
  (20, 'Bugatti', 1944, 'French Manufacturer'),
  (21, 'Citroen', 1919, 'French Manufacturer'),
  (22, 'Ds Automobiles', 2009, 'French Manufacturer'),
  (23, 'Audi', 1910, 'German Manufacturer'),
  (24, 'Ford Germany', 1925, 'German Manufacturer'),
  (25, 'Opel', 1862, 'German Manufacturer'),
  (26, 'Abarth', 1949, 'Italian Manufacturer'),
  (27, 'Lancia', 1899, 'Italian Manufacturer'),
  (28, 'Maserati', 1955, 'Italian Manufacturer'),
  (29, 'Alfa Romeo', 1976, 'Italian Manufacturer'),
  (30, 'Volvo', 1989, 'Swedish Manufacturer');

INSERT INTO
  `owner`
VALUES
  (1, 'André Cacheira', 19, 'Male'),
  (2, 'Raul Gonçalves', 19, 'Male'),
  (3, 'Bruno Sousa', 21, 'Male'),
  (4, 'José Alberto', 32, 'Male'),
  (5, 'Maria Alfreda', 25, 'Female'),
  (6, 'Josefa Almeida', 20, 'Female'),
  (7, 'Pedro Tomás', 54, 'Male'),
  (8, 'Alberto Jardim', 63, 'Male'),
  (9, 'Luís Sobral', 27, 'Male'),
  (10, 'Marta Pinto', 37, 'Female'),
  (11, 'Petra Rodrigues', 73, 'Female'),
  (12, 'Zacarias Benedito', 68, 'Male'),
  (13, 'José Maria', 47, 'Male'),
  (14, 'Maria Alberto', 74, 'Female'),
  (15, 'Alfredo José', 56, 'Male'),
  (16, 'André Martins', 22, 'Male'),
  (17, 'João Gonçalves', 44, 'Male'),
  (18, 'Bruno Pereira', 27, 'Male'),
  (19, 'Fernando Alberto', 55, 'Male'),
  (20, 'Maria João', 24, 'Female'),
  (21, 'Andreia Almeida', 30, 'Female'),
  (22, 'Pedro Ruben', 75, 'Male'),
  (23, 'Alberto Andrade', 53, 'Male'),
  (24, 'David Sobral', 25, 'Male'),
  (25, 'Marta Pinheiro', 32, 'Female'),
  (26, 'Petra Gonçalves', 23, 'Female'),
  (27, 'Alberto Benedito', 62, 'Male'),
  (28, 'José Sousa', 47, 'Male'),
  (29, 'Maria Sousa', 34, 'Female'),
  (30, 'Joaquim Gonçalves', 56, 'Male');