-- Volcando estructura de base de datos para sofkaspacestation
CREATE DATABASE IF NOT EXISTS `sofkaspacestation`;
USE `sofkaspacestation`;

-- Volcando estructura para tabla sofkaspacestation.naves
CREATE TABLE IF NOT EXISTS `naves` (
  `id_nave` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `mision` varchar(50) NOT NULL DEFAULT '0',
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `tripulacion` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_nave`),
  UNIQUE KEY `nombre` (`nombre`)
);

-- Volcando datos para la tabla sofkaspacestation.naves: ~0 rows (aproximadamente)
INSERT INTO `naves` (`id_nave`, `nombre`, `mision`, `tipo`, `tripulacion`) VALUES
	(1, 'Orion', 'Estudio de cuerpos celestes', 'Nave no tripulada', '0'),
	(2, 'Sonda Cass', 'Estudio de cuerpos celestes', 'Nave no tripulada', '0'),
	(3, 'Bruno', 'Estudio de cuerpos celestes', 'Nave no tripulada', '0'),
	(4, 'SunShine', 'Lanzar carga', 'Vehiculo lanzadera', '0'),
	(5, 'Roosette', 'Lanzar carga', 'Vehiculo lanzadera', '0'),
	(6, 'CrispStation', 'Lanzar carga', 'Vehiculo lanzadera', '0'),
	(7, 'HumanPropulsor', 'Experimentos espaciales', 'Nave tripulada', '5'),
	(8, 'Infinite', 'Experimentos espaciales', 'Nave tripulada', '2'),
	(9, 'Orianna', 'Experimentos espaciales', 'Nave tripulada', '4'),
	(10, 'Analie', 'Incrementar conocimientos', 'Nave Sofkiana', '1'),
	(11, 'Albert Einstein', 'Incrementar conocimientos', 'Nave Sofkiana', '1'),
	(12, 'Tesla', 'Incrementar conocimientos', 'Nave Sofkiana', '1');

-- Volcando estructura para tabla sofkaspacestation.naves_config
CREATE TABLE IF NOT EXISTS `naves_config` (
  `id_registro` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `mision` varchar(100) NOT NULL DEFAULT '0',
  `tripulacion` varchar(50) DEFAULT NULL,
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `combustible` varchar(50) NOT NULL DEFAULT '0',
  `distancia` varchar(100) DEFAULT NULL,
  `planetas` varchar(50) DEFAULT NULL,
  `quiz` varchar(50) DEFAULT NULL,
  `carga` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_registro`)
);

-- Volcando datos para la tabla sofkaspacestation.naves_config: ~12 rows (aproximadamente)
INSERT INTO `naves_config` (`id_registro`, `id_nave`, `nombre`, `mision`, `tripulacion`, `tipo`, `combustible`, `distancia`, `planetas`, `quiz`, `carga`) VALUES
	(1, 1, 'Orion', 'Estudio de cuerpos celestes', NULL, 'Nave no tripulada', 'Celdas fotovoltaicas', 'Cada vez más lejos', 'true', NULL, NULL),
	(2, 2, 'Sonda Cass', 'Estudio de cuerpos celestes', NULL, 'Nave no tripulada', 'Celdas fotovoltaicas', 'Cada vez más lejos', 'false', NULL, NULL),
	(3, 3, 'Bruno', 'Estudio de cuerpos celestes', NULL, 'Nave no tripulada', 'Celdas fotovoltaicas', 'Cada vez más lejos', 'false', NULL, NULL),
	(4, 4, 'SunShine', 'Lanzar carga', NULL, 'Vehiculo lanzadera', 'Combustion quimica', 'Orbita baja', NULL, NULL, 'Satelite'),
	(5, 5, 'Roosette', 'Lanzar carga', NULL, 'Vehiculo lanzadera', 'Combustion quimica', 'Orbita baja', NULL, NULL, 'Sonda'),
	(6, 6, 'CrispStation', 'Lanzar carga', NULL, 'Vehiculo lanzadera', 'Combustion quimica', 'Orbita baja', NULL, NULL, 'Nave'),
	(7, 7, 'HumanPropulsor', 'Experimentos espaciales', '5', 'Nave tripulada', 'Combustion quimica', 'Orbita baja', NULL, NULL, NULL),
	(8, 8, 'Infinite', 'Experimentos espaciales', '2', 'Nave tripulada', 'Combustion quimica', 'Orbita baja', NULL, NULL, NULL),
	(9, 9, 'Orianna', 'Experimentos espaciales', '4', 'Nave tripulada', 'Combustion quimica', 'Orbita baja', NULL, NULL, NULL),
	(10, 10, 'Analie', 'Incrementar conocimientos', '1', 'Nave Sofkiana', 'Celdas fotoneuronales', 'El límite es el cielo', NULL, '"A medio camino"', NULL),
	(11, 11, 'Albert Einstein', 'Incrementar conocimientos', '1', 'Nave Sofkiana', 'Celdas fotoneuronales', 'El límite es el cielo', NULL, '"Espera los resultados"', NULL),
	(12, 12, 'Tesla', 'Incrementar conocimientos', '1', 'Nave Sofkiana', 'Celdas fotoneuronales', 'El límite es el cielo', NULL, '"Apenas comienzas"', NULL);
/;


