CREATE DATABASE IF NOT EXISTS basketball;
USE basketball;

--
-- Table structure for table `teams`
--
DROP TABLE IF EXISTS `teams`;
CREATE TABLE `team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fundation_year` INT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `tournaments`
--
DROP TABLE IF EXISTS `tournaments`;
CREATE TABLE `tournament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `begin_date` VARCHAR(45) NOT NULL,
  `end_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `players`
--
DROP TABLE IF EXISTS `player`;
CREATE TABLE `player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT,
  `teamId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (teamId) REFERENCES team(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `matches`
--
DROP TABLE IF EXISTS `match`;
CREATE TABLE `match` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `hour` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `teamId` INT NOT NULL,
  `tournamentId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (teamId) REFERENCES team(id),
  FOREIGN KEY (tournamentId) REFERENCES tournament(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
