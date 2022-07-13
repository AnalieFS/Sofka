
-- Volcando estructura de base de datos para sofkaspacestation
CREATE DATABASE IF NOT EXISTS `sofkaspacestation`;
USE `sofkaspacestation`;

-- Volcando estructura para tabla sofkaspacestation.naves
CREATE TABLE IF NOT EXISTS `naves` (
  `id_nave` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_nave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla sofkaspacestation.naves_config
CREATE TABLE IF NOT EXISTS `naves_config` (
  `id_registro` int NOT NULL AUTO_INCREMENT,
  `id_nave` int NOT NULL DEFAULT '0',
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  `combustible` varchar(50) NOT NULL DEFAULT '0',
  `mision` varchar(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_registro`),
  UNIQUE KEY `id_nave` (`id_nave`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
