-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2017 a las 10:53:32
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
CREATE DATABASE `autoescuela` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
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
  `TARIFA` varchar(10) NOT NULL,
  `MATRICULA_COCHE` varchar(8) NOT NULL,
  `DNI_PROFESOR` varchar(10) NOT NULL,
  `DNI_CLIENTE` varchar(10) NOT NULL,
  PRIMARY KEY (`ID_CLASES`),
  UNIQUE KEY `UNIQUE` (`ID_CLASES`,`DNI_PROFESOR`,`DNI_CLIENTE`,`MATRICULA_COCHE`),
  KEY `DNI_PROFESOR` (`DNI_PROFESOR`),
  KEY `DNI_CLIENTE` (`DNI_CLIENTE`),
  KEY `MATRICULA_COCHE` (`MATRICULA_COCHE`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELACIONES PARA LA TABLA `clases`:
--   `MATRICULA_COCHE`
--       `coches` -> `MATRICULA`
--   `DNI_CLIENTE`
--       `personas` -> `DNI`
--   `DNI_PROFESOR`
--       `personas` -> `DNI`
--

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `clases` (`ID_CLASES`, `DURACION`, `HORA`, `FECHA`, `TARIFA`, `MATRICULA_COCHE`, `DNI_PROFESOR`, `DNI_CLIENTE`) VALUES
(1, 50, '16:00:00', '2017-03-02', '10', '8888 RRA', '11223344-T', '77857469-R');

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

--
-- Volcado de datos para la tabla `coches`
--

INSERT INTO `coches` (`MATRICULA`, `MARCA`, `MODELO`) VALUES
('8888 RRA', 'Fiat', 'Panda');

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

--
-- Volcado de datos para la tabla `matriculas`
--

INSERT INTO `matriculas` (`ID_MATRICULA`, `CANTIDAD_ABONADA`, `FECHA`, `PRACTICO_APROBADO`, `TEORICO_APROBADO`, `PRECIO`, `DNI_CLIENTE`) VALUES
(1, '450', '2017-03-01', 0, 0, '450', '66524728-P');

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
  `TIPO` varchar(1) NOT NULL,
  PRIMARY KEY (`DNI`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`DNI`, `NOMBRE`, `APELLIDOS`, `DIRECCION`, `EMAIL`, `TELEFONO`, `TIPO`) VALUES
('11223344-T', 'Sofia', 'Lopez', 'Avenida de España', 'sofia@hotmail.com', 777777777, 'c'),
('66524728-P', 'Jose', 'Jimenez', 'Calle de la piruleta', 'Jose@hotmail.com', 655324578, 'c'),
('77857469-R', 'Manolo', 'Rodriguez', 'Avenida de España', 'Manolo@gmail.com', 955333698, 'p');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clases`
--
ALTER TABLE `clases`
  ADD CONSTRAINT `clases_ibfk_3` FOREIGN KEY (`MATRICULA_COCHE`) REFERENCES `coches` (`MATRICULA`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_1` FOREIGN KEY (`DNI_CLIENTE`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clases_ibfk_2` FOREIGN KEY (`DNI_PROFESOR`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `matriculas`
--
ALTER TABLE `matriculas`
  ADD CONSTRAINT `matriculas_ibfk_1` FOREIGN KEY (`DNI_CLIENTE`) REFERENCES `personas` (`DNI`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
