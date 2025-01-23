USE `basketball`;

-- 
-- Dumping data for table `Team`
-- 

INSERT INTO `Team` (`name`, `fundation_year`) 
VALUES 
('Team Alpha', 1990),
('Team Beta', 1995),
('Team Gamma', 2000),
('Team Delta', 2005),
('Team Epsilon', 2010),
('Team Zeta', 2015),
('Team Eta', 2020),
('Team Theta', 2021),
('Team Iota', 1985),
('Team Kappa', 1975),
('Team Lambda', 1965),
('Team Mu', 1955),
('Team Nu', 1945),
('Team Xi', 1935),
('Team Omicron', 1925);

-- 
-- Dumping data for table `Tournament`
-- 

INSERT INTO `Tournament` (`name`, `begin_date`, `end_date`) 
VALUES 
('Championship A', '2024-01-01', '2024-02-01'),
('Championship B', '2024-02-15', '2024-03-15'),
('Championship C', '2024-03-20', '2024-04-20'),
('Championship D', '2024-05-01', '2024-06-01'),
('Championship E', '2024-06-15', '2024-07-15'),
('Championship F', '2024-08-01', '2024-09-01'),
('Championship G', '2024-09-10', '2024-10-10'),
('Championship H', '2024-11-01', '2024-12-01'),
('Championship I', '2024-12-15', '2025-01-15'),
('Championship J', '2025-02-01', '2025-03-01'),
('Championship K', '2025-03-15', '2025-04-15'),
('Championship L', '2025-05-01', '2025-06-01'),
('Championship M', '2025-07-01', '2025-08-01'),
('Championship N', '2025-08-15', '2025-09-15'),
('Championship O', '2025-10-01', '2025-11-01');

-- 
-- Dumping data for table `Player`
-- 

INSERT INTO `Player` (`name`, `age`, `teamId`) 
VALUES 
('John Doe', 25, 1),
('Mike Smith', 28, 2),
('Chris Brown', 30, 3),
('David Lee', 23, 4),
('Tom Harris', 27, 5),
('Luke Wilson', 24, 6),
('Sam Carter', 22, 7),
('Ben Evans', 26, 8),
('Jake Turner', 29, 1),
('Ethan Davis', 21, 2),
('Ryan Young', 31, 3),
('Alex White', 32, 4),
('Nick Lewis', 20, 5),
('Matt Walker', 25, 6),
('Josh Scott', 23, 7);

-- 
-- Dumping data for table `Match`
-- 

INSERT INTO `Match` (`date`, `hour`, `location`, `teamId`, `tournamentId`) 
VALUES 
('2025-01-15', '15:00', 'Stadium A', 1, 3),
('2025-01-16', '18:30', 'Stadium B', 2, 4),
('2025-01-17', '20:00', 'Stadium C', 3, 5),
('2025-01-18', '16:00', 'Stadium D', 4, 6),
('2025-01-19', '14:00', 'Stadium E', 5, 7),
('2025-01-20', '19:30', 'Stadium F', 6, 8),
('2025-01-21', '17:00', 'Stadium G', 7, 9),
('2025-01-22', '20:45', 'Stadium H', 8, 10),
('2025-01-23', '13:00', 'Stadium I', 9, 11),
('2025-01-24', '21:00', 'Stadium J', 10, 12),
('2025-01-25', '16:30', 'Stadium K', 11, 13),
('2025-01-26', '15:00', 'Stadium L', 12, 14),
('2025-01-27', '18:00', 'Stadium M', 13, 15),
('2025-01-28', '14:30', 'Stadium N', 14, 1),
('2025-01-29', '19:15', 'Stadium O', 15, 2);
