-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 15 sep. 2022 à 14:46
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

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

CREATE TABLE `avatar` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`id`, `name`, `image`) VALUES
(1, 'Alien', 'avatar-alien.png'),
(3, 'Man', 'avatar-man.png'),
(5, 'Robot', 'avatar-robot.png'),
(7, 'Woman', 'avatar-woman.png');

-- --------------------------------------------------------

--
-- Structure de la table `badge`
--

CREATE TABLE `badge` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `badge`
--

INSERT INTO `badge` (`id`, `name`, `description`, `image`) VALUES
(7, 'Legendary', 'You finished the tests in less than 25 minutes\r\nyou win :\r\nPromotional code for 30% off the game of your choice at our partner (Steam)', ''),
(9, 'Rare', 'You have completed 20 games and won 15 times\r\nyou win :\r\n\r\nGift card worth 25€ from our partner from our partner (Twitch)\r\n', ''),
(11, 'Commun\r\n\r\n', 'You managed to decode the second test\r\nyou win:\r\nDecoder badge (common)', ''),
(13, 'Basic', 'You have completed the first test\r\nyou win :\r\nBasic avatar skin', '');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220906135908', '2022-09-07 08:03:58', 94),
('DoctrineMigrations\\Version20220906141058', '2022-09-07 08:03:58', 110),
('DoctrineMigrations\\Version20220906142116', '2022-09-07 08:03:58', 379),
('DoctrineMigrations\\Version20220913085224', '2022-09-13 08:52:46', 255);

-- --------------------------------------------------------

--
-- Structure de la table `enigmes`
--

CREATE TABLE `enigmes` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `indice` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `temps_enigme` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `escape_games`
--

CREATE TABLE `escape_games` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `durée` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `escape_games`
--

INSERT INTO `escape_games` (`id`, `name`, `image`, `description`, `durée`) VALUES
(1, 'Virtual Escape', 'card1.jpg', 'Vous êtes piégé dans un monde virtuel. Allez-vous pouvoir trouver les indices qui vous permettront de revenir à la réalité ? \r\n', '00:00:00'),
(4, 'Virtual Escape', 'card2.jpg', 'Vous êtes piégé dans un monde virtuel. Allez-vous pouvoir trouver les indices qui vous permettront de revenir à la réalité ? \r\n', '00:00:00'),
(6, 'Virtual Escape', 'card3.jpg', 'Vous êtes piégé dans un monde virtuel. Allez-vous pouvoir trouver les indices qui vous permettront de revenir à la réalité ? \r\n', '00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `escape_games_enigmes`
--

CREATE TABLE `escape_games_enigmes` (
  `escape_games_id` int(11) NOT NULL,
  `enigmes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `historique`
--

CREATE TABLE `historique` (
  `id` int(11) NOT NULL,
  `nombre_dindices` int(11) NOT NULL,
  `temps_total` time NOT NULL,
  `last_game` datetime NOT NULL,
  `score` int(11) NOT NULL,
  `enigmes_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rang` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `historique_id` int(11) DEFAULT NULL,
  `avatar_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `pseudo`, `rang`, `score`, `historique_id`, `avatar_id`) VALUES
(1, 'zeyrox@gmail.com', '[]', '$2y$13$YqZVjb6jU8Y2/m9NxL9CcOFKKfbggiMI0Y5gziJ0IHp.VDw2ezt.m', 'Zeyrox', 3, 4800, NULL, NULL),
(2, 'sneax@gmail.com', '[]', '$2y$13$qSiqmngoPvuwPqycOSySAOb1r2Yrx9CIFTCAg7WOfvewI04HFgTRy', 'Sneax', 5, 4600, NULL, NULL),
(3, 'bizzybee@gmail.com', '[]', '$2y$13$Bcx4ebsQgPU.pFoh0EHDSuUGlMuqywqKFGS/3botr4cU1u1QlOK0y', 'BizzyBee', 2, 4900, NULL, NULL),
(5, 'grizlok@gmail.com', '[]', '$2y$13$.EZL3Ec.uk.fPbYeRwBvb.WYoyFmXblNeLPvptquYlIslmfW4aIN6', 'Grizlok', 1, 5000, NULL, NULL),
(6, 'chungping@gmail.com', '[]', '$2y$13$0Wvs5TQnS433/MMSZotQ5uIZ8CbP7ijGNNSolBzOBW9xhPXroM/Ji', 'Chungping', 7, 3700, NULL, NULL),
(7, 'drealbel@gmail.com', '[]', '$2y$13$cV51sAxw7zptFwYogOR95eMJ.vH6L5Bm4d8jRqH5f07F1jSZHDGjO', 'Drealbel', 8, 3400, NULL, NULL),
(8, 'sugarBaby@gmail.com', '[]', '$2y$13$yrbkTsuazxkHWOqYvIi8xOLpEGyC0hvA9Pk0LFlie8h/TW4QlVsNm', 'SugarBaby', 4, 4700, NULL, NULL),
(9, 'lylithil@gmail.com', '[]', '$2y$13$7xc62hgnoStnNumIVre5heEkZZL/geD9gtHaMmqRcPm3Qug4a7n.G', 'Lylithil', 9, 3000, NULL, NULL),
(10, 'catlcoyhitlchi@gmail.com', '[]', '$2y$13$p0ZkoEaw2tThtnhuSGiLYevkaKPcfgKeLwGZ1zv503KFk4LYQfBay', 'Catlcoyhitlchi', 10, 2700, NULL, NULL),
(11, 'sassyLottery@gmail.com', '[]', '$2y$13$MlypzqUH5xqWboNVzrg5ueiMq2hnvUw/dxsDV22wU41A8alKAgb8m', 'SassyLottery', 11, 2300, NULL, NULL),
(13, 'fluxy@gmail.com', '[]', '$2y$13$Niv4COoYfAX3eWSmFj7ZEu9RZ3eQjMa5X20VqmquqZmnKbAELe/kO', 'Fluxy75010', 13, 1200, NULL, NULL),
(14, 'barmoerim@gmail.com', '[]', '$2y$13$Yiqe/n/6N6Jlpyha/uHmZO0NssuQLHqLKnNXVNNfDVIY7ZrKJBF.S', 'Barmoerim', 14, 800, NULL, NULL),
(16, 'ultralex@gmail.com', '[]', '$2y$13$Yj6u3ySZ9YqLIPWsmdQdiOSKVDO/g7eKTUMn.ZDT9rj/T0fMt/Vfq', 'Ultralex', 6, 4000, NULL, NULL),
(17, 'BannanaRiver@gmail.com', '[]', '$2y$13$1qKX9.KZgcGKz8JmUJpP4etBZq33wrHVwOhwQTgfSXCWKmGP92.iC', 'BannanaRiver', 12, 1800, NULL, NULL),
(19, 'cocooning@gmail.com', '[]', '$2y$13$l000a0zZ8ENRuxaAIbIvMO0yHRcIEAERP5p1/BGqB4LVCdfyXyWkC', 'Cocooning', 15, 500, NULL, NULL),
(21, 'dfgsdfgs@dfgsdf.fr', '[]', '$2y$13$B/dJX5WLiJasYzEzTK0Aj.EDUqvR46jQag/tMKmHxagJHmn6/eoyG', 'gkdjfhgkldfjgmlk', 0, 0, NULL, 5),
(22, 'fghjfghjhfg@fgjfghj.fr', '[]', '$2y$13$o4VKhwOq3wJkI8dRmG9rjuHOtgQtdfJ9iHMWXbj63PIiZzvDFW6Hm', 'jfghjfghjfghj', 0, 0, NULL, 3),
(23, 'julien91@gmail.fr', '[]', '$2y$13$QXmK65P5cSNfN86O1n6QpOmTtFEuBwqu7.c3c0i98qwCLl3Pq0brG', 'julien91', 0, 0, NULL, 3),
(24, 'julien91@gmail.com', '[]', '$2y$13$8AmSK51q4/4Qjl6U9iJ0duuWMV01hOYRshM6pBWVua71/Z4jY4O/C', 'julien91', 0, 0, NULL, 7),
(25, 'julein@mail.fr', '[]', '$2y$13$iUzTwb9PiloIh815C4hHgeuBsSjPvEYIc.cGOrkYnlcR.szFOGoUu', 'julein', 0, 0, NULL, 5),
(26, 'leon91@mail.fr', '[]', '$2y$13$X1oLWipxiTz9MOhqD5Fzcu4pak3oZ7wiJXmM88QIy/f8Ls/iijUPu', 'leon', 0, 0, NULL, 1),
(27, 'l@mail.fr', '[]', '$2y$13$BopvGezX7OUab8AxHPvdkeh2xaCErAjJ3rLnoxD8OSonB5LhaS64q', 'jkkjj', 0, 0, NULL, 3),
(28, 'ff@gmail.fr', '[]', '$2y$13$7auNqwpNWDgMX.sFz7LOHe7p0gh7U6LwTBgl0ZTbMikqL/NPUT4/O', 'fff', 0, 0, NULL, 3),
(35, 'verifgmail.fr', '[]', '$2y$13$huSMJ8rD5Q4stEEY0M5cAOOpROe1vkFyw1YdfsiaKxTQZt4XKgm7W', 'verification', 0, 0, NULL, 1),
(36, 'verif@.fr', '[]', '$2y$13$SzuLScSPFcRORApyWU9kROwwSqyPcGX7JrJAZToiXTk3vDy6BNhoq', 'verif', 0, 0, NULL, NULL),
(37, 'ok@gmail.fr', '[]', '$2y$13$mv.zgSE3kUWxMyHEBuOJOORPz8AXDYQhVWTpeC0ZYUwUHm3TrX346', 'okilm', 0, 0, NULL, 1),
(38, 'verificatio15.09@mail.fr', '[]', '$2y$13$nSshjao.F/8A.QCRd.0Pge3Y0I7cCExyODCzXm0BXgcpdq4Krc70m', 'verification15.09', 0, 0, NULL, 3),
(39, 'leyna@gmail.fr', '[]', '$2y$13$mEElpM4z6jtVocSJDS7H2u.tvjJkm8cIL9j9QOhfQDfc3Z/tAXGqi', 'leyna', 0, 0, NULL, 3),
(40, 'jour15@gmail.fr', '[]', '$2y$13$K8kBFKvNbWnIoMou7qbCZuWozSApLeLAdWIPkGZZJLo7V5CV3uQ6K', 'jour15', 0, 0, NULL, 1),
(41, 'gmail.fr', '[]', '$2y$13$rdpblXOKqZAUMd2yZdrfVOMTS1qYYUlBWypOqjgwUAD3rLZHb0PFW', 'julien', 0, 0, NULL, 7),
(42, 'lucas@gmail.fr', '[]', '$2y$13$U43nkLHlfagXM.F7aVvCXOvZt2YeOJ3.j0OAN7s9qzx5DlYNdYw8O', 'lucas', 0, 0, NULL, 1),
(43, 'j@mail.fr', '[]', '$2y$13$vS1njPYqNer3ZTINsHW1y.1UCNVcLdTDqUdaaJAW02luPjvfqHY4e', 'julien', 0, 0, NULL, 1),
(44, 'nono@gmail.fr', '[]', '$2y$13$kUIkKeRhLtvmsHn4FNupcuh0LRbHEyp.xXAyxt2HJUEwuGHJRei/O', 'nono', 0, 0, NULL, 7),
(45, 'marco@mail.fr', '[]', '$2y$13$eEwfmLxUP8sgHrQnIheU8.BvvhMVELZpdM/KOhQXrRFDlelpkcdcy', 'marco', 0, 0, NULL, 7);

-- --------------------------------------------------------

--
-- Structure de la table `user_badge`
--

CREATE TABLE `user_badge` (
  `user_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `badge`
--
ALTER TABLE `badge`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `enigmes`
--
ALTER TABLE `enigmes`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `escape_games`
--
ALTER TABLE `escape_games`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `escape_games_enigmes`
--
ALTER TABLE `escape_games_enigmes`
  ADD PRIMARY KEY (`escape_games_id`,`enigmes_id`),
  ADD KEY `IDX_9776E49CA670F29C` (`escape_games_id`),
  ADD KEY `IDX_9776E49CC462C366` (`enigmes_id`);

--
-- Index pour la table `historique`
--
ALTER TABLE `historique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_EDBFD5ECC462C366` (`enigmes_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
  ADD KEY `IDX_8D93D6496128735E` (`historique_id`),
  ADD KEY `IDX_8D93D64986383B10` (`avatar_id`);

--
-- Index pour la table `user_badge`
--
ALTER TABLE `user_badge`
  ADD PRIMARY KEY (`user_id`,`badge_id`),
  ADD KEY `IDX_1C32B345A76ED395` (`user_id`),
  ADD KEY `IDX_1C32B345F7A2C2FC` (`badge_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `badge`
--
ALTER TABLE `badge`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `enigmes`
--
ALTER TABLE `enigmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `escape_games`
--
ALTER TABLE `escape_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `historique`
--
ALTER TABLE `historique`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `escape_games_enigmes`
--
ALTER TABLE `escape_games_enigmes`
  ADD CONSTRAINT `FK_9776E49CA670F29C` FOREIGN KEY (`escape_games_id`) REFERENCES `escape_games` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_9776E49CC462C366` FOREIGN KEY (`enigmes_id`) REFERENCES `enigmes` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `historique`
--
ALTER TABLE `historique`
  ADD CONSTRAINT `FK_EDBFD5ECC462C366` FOREIGN KEY (`enigmes_id`) REFERENCES `enigmes` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D6496128735E` FOREIGN KEY (`historique_id`) REFERENCES `historique` (`id`),
  ADD CONSTRAINT `FK_8D93D64986383B10` FOREIGN KEY (`avatar_id`) REFERENCES `avatar` (`id`);

--
-- Contraintes pour la table `user_badge`
--
ALTER TABLE `user_badge`
  ADD CONSTRAINT `FK_1C32B345A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_1C32B345F7A2C2FC` FOREIGN KEY (`badge_id`) REFERENCES `badge` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
