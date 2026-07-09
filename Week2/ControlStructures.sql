CREATE DATABASE IF NOT EXISTS digital_nurture;
USE digital_nurture;

DELIMITER //

CREATE PROCEDURE CheckGrade(IN marks INT)
BEGIN
    IF marks >= 90 THEN
        SELECT 'Grade A' AS Result;
    ELSEIF marks >= 75 THEN
        SELECT 'Grade B' AS Result;
    ELSEIF marks >= 50 THEN
        SELECT 'Grade C' AS Result;
    ELSE
        SELECT 'Fail' AS Result;
    END IF;
END //

DELIMITER ;

CALL CheckGrade(82);