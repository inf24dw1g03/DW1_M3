CREATE DATABASE IF NOT EXISTS basketball;
USE basketball;

--
-- Table structure for table `teams`
--
DROP TABLE IF EXISTS `Teams`;
CREATE TABLE `Teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `tournaments`
--
DROP TABLE IF EXISTS `Tournaments`;
CREATE TABLE `Tournaments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `begin_date` VARCHAR(45) NOT NULL,
  `end_date` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `players`
--
DROP TABLE IF EXISTS `Players`;
CREATE TABLE `Players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `team_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (team_id) REFERENCES Teams(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Table structure for table `matches`
--
DROP TABLE IF EXISTS `Matches`;
CREATE TABLE `Matches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `hour` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `team_home_id` INT NOT NULL,
  `team_away_id` INT NOT NULL,
  `tournament_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (team_home_id) REFERENCES Teams(id),
  FOREIGN KEY (team_away_id) REFERENCES Teams(id),
  FOREIGN KEY (tournament_id) REFERENCES Tournaments(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
