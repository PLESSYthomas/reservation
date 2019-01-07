-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  lun. 07 jan. 2019 à 19:36
-- Version du serveur :  5.7.23
-- Version de PHP :  7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `vehicul`
--

-- --------------------------------------------------------

--
-- Structure de la table `identifiant`
--

DROP TABLE IF EXISTS `identifiant`;
CREATE TABLE IF NOT EXISTS `identifiant` (
  `pseudo` varchar(128) NOT NULL,
  `mdp` varchar(128) NOT NULL,
  `mail` varchar(128) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `identifiant`
--

INSERT INTO `identifiant` (`pseudo`, `mdp`, `mail`, `id`) VALUES
('admin', 'admin', 'admin', 1);

-- --------------------------------------------------------

--
-- Structure de la table `messagerie`
--

DROP TABLE IF EXISTS `messagerie`;
CREATE TABLE IF NOT EXISTS `messagerie` (
  `personne` varchar(128) NOT NULL,
  `objet` varchar(128) NOT NULL,
  `Message` varchar(4096) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `dateAller` date NOT NULL,
  `dateRetour` date NOT NULL,
  `objet` varchar(128) NOT NULL,
  `Passagers` int(11) NOT NULL,
  `gps` varchar(128) DEFAULT NULL,
  `voiture` varchar(128) NOT NULL,
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `Destination` varchar(128) NOT NULL,
  `statut` varchar(128) NOT NULL,
  `commentaire` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`dateAller`, `dateRetour`, `objet`, `Passagers`, `gps`, `voiture`, `id`, `Destination`, `statut`, `commentaire`) VALUES
('2019-01-02', '2019-01-12', 'congrès', 1, '1', 'Clio', 28, 'nancy', 'en attente', 'rien');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

DROP TABLE IF EXISTS `voiture`;
CREATE TABLE IF NOT EXISTS `voiture` (
  `marque` varchar(128) NOT NULL,
  `modele` varchar(128) NOT NULL,
  `id_voiture` int(11) NOT NULL AUTO_INCREMENT,
  `consomation` double NOT NULL,
  `der_utilisation` date NOT NULL,
  `date_achat` varchar(128) NOT NULL,
  `type` varchar(128) NOT NULL,
  PRIMARY KEY (`id_voiture`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
