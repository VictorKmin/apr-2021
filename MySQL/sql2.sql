-- INSERT INTO car(model) VALUES ('Tesla');

-- INSERT INTO user(name, car_id) VALUES('Tanya', 8);

SELECT 
	user.name AS userName, 
	car.model  AS carModel
FROM user 
JOIN car ON user.car_id = car.id;


USE `apr-2021`;

SELECT 
	students.name,
    ratings.rating,
    lesson.label
FROM students
	JOIN ratings ON students.id = ratings.student_id
    JOIN lesson ON ratings.lesson_id = lesson.id
WHERE students.id = 3;


SELECT student_id FROM ratings WHERE rating = 5;

SELECT * FROM students WHERE id IN ( SELECT student_id FROM ratings WHERE rating = 5 );

SELECT students.* FROM students 
	JOIN ratings ON students.id = ratings.student_id
WHERE ratings.rating = 5;
    
    
SELECT * FROM car JOIN user ON car.id = user.car_id;

SELECT * FROM car LEFT JOIN user ON car.id = user.car_id;

SELECT * FROM car RIGHT JOIN user ON car.id = user.car_id;


-- Пошук дублів
SELECT email, count(email) as count_email FROM users GROUP BY email HAVING count_email > 1; 
