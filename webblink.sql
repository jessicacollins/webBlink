-- MySQL dump 10.13  Distrib 5.6.23, for osx10.8 (x86_64)
--
-- Host: localhost    Database: webblink
-- ------------------------------------------------------
-- Server version	5.6.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `device` (
  `device_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_name` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `spark_device_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `device`
--

LOCK TABLES `device` WRITE;
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
/*!40000 ALTER TABLE `device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pattern`
--

DROP TABLE IF EXISTS `pattern`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pattern` (
  `pattern_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `pattern_type_id` int(11) DEFAULT NULL,
  `speed` varchar(255) DEFAULT NULL,
  `intensity` varchar(255) DEFAULT NULL,
  `direction` int(2) DEFAULT NULL,
  `pattern_name` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pattern_id`)
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pattern`
--

LOCK TABLES `pattern` WRITE;
/*!40000 ALTER TABLE `pattern` DISABLE KEYS */;
INSERT INTO `pattern` VALUES (1,NULL,1,1,'30','255',NULL,'Rainbow','213747'),(2,NULL,1,2,NULL,'255',NULL,'Cylon','ff0000'),(4,NULL,1,4,NULL,NULL,NULL,'Off',NULL),(5,NULL,1,5,NULL,'255',NULL,'Solid','0a0efa'),(6,NULL,1,6,'55','255',NULL,'Swip Left','f20085'),(7,NULL,1,7,'55','255',NULL,'Swipe Right','0bb563'),(207,NULL,NULL,1,'6','255',NULL,'Party Mode',''),(208,NULL,NULL,2,'','255',NULL,'Blue Cylon','142fde'),(209,NULL,NULL,2,'','255',NULL,'Blue Cylon','142fde'),(210,NULL,NULL,2,'','255',NULL,'Blue Cylon','0022ff');
/*!40000 ALTER TABLE `pattern` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pattern_type`
--

DROP TABLE IF EXISTS `pattern_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pattern_type` (
  `pattern_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) DEFAULT NULL,
  `function_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pattern_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pattern_type`
--

LOCK TABLES `pattern_type` WRITE;
/*!40000 ALTER TABLE `pattern_type` DISABLE KEYS */;
INSERT INTO `pattern_type` VALUES (1,'Rainbow',NULL),(2,'Cylon',NULL),(4,'Off',NULL),(5,'Solid',NULL),(6,'Swipe Left',NULL),(7,'Swipe Right',NULL);
/*!40000 ALTER TABLE `pattern_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` char(64) DEFAULT NULL,
  `remember_token` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jessica','jessicodes@gmail.com','$2y$10$6h0H2wLefcqZeT4bOV8AjORhX3uKLzkNPWqam0yfA5Untd3qH7Rba','GEFDHgJc6BSTLQakaod1mctLv3wIa41U33ES3CAyGgJAsaeS3AbEmrrJEFHo','2015-03-18 20:48:43','2015-04-02 20:39:02'),(2,'Nicole','jessica@firebugs.org','$2y$10$eCmMZIF0Q1j.MkfRLlPXo.qiSZS8JcGsbApZRH/2TK/l7OVOJixx6','tfIeAkAv2rZU6ILyuQofdkb3WQdUTr3JNq6PgckQBTNZefjTxL3xlYPoEOS4','2015-03-18 21:36:09','2015-03-18 21:39:29');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-04-08 15:20:46
