SELECT * FROM students;

SELECT name, age FROM students;

SELECT * FROM students WHERE age = 15;

SELECT * FROM students WHERE name = 'rOmAn';

SELECT * FROM students WHERE name LIKE '%n';

SELECT * FROM students WHERE name LIKE 'o%';

SELECT * FROM students WHERE name LIKE '%o%';

SELECT * FROM students WHERE name LIKE '___o%';

SELECT * FROM students WHERE LENGTH(name) = 4;

SELECT * FROM students ORDER BY age DESC;

SELECT * FROM students WHERE gender LIKE 'm%' ORDER BY age DESC;
SELECT * FROM students WHERE gender = 'male' ORDER BY age DESC;

SELECT * FROM students WHERE age >= 18;

SELECT * FROM students WHERE age BETWEEN 10 AND 29;
SELECT * FROM students WHERE name BETWEEN 'a' AND 'c';

SELECT * FROM students WHERE age >= 10 AND age <= 29;

SELECT * FROM students WHERE age >= 18 AND gender LIKE 'f%';

SELECT * FROM students WHERE age = 18 OR gender LIKE 'f%';

SELECT * FROM students WHERE age = 20 OR age = 25 OR age = 30; -- BAD
SELECT * FROM students WHERE age IN(20, 25, 30); -- GOOD

SELECT * FROM students WHERE name IN('dinozavr', 'tanya');

SELECT MAX(age) FROM students;
SELECT MIN(age) FROM students;
SELECT AVG(age) FROM students;
SELECT SUM(age) FROM students;
SELECT COUNT(age) FROM students WHERE gender LIKE 'm%';

SELECT COUNT(gender), gender FROM students GROUP BY gender;

SELECT
	AVG(rating) AS avgRat,
    COUNT(rating) AS countRat,
    student_id
	FROM ratings
    GROUP BY student_id;
    
--     [
-- 		{'AVG(rating)': 1, 'COUNT(rating)': 1},
--         { avgRat: 1, countRat: 1 }
--     ]


-- perPage=5&page=3 

-- `SELECT * FROM students LIMIT ${perPage} OFFSET ${(page - 1) * perPage};`

SELECT * FROM students LIMIT 5 OFFSET 10;

UPDATE students SET age = 20 WHERE age >= 40 LIMIT 1000;

UPDATE students SET name = 'KARINA' WHERE age = 15 LIMIT 1000;

DELETE FROM students WHERE age < 15 LIMIT 1000;
