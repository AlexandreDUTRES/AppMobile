CREATE DATABASE appMobile CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE TABLE `appMobile`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , PRIMARY KEY (`id`)) ENGINE = InnoDB;
ALTER TABLE `appMobile`.`user` ADD `uid` VARCHAR(50) NULL DEFAULT '';
ALTER TABLE `appMobile`.`user` ADD `first_name` VARCHAR(50) NULL DEFAULT '';
ALTER TABLE `appMobile`.`user` ADD `last_name` VARCHAR(50) NULL DEFAULT '';