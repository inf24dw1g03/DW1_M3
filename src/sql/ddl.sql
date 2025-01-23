CREATE DATABASE IF NOT EXISTS basketball;
USE basketball;

--
-- Table structure for table `teams`
--
DROP TABLE IF EXISTS `Team`;
CREATE TABLE `Team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `fundation_year` INT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `tournaments`
--
DROP TABLE IF EXISTS `Tournament`;
CREATE TABLE `Tournament` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `begin_date` VARCHAR(45) NOT NULL,
  `end_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `players`
--
DROP TABLE IF EXISTS `Player`;
CREATE TABLE `Player` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT,
  `teamId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (teamId) REFERENCES Team(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `matches`
--
DROP TABLE IF EXISTS `Match`;
CREATE TABLE `Match` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `hour` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `teamId` INT NOT NULL,
  `tournamentId` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (teamId) REFERENCES Team(id),
  FOREIGN KEY (tournamentId) REFERENCES Tournament(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
