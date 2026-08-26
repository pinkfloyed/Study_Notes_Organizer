-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2026 at 05:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `study_notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(100) DEFAULT '',
  `tags` varchar(255) DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `user_id`, `title`, `content`, `category`, `tags`, `created_at`, `updated_at`) VALUES
(2, 1, 'API Interview Questions', 'https://www.simplilearn.com/top-api-testing-interview-questions-article?\nhttps://katalon.com/resources-center/blog/web-api-testing-interview-questions?\nhttps://www.testgorilla.com/blog/api-testing-interview-questions/?\nhttps://testsigma.com/blog/api-testing-interview-questions/?\nhttps://mentorcruise.com/questions/api/?\n', '', '', '2026-08-26 14:41:28', '2026-08-26 14:41:28'),
(3, 1, 'RestAPI Interview Question Answers Link', 'https://www.interviewbit.com/rest-api-interview-questions/\nhttps://www.simplilearn.com/rest-api-interview-questions-answers-article\nhttps://blog.postman.com/rest-api-interview-questions/\nhttps://www.hirist.tech/blog/top-20-rest-api-interview-questions-and-answers/\nhttps://www.scholarhat.com/tutorial/webapi/rest-api-interview-questions\n', '', '', '2026-08-26 14:42:27', '2026-08-26 14:42:27'),
(4, 1, 'Django Interview Questions Links', 'https://www.interviewbit.com/django-interview-questions/\nhttps://www.geeksforgeeks.org/django-interview-questions/\nhttps://www.simplilearn.com/django-interview-questions-article\nhttps://www.turing.com/interview-questions/django\n', '', '', '2026-08-26 14:42:55', '2026-08-26 14:42:55');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'pinki', 'pinkiakter@gmail.com', '$2b$10$vyXv6Gb4QJyxpswZA5jLdeR/OlgctUZRI59IpoGhRVNE5Zl0qcgZK', '2026-08-26 14:39:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
