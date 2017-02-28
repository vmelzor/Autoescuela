-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-02-2017 a las 11:08:35
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `autoescuela`
--
DROP DATABASE IF EXISTS`autoescuela`;
CREATE DATABASE IF NOT EXISTS `autoescuela` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `autoescuela`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

CREATE TABLE IF NOT EXISTS `clases` (
  `ID_CLASES` int(10) NOT NULL,
  `DURACION` int(3) NOT NULL,
  `HORA` time NOT NULL,
  `FECHA` date NOT NULL,
  PRIMARY KEY (`ID_CLASES`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `DNI` varchar(10) NOT NULL,
  `ID` int(10) NOT NULL,
  PRIMARY KEY (`DNI`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `clientes`:
--   `DNI`
--       `personas` -> `DNI`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coches`
--

CREATE TABLE IF NOT EXISTS `coches` (
  `MATRICULA` varchar(8) NOT NULL,
  `MARCA` varchar(20) NOT NULL,
  `MODELO` varchar(20) NOT NULL,
  PRIMARY KEY (`MATRICULA`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matriculas`
--

CREATE TABLE IF NOT EXISTS `matriculas` (
  `ID_MATRICULA` int(10) NOT NULL,
  `CANTIDAD_ABONADA` varchar(10) NOT NULL,
  `FECHA` date NOT NULL,
  `PRACTICO_APROBADO` tinyint(1) NOT NULL,
  `TEORICO_APROBADO` tinyint(1) NOT NULL,
  `NUM_PRACTICAS` int(2) NOT NULL,
  `PRECIO` varchar(10) NOT NULL,
  `DNI_CLIENTE` varchar(10) NOT NULL,
  PRIMARY KEY (`ID_MATRICULA`),
  UNIQUE KEY `UNIQUE` (`DNI_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `matriculas`:
--   `DNI_CLIENTE`
--       `personas` -> `DNI`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE IF NOT EXISTS `personas` (
  `DNI` varchar(10) NOT NULL,
  `NOMBRE` varchar(40) NOT NULL,
  `APELLIDOS` varchar(40) NOT NULL,
  `DIRECCION` varchar(40) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `TELEFONO` int(9) NOT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `practicas`
--

CREATE TABLE IF NOT EXISTS `practicas` (
  `ID` int(10) NOT NULL,
  `TARIFA` varchar(10) NOT NULL,
  `MATRICULA_COCHE` varchar(8) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `practicas`:
--   `MATRICULA_COCHE`
--       `coches` -> `MATRICULA`
--   `ID`
--       `clases` -> `ID_CLASES`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE IF NOT EXISTS `profesor` (
  `DNI` varchar(10) NOT NULL,
  `ID` int(10) NOT NULL,
  PRIMARY KEY (`DNI`),
  UNIQUE KEY `ID` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `profesor`:
--   `DNI`
--       `personas` -> `DNI`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rel_clase_personas`
--

CREATE TABLE IF NOT EXISTS `rel_clase_personas` (
  `ID_CLASES` int(10) NOT NULL,
  `DNI_PROFESOR` varchar(10) NOT NULL,
  `DNI_CLIENTE` varchar(10) NOT NULL,
  UNIQUE KEY `UNIQUE` (`ID_CLASES`,`DNI_PROFESOR`,`DNI_CLIENTE`),
  KEY `DNI_PROFESOR` (`DNI_PROFESOR`),
  KEY `DNI_CLIENTE` (`DNI_CLIENTE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `rel_clase_personas`:
--   `DNI_PROFESOR`
--       `profesor` -> `DNI`
--   `DNI_CLIENTE`
--       `clientes` -> `DNI`
--   `ID_CLASES`
--       `clases` -> `ID_CLASES`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teoricas`
--

CREATE TABLE IF NOT EXISTS `teoricas` (
  `ID` int(10) NOT NULL,
  `AFORO` int(2) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `teoricas`:
--   `ID`
--       `clases` -> `ID_CLASES`
--

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `matriculas`
--
ALTER TABLE `matriculas`
  ADD CONSTRAINT `matriculas_ibfk_1` FOREIGN KEY (`DNI_CLIENTE`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `practicas`
--
ALTER TABLE `practicas`
  ADD CONSTRAINT `practicas_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `clases` (`ID_CLASES`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `profesor`
--
ALTER TABLE `profesor`
  ADD CONSTRAINT `profesor_ibfk_1` FOREIGN KEY (`DNI`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `rel_clase_personas`
--
ALTER TABLE `rel_clase_personas`
  ADD CONSTRAINT `rel_clase_personas_ibfk_2` FOREIGN KEY (`DNI_PROFESOR`) REFERENCES `profesor` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_clase_personas_ibfk_3` FOREIGN KEY (`DNI_CLIENTE`) REFERENCES `clientes` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rel_clase_personas_ibfk_4` FOREIGN KEY (`ID_CLASES`) REFERENCES `clases` (`ID_CLASES`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `teoricas`
--
ALTER TABLE `teoricas`
  ADD CONSTRAINT `teoricas_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `clases` (`ID_CLASES`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
