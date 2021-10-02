The Following are the tables has to be in your database & model deisgn:
users
codekata
attendance
topics
tasks
company_drives
mentors
students_activated_courses
courses

1.Create tables for the above list given:

/* Create tables for Users, mentors, courses, topics, tasks and company drives */
CREATE TABLE users(Id integer PRIMARY KEY, Name text);
CREATE TABLE codekata(Id integer PRIMARY KEY, Problem_Name text);
CREATE TABLE attendance(Id integer PRIMARY KEY, Session_Name text, User_Id integer);
CREATE TABLE mentors(Id integer PRIMARY KEY, Mentor_Name text);
CREATE TABLE courses(Id integer PRIMARY KEY, Course_Name text);
CREATE TABLE topics(Id integer PRIMARY KEY, topics text, courses integer);
CREATE TABLE tasks(Id integer PRIMARY KEY, tasks text, topics integer);
CREATE TABLE company_drives(Id integer PRIMARY KEY, company text);

/* Create mapping tables */
CREATE TABLE users_codekata(Id integer PRIMARY KEY, User_ID integer, Codekata_Topic integer, Total_Problems_Solved integer);
CREATE TABLE users_company_drive(Id integer PRIMARY KEY, User_ID integer, Company_ID integer);
CREATE TABLE users_mentors(Id integer PRIMARY KEY, USER_Id integer, Mentor_ID integer);
CREATE TABLE students_activated_courses(Id integer PRIMARY KEY, USER_Id integer, Course_Id integer);

