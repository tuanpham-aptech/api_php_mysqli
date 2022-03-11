-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 11, 2022 at 09:07 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `students`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `profile_code` varchar(255) NOT NULL,
  `student_code` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `date_of_birth` date NOT NULL,
  `place_of_birth` varchar(255) NOT NULL,
  `race` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `date_range` date NOT NULL,
  `place_issue` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `identity_number` varchar(255) DEFAULT NULL,
  `student_status` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `profile_code`, `student_code`, `firstname`, `lastname`, `gender`, `date_of_birth`, `place_of_birth`, `race`, `religion`, `phone`, `email`, `date_range`, `place_issue`, `address`, `identity_number`, `student_status`, `note`) VALUES
(4, 'C2H5OH', 'sv4', 'Long', 'Nguyễn', 'Nữ', '2012-10-02', 'Hà Nội', 'METAN', 'Không', '0379421443', 'linhfk@gmail.com', '0000-00-00', 'Nguyễn Trí Thức ', 'Hoà Bình City', '0101000182', 'Bảo lưu', 'No message'),
(6, 'MgO', 'sv4', 'Long', 'Lastname', 'Nữ', '2022-02-02', 'Hoà Bình', 'Hoa', 'Kinh', '0987234564', 'test@gmail.com', '2021-02-04', 'HSB', 'Quặng ', '1223333', 'Bảo lưu', 'không'),
(9, 'Al2O3', 'sv25', 'Tuân', 'Phạm Văn ', 'Nữ', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Nhôm đioxit', '0101000178', 'Bảo lưu', 'Hoa yêu anh '),
(10, 'KClO3', 'Am101', 'Cu(NO3)2', 'H+', 'Nam', '2022-03-11', 'NO', 'K2Cr2O7', 'H3PO4', '0215325672', 'hno3@gmail.com', '0000-00-00', 'K2Cr2O4', 'CH4', '0101000245', '0 ', 'CH3'),
(12, 'C6H5OH', 'sv12', 'PO4', 'Hang', 'Nữ', '2022-02-11', 'Lục Nam Bắc Giang', 'H mông', 'Hồi giáo', '0243123212', 'hanh@gmail.com', '2022-03-31', 'Kiên giang', 'Kiên giang', '0101000126', 'Đang học', 'very good'),
(13, 'CH4', 'sv13', 'Chung', 'Nguyễn', '2', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(14, 'C3H8', 'sv14', 'linh', 'Nguyễn Ngọc', '1', '2022-03-18', 'Hoà Bình ', 'Kinh', 'Không', '0354776888', 'linh@gmail.com', '2022-03-23', 'Đà Nẵng ', 'Đông chiều ', '0101000243', '0 ', 'Nhiều quà '),
(15, 'Al2(SO4)3', 'sv15', 'Vinh', 'Văn ', 'Nam', '2022-03-31', 'Quảng Bình ', 'Mèo ', 'Zesu', '0427772189', 'vinh123@gmail.com', '2022-03-05', 'Quảng Bình ', 'Quảng Bình ', '0101000128', '', ''),
(16, 'H2CO3', 'student_code', 'Hia', 'Ko', 'Nữ', '2022-03-03', 'hOA bINH', 'ddd', 'ty', '0256332168', 'tuan@gmail.com', '2022-02-02', 'abc', 'địa chỉ', '0101010111', '', 'ab'),
(22, 'Fe3O4', 'sv13', 'Chung', 'SO3', 'Nữ', '2022-03-03', 'Lục Nam Bắc Giang', '', '', '0328228122', 'tuan@gmail.com', '0000-00-00', '', '', '', '', ''),
(23, 'C12H22O11', 'sm01', 'Tuân phạm', 'Văn ', '0', '2022-03-19', 'Lai châu', '', '', '0234123221', 'lai@gmail.com', '0000-00-00', '', '', '', '', ''),
(24, 'C4H8', 'sf01', 'Chung', 'Nguyễn ', '0', '2022-03-24', 'Bắc Ninh', '', '', '0243567222', 'cu@gmail.com', '0000-00-00', 'Bắc Giang', '', '0101000245', '1 ', ''),
(25, 'C6H12', 'p7', 'U7', 'K7', '0', '2022-03-18', 'Đà Nẵng ', '', '', '0356333890', 'mai@gmail.com', '0000-00-00', '', 'Thôn 4 Tân Lĩnh Lục Yên Yên Bái', '', '', ''),
(26, 'KNO3', 'C3H8', 'Chung', 'Nguyễn', 'Khác', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(27, 'HCH0', 'sv13', 'Chung', 'Nguyễn', '2', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(28, 'HCOOH', 'sv13', 'Chung', 'Nguyễn', '2', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(29, 'H2S', 'sv13', 'Chung', 'Nguyễn', '2', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(30, 'H2O2', 'sv13', 'Chung', 'Nguyễn', '2', '2022-03-04', 'Đà Nẵng ', 'Kinh', 'Không', '0238484456', 'chung@gmail.com', '2022-03-25', 'Đà Nẵng ', 'Đông chiều ', '0101000245', '0 ', 'No some time'),
(31, 'AgNO3', 'sv25', 'H2NO3', 'HCL', '1', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Hoa', '0101000178', '', 'Hoa yêu anh '),
(32, 'Fe2(SO4)3', 'sv25', 'H2NO3', 'HCL', '1', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Hoa', '0101000178', '', 'Hoa yêu anh '),
(33, 'SO3', 'sv25', 'H2NO3', 'HCLLLLL', '1', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Hoa', '0101000178', '', 'Hoa yêu anh '),
(34, 'Cr2(NO3)3', 'svx', 'Phạm', 'Lastname', '1', '2022-02-02', 'Hoà Bình', 'Hoa', 'Kinh', '0101010234', 'test@gmail.com', '2021-02-04', 'HSB', 'Quặng ', '1223333', '', 'không'),
(35, 'CrCl2', 'sv25', 'H2NO3', 'HCL', '1', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Hoa', '0101000178', '', 'Hoa yêu anh '),
(36, 'NaOH', 'sv25', 'H2NO3', 'HCL', '1', '2022-08-08', 'Hoà Bình', 'Kinh', 'Thiên giáo', '0123456789', 'lac@gmail.com', '2022-07-08', 'Khoa', 'Hoa', '0101000178', '', 'Hoa yêu anh '),
(37, 'H2PO4', 'sv17', 'Hoàng ', 'Vàng ', 'Nữ', '2022-03-05', 'Hà Giang', 'Kinh', 'Không', '0243123227', 'ab@gmail.com', '2022-03-11', '', 'Liên hệ với em nhé anh ', '', 'Đang học', 'Hạnh phúc nơi đong đầy '),
(38, 'N2O', 'sv4', 'Mai ', 'Hoa', 'Nữ', '2022-03-11', 'Lục Nam Bắc Giang', '', '', '0379679502', 'tuan.pv.782@aptechlearning.edu.vn', '0000-00-00', '', 'Thôn 4 Tân Lĩnh Lục Yên Yên Bái', '', 'Bảo lưu', 'Khí cười '),
(39, 'Fe2O3', 'sv12', 'Quang Nho ', 'Vũ', '1', '2022-03-11', 'Quảng Ngãi ', '', 'Thiên giáo', '0977277887', 'nhoquang@gmail.com', '0000-00-00', '', '', '', '0 ', ''),
(40, 'C2H5OH', 'sv4', 'Chung', 'hoàng ', 'Nữ', '2022-03-31', 'Hà Nội', 'METAN', '', '0989679502', 'atp.pv.782@aptechlearning.edu.vn', '0000-00-00', '', 'Thôn 4 Tân Lĩnh Lục Yên Yên Bái', '', 'Bảo lưu', ''),
(41, 'H2F', 'sv16', 'Châu', 'Nguyễn ', '0', '2022-03-06', 'Quảng Ninh', 'Kinh', 'Đạo hồi', '0987678552', 'chau10a1@gmail.com', '2022-03-25', 'Quảng Ninh', 'Hoành Bồ Quảng Ninh', '0101010001', '0 ', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(1, 'abcdef', 'ab@gmail.com', 'ababab');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
