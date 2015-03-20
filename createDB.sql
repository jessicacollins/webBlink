
DROP DATABASE IF EXISTS webblink;
CREATE DATABASE webblink;
use webblink;

CREATE TABLE  user (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR( 50 ),
 email VARCHAR( 100 ),
 password CHAR( 64 ),
 remember_token VARCHAR(255),
 created_at DATETIME,
 updated_at DATETIME
);


CREATE TABLE  device (
device_id INT AUTO_INCREMENT PRIMARY KEY,
 device_name VARCHAR( 255 ),
 access_token VARCHAR( 255 ),
 spark_device_id VARCHAR( 255 )
);


CREATE TABLE  pattern (
pattern_id INT AUTO_INCREMENT PRIMARY KEY,
 device_id INT,
 user_id INT,
 pattern_type_id INT,
 speed VARCHAR( 255 ),
 intensity VARCHAR( 255 ),
 direction INT(2)
 );


CREATE TABLE  pattern_type (
pattern_type_id INT AUTO_INCREMENT PRIMARY KEY,
display_name VARCHAR( 255 ),
function_name VARCHAR( 255 )
);















