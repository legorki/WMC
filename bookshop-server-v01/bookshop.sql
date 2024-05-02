-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2024 at 04:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `bookshop`
--
DROP DATABASE IF EXISTS `bookshop`;
CREATE DATABASE IF NOT EXISTS `bookshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bookshop`;

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `familyname` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `uuid`, `firstname`, `familyname`) VALUES
(1, '697ec05c-a0ec-11ee-b4cd-1c697ab46a24', 'Patric', 'Highsmith'),
(2, '697f0353-a0ec-11ee-b4cd-1c697ab46a24', 'Iain M.', 'Banks'),
(6, '697f041d-a0ec-11ee-b4cd-1c697ab46a24', 'Zadie', 'Smith'),
(8, '697f04d7-a0ec-11ee-b4cd-1c697ab46a24', 'Donald E.', 'Knuth'),
(9, '697f0545-a0ec-11ee-b4cd-1c697ab46a24', 'Paul', 'Hudson'),
(13, '697f059e-a0ec-11ee-b4cd-1c697ab46a24', 'Eugene', 'O\'Neill'),
(14, '697f05fa-a0ec-11ee-b4cd-1c697ab46a24', '', 'Ovid'),
(15, '697f0653-a0ec-11ee-b4cd-1c697ab46a24', 'Percy Bysshe', 'Shellley'),
(16, '697f06b6-a0ec-11ee-b4cd-1c697ab46a24', 'James', 'Joyce'),
(111, 'fae9732b-ac8b-11ee-a4ec-1c697ab46a24', 'Andreas', 'Schenk');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) DEFAULT NULL,
  `isbn` char(20) NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `uuid`, `isbn`, `author_id`, `title`, `price`) VALUES
(1, '2b600ab3-a0ed-11ee-b4cd-1c697ab46a24', '0099282976', 1, 'The Cry of the Owl', 10.91),
(2, '2b6044ec-a0ed-11ee-b4cd-1c697ab46a24', '0099283077', 1, 'Strangers on a Train', 11.2),
(3, '2b6045b3-a0ed-11ee-b4cd-1c697ab46a24', '0099286599', 1, 'The Boy Who Followed Ripley', 11.2),
(4, '2b60466b-a0ed-11ee-b4cd-1c697ab46a24', '0140297782', 6, 'White Teeth', 6.89),
(5, '2b6046e5-a0ed-11ee-b4cd-1c697ab46a24', '014044789X', 14, 'The Metamorphoses', 13.85),
(6, '2b6047b8-a0ed-11ee-b4cd-1c697ab46a24', '0141182806', 16, 'Ulysses', 13.89),
(7, '2b604821-a0ed-11ee-b4cd-1c697ab46a24', '0201485419', 8, 'The Art of Computer Programming 1-3', 94.89),
(8, '2b604889-a0ed-11ee-b4cd-1c697ab46a24', '0393977528', 15, 'Shelley\'s Poetry and Prose', 16.97),
(9, '2b604918-a0ed-11ee-b4cd-1c697ab46a24', '0596100671', 9, 'PHP in a Nutshell', 29),
(10, '2b604974-a0ed-11ee-b4cd-1c697ab46a24', '1854591029', 13, 'Long Day\'s Journey into Night', 11.95),
(11, '2b6049dc-a0ed-11ee-b4cd-1c697ab46a24', '1857231465', 2, 'The Player of Games', 11.97),
(12, '2b604a36-a0ed-11ee-b4cd-1c697ab46a24', '1857232739', 2, 'Feersum Endjinn', 11.97),
(13, '2b604a8f-a0ed-11ee-b4cd-1c697ab46a24', '185723457X', 2, 'Excession', 11.97),
(15, '2b604ae7-a0ed-11ee-b4cd-1c697ab46a24', '0099282976', 1, 'The Cry of the l', 10.99);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) UNSIGNED NOT NULL,
  `uuid` varchar(36) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `ordertime` datetime NOT NULL,
  `delivery` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `uuid`, `user_id`, `ordertime`, `delivery`) VALUES
(1, 'd5c7b43e-a0ed-11ee-b4cd-1c697ab46a24', 1, '2006-11-04 14:53:19', '2023-03-25 13:12:07'),
(2, 'd5c7b6f1-a0ed-11ee-b4cd-1c697ab46a24', 1, '2006-11-04 15:11:02', '2023-03-25 13:12:12'),
(13, 'd5c7b7b0-a0ed-11ee-b4cd-1c697ab46a24', 2, '2023-01-25 12:20:04', '2023-03-25 13:12:13');

-- --------------------------------------------------------

--
-- Table structure for table `ordercontent`
--

CREATE TABLE `ordercontent` (
  `order_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `ordercontent`
--

INSERT INTO `ordercontent` (`order_id`, `book_id`) VALUES
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(13, 9),
(13, 10),
(13, 11);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) DEFAULT NULL,
  `username` varchar(20) NOT NULL,
  `password` char(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `sex` varchar(12) NOT NULL DEFAULT 'thing',
  `address` varchar(100) DEFAULT NULL,
  `postalcode` varchar(10) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `country` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `username`, `password`, `email`, `is_admin`, `firstname`, `lastname`, `sex`, `address`, `postalcode`, `city`, `country`) VALUES
(1, '25d8e727-a0ee-11ee-b4cd-1c697ab46a24', 'admin', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'admin@admin.com', 1, 'Admine', 'Adminsdorfer', 'female', 'Admingasse 1/2/3', '8010', 'Graz', 'Austria'),
(2, '25d8e988-a0ee-11ee-b4cd-1c697ab46a24', 'Andreas', 'b15c342f1de186996bcca5e1a23cd684d2fadb32', 'andreas@schenk.com', 0, 'Andreas', 'Schenk', 'male', 'Spengergasse 20', '1050', 'Wien', 'Österreich'),
(3, '25d8ea70-a0ee-11ee-b4cd-1c697ab46a24', 'test', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', 'test@test.com', 0, 'Testi', 'Testo', 'male', 'Teststraße 99a', '4020', 'Linz', 'Austria'),
(26, NULL, 'a', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', 'a', 0, NULL, NULL, 'thing', NULL, NULL, NULL, NULL),
(27, NULL, 'aaaaaa', 'e93b4e3c464ffd51732fbd6ded717e9efda28aad', 'andreas.o.schenk@gmail.com', 0, NULL, NULL, 'thing', NULL, NULL, NULL, NULL),
(28, NULL, 'dddddd', '40d4aca182cca09df18e8d71e61de1d73cf3739d', 'andreas.o.schenk@gmail.com', 0, NULL, NULL, 'thing', NULL, NULL, NULL, NULL),
(29, 'eabe230f-a4c4-11ee-ac74-1c697ab46a24', 'uuuuuu', '7d314276e88f98d25f6772ac034669fec35e5901', 'andreas.o.schenk@gmail.com', 0, NULL, NULL, 'thing', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuid_index` (`uuid`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `book_uuid` (`uuid`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_uuid` (`uuid`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `ordercontent`
--
ALTER TABLE `ordercontent`
  ADD PRIMARY KEY (`order_id`,`book_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `user_index` (`uuid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=112;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;
COMMIT;