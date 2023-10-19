-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-10-2023 a las 02:16:29
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--
CREATE DATABASE IF NOT EXISTS `rest-api` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `rest-api`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--
-- Creación: 18-10-2023 a las 22:04:25
-- Última actualización: 19-10-2023 a las 00:06:28
--

CREATE TABLE `personas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date DEFAULT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'Una Corte de Rosas y', 'Sarah J. Maas', 'Ficción histórica', '2016-05-24', '9788408155089'),
(2, 'Casa de Tieraa y San', 'Sarah J. Mass', 'Fantasia romántica', '2020-09-17', '9788420452883'),
(3, 'La Reina Descalza', 'Ildefonso Falcones', 'Ficción histórica', '2013-02-20', ' 978842535052');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
