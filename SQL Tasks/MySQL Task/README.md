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

