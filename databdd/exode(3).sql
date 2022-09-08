-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 07 sep. 2022 à 14:13
-- Version du serveur :  5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `exode`
--

--
-- Déchargement des données de la table `badge`
--

INSERT INTO `badge` (`id`, `name`, `description`, `image`) VALUES
(7, 'Legendary', 'You finished the tests in less than 25 minutes\r\nyou win :\r\nPromotional code for 30% off the game of your choice at our partner (Steam)', ''),
(9, 'Rare', 'You have completed 20 games and won 15 times\r\nyou win :\r\n\r\nGift card worth 25€ from our partner from our partner (Twitch)\r\n', ''),
(11, 'Commun\r\n\r\n', 'You managed to decode the second test\r\nyou win:\r\nDecoder badge (common)', ''),
(13, 'Basic', 'You have completed the first test\r\nyou win :\r\nBasic avatar skin', '');

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220906135908', '2022-09-07 08:03:58', 94),
('DoctrineMigrations\\Version20220906141058', '2022-09-07 08:03:58', 110),
('DoctrineMigrations\\Version20220906142116', '2022-09-07 08:03:58', 379);

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `pseudo`, `rang`, `score`, `historique_id`) VALUES
(1, 'zeyrox@gmail.com', '[]', '$2y$13$YqZVjb6jU8Y2/m9NxL9CcOFKKfbggiMI0Y5gziJ0IHp.VDw2ezt.m', 'Zeyrox', 3, 4800, NULL),
(2, 'sneax@gmail.com', '[]', '$2y$13$qSiqmngoPvuwPqycOSySAOb1r2Yrx9CIFTCAg7WOfvewI04HFgTRy', 'Sneax', 5, 4600, NULL),
(3, 'bizzybee@gmail.com', '[]', '$2y$13$Bcx4ebsQgPU.pFoh0EHDSuUGlMuqywqKFGS/3botr4cU1u1QlOK0y', 'BizzyBee', 2, 4900, NULL),
(5, 'grizlok@gmail.com', '[]', '$2y$13$.EZL3Ec.uk.fPbYeRwBvb.WYoyFmXblNeLPvptquYlIslmfW4aIN6', 'Grizlok', 1, 5000, NULL),
(6, 'chungping@gmail.com', '[]', '$2y$13$0Wvs5TQnS433/MMSZotQ5uIZ8CbP7ijGNNSolBzOBW9xhPXroM/Ji', 'Chungping', 7, 3700, NULL),
(7, 'drealbel@gmail.com', '[]', '$2y$13$cV51sAxw7zptFwYogOR95eMJ.vH6L5Bm4d8jRqH5f07F1jSZHDGjO', 'Drealbel', 8, 3400, NULL),
(8, 'sugarBaby@gmail.com', '[]', '$2y$13$yrbkTsuazxkHWOqYvIi8xOLpEGyC0hvA9Pk0LFlie8h/TW4QlVsNm', 'SugarBaby', 4, 4700, NULL),
(9, 'lylithil@gmail.com', '[]', '$2y$13$7xc62hgnoStnNumIVre5heEkZZL/geD9gtHaMmqRcPm3Qug4a7n.G', 'Lylithil', 9, 3000, NULL),
(10, 'catlcoyhitlchi@gmail.com', '[]', '$2y$13$p0ZkoEaw2tThtnhuSGiLYevkaKPcfgKeLwGZ1zv503KFk4LYQfBay', 'Catlcoyhitlchi', 10, 2700, NULL),
(11, 'sassyLottery@gmail.com', '[]', '$2y$13$MlypzqUH5xqWboNVzrg5ueiMq2hnvUw/dxsDV22wU41A8alKAgb8m', 'SassyLottery', 11, 2300, NULL),
(13, 'fluxy@gmail.com', '[]', '$2y$13$Niv4COoYfAX3eWSmFj7ZEu9RZ3eQjMa5X20VqmquqZmnKbAELe/kO', 'Fluxy75010', 13, 1200, NULL),
(14, 'barmoerim@gmail.com', '[]', '$2y$13$Yiqe/n/6N6Jlpyha/uHmZO0NssuQLHqLKnNXVNNfDVIY7ZrKJBF.S', 'Barmoerim', 14, 800, NULL),
(16, 'ultralex@gmail.com', '[]', '$2y$13$Yj6u3ySZ9YqLIPWsmdQdiOSKVDO/g7eKTUMn.ZDT9rj/T0fMt/Vfq', 'Ultralex', 6, 4000, NULL),
(17, 'BannanaRiver@gmail.com', '[]', '$2y$13$1qKX9.KZgcGKz8JmUJpP4etBZq33wrHVwOhwQTgfSXCWKmGP92.iC', 'BannanaRiver', 12, 1800, NULL),
(19, 'cocooning@gmail.com', '[]', '$2y$13$l000a0zZ8ENRuxaAIbIvMO0yHRcIEAERP5p1/BGqB4LVCdfyXyWkC', 'Cocooning', 15, 500, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
