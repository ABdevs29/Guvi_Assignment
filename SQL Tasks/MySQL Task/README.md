#### The Following are the tables created in our database using SQLite v3.20.1:
- users
- codekata
- attendance
- topics
- tasks
- company_drives
- mentors
- students_activated_courses
- courses

<h4>Create tables for the above list given:</h4>

<em>Created tables for Users, mentors, courses, topics, tasks and company drives</em>
> <p>CREATE TABLE users(Id integer PRIMARY KEY, Name text);<br>
> CREATE TABLE codekata(Id integer PRIMARY KEY, Problem_Name text);<br>
> CREATE TABLE attendance(Id integer PRIMARY KEY, Session_Name text, User_Id integer);<br>
> CREATE TABLE mentors(Id integer PRIMARY KEY, Mentor_Name text);<br>
> CREATE TABLE courses(Id integer PRIMARY KEY, Course_Name text);<br>
> CREATE TABLE topics(Id integer PRIMARY KEY, topics text, courses integer);<br>
> CREATE TABLE tasks(Id integer PRIMARY KEY, tasks text, topics integer);<br>
> CREATE TABLE company_drives(Id integer PRIMARY KEY, company text);</p>

<em>Created mapping tables</em>
> <p>CREATE TABLE users_codekata(Id integer PRIMARY KEY, User_ID integer, Codekata_Topic integer, Total_Problems_Solved integer);<br>
> CREATE TABLE users_company_drive(Id integer PRIMARY KEY, User_ID integer, Company_ID integer);<br>
> CREATE TABLE users_mentors(Id integer PRIMARY KEY, USER_Id integer, Mentor_ID integer);<br>
> CREATE TABLE students_activated_courses(Id integer PRIMARY KEY, USER_Id integer, Course_Id integer);</p>


<h4>Insert at least 5 rows of values in each table</h4>

<em>Created few records in our tables</em>
> <p>INSERT INTO users VALUES(1,'Nihal Singh');<br>
> INSERT INTO users VALUES(2,'Anvita Dutta');<br>
> INSERT INTO users VALUES(3,'Kishore kumar');<br>
> INSERT INTO users VALUES(4,'AB Ram');<br>
> INSERT INTO users VALUES(5,'Zoya R');<br>
>
> INSERT INTO codekata VALUES(1,'ZEN');<br>
> INSERT INTO codekata VALUES(2,'Numbers');<br>
> INSERT INTO codekata VALUES(3,'Array');<br>
> INSERT INTO codekata VALUES(4,'String');<br>
> INSERT INTO codekata VALUES(5,'Sorting');<br>
>
> INSERT INTO mentors VALUES(1,'Koutilya');<br>
> INSERT INTO mentors VALUES(2,'Rajeshwari');<br>
> INSERT INTO mentors VALUES(3,'Kumara');<br>
> INSERT INTO mentors VALUES(4,'T Vijay');<br>
> INSERT INTO mentors VALUES(5,'Kamal Khan');<br>
>
> INSERT INTO courses VALUES(1,'MERN Stack');<br>
> INSERT INTO courses VALUES(2,'Data Science');<br>
> INSERT INTO courses VALUES(3,'Python');<br>
> INSERT INTO courses VALUES(4,'AI & ML');<br>
> INSERT INTO courses VALUES(5,'Java J2EE');<br>
>
> INSERT INTO topics VALUES(1,'HTML', 1);<br>
> INSERT INTO topics VALUES(2,'Javascript', 1);<br>
> INSERT INTO topics VALUES(3,'ReactJS', 1);<br>
> INSERT INTO topics VALUES(4,'Python', 3);<br>
> INSERT INTO topics VALUES(5,'Google Collab', 4);<br>
> INSERT INTO topics VALUES(6,'Java', 5);<br>
> INSERT INTO topics VALUES(7,'R Language', 2);<br>
>
> INSERT INTO tasks VALUES(1,'PAN card Form', 1);<br>
> INSERT INTO tasks VALUES(2,'Array Methods Demo', 2);<br>
> INSERT INTO tasks VALUES(3,'CRUD Task with validation', 3);<br>
> INSERT INTO tasks VALUES(4,'Shopping Cart', 3);<br>
> INSERT INTO tasks VALUES(5,'Covid Data Modelling', 5);<br>
> INSERT INTO tasks VALUES(6,'Calculator app', 6);<br>
> INSERT INTO tasks VALUES(7,'Book my show clone', 4);<br>
> INSERT INTO tasks VALUES(8,'Schules theorem Check', 7);<br>
>
> INSERT INTO company_drives VALUES(1,'Paypal');<br>
> INSERT INTO company_drives VALUES(2,'JusPay');<br>
> INSERT INTO company_drives VALUES(3,'RazorPay');<br>
> INSERT INTO company_drives VALUES(4,'Uber');<br>
> INSERT INTO company_drives VALUES(5,'Zomato');<br>
>
> INSERT INTO users_codekata VALUES(1, 1 ,1, 25);<br>
> INSERT INTO users_codekata VALUES(2,2, 3, 11);<br>
> INSERT INTO users_codekata VALUES(3,3, 4, 37);<br>
> INSERT INTO users_codekata VALUES(4,3, 3, 31);<br>
> INSERT INTO users_codekata VALUES(5,4, 1, 56);<br>
> INSERT INTO users_codekata VALUES(6,4, 3, 23);<br>
> INSERT INTO users_codekata VALUES(7,4, 2, 34);<br>
> INSERT INTO users_codekata VALUES(8,5, 5, 32);<br>
>
> INSERT INTO users_company_drive VALUES(1, 1 ,1);<br>
> INSERT INTO users_company_drive VALUES(2,2, 3);<br>
> INSERT INTO users_company_drive VALUES(3,3, 4);<br>
> INSERT INTO users_company_drive VALUES(4,3, 3);<br>
> INSERT INTO users_company_drive VALUES(5,4, 2);<br>
> INSERT INTO users_company_drive VALUES(6,5, 5);<br>
>
> INSERT INTO users_mentors VALUES(1, 1 ,1);<br>
> INSERT INTO users_mentors VALUES(2,2, 1);<br>
> INSERT INTO users_mentors VALUES(3,3, 2);<br>
> INSERT INTO users_mentors VALUES(4,4, 1);<br>
> INSERT INTO users_mentors VALUES(5,5, 5);<br>
>
> INSERT INTO students_activated_courses VALUES(1, 1 ,1);<br>
> INSERT INTO students_activated_courses VALUES(2,2, 1);<br>
> INSERT INTO students_activated_courses VALUES(3,3, 2);<br>
> INSERT INTO students_activated_courses VALUES(4,4, 4);<br>
> INSERT INTO students_activated_courses VALUES(5,5, 5);</p>


<h4>Get number problems solved in codekata by combining the users</h4>

> SELECT SUM(Total_Problems_Solved) FROM users_codekata;

<h4>Display the no of company drives attended by a user</h4>

> SELECT COUNT(Company_ID) FROM users LEFT JOIN users_company_drive ON users.Id = User_ID WHERE Name LIKE "Kishore kumar";

<h4>Combine and display students_activated_courses and courses for a specific user grouping them based on the course</h4>

> SELECT Course_Name, COUNT(Name) FROM users INNER JOIN (SELECT * FROM courses INNER JOIN students_activated_courses ON courses.Id = Course_Id) ON users.Id = USER_Id GROUP BY Course_Name;

<h4>List all the mentors</h4>

> SELECT * FROM mentors;

<h4>list the number of students that are assigned for a mentor</h4>

> SELECT Mentor_Name, COUNT(USER_Id) FROM mentors INNER JOIN users_mentors ON  mentors.Id = Mentor_ID GROUP BY Mentor_Name;
