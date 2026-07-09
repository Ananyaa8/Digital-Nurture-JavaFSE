CREATE DATABASE IF NOT EXISTS digital_nurture;
USE digital_nurture;

DELIMITER //

CREATE PROCEDURE StudentDetails(
    IN studentName VARCHAR(50),
    IN studentMarks INT
)
BEGIN
    SELECT
        studentName AS Name,
        studentMarks AS Marks;
END //

DELIMITER ;

CALL StudentDetails('Ananya', 95);