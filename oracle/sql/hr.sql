--Create USERS table
CREATE TABLE USERS (
ID NUMBER (*,0) NOT NULL,
EMAIL_ADDRESS varchar2(240),
USERNAME varchar2(240) NOT NULL,
ORG_KEY varchar2(30) DEFAULT 'DEFAULT',
PASSWORD varchar2(240),
DISPLAY_NAME varchar2(240),
LOCALE varchar2(10)
);

--Create ROLES table
CREATE TABLE ROLES(
    ID NUMBER(*,0)NOT NULL,
    ORG_KEY VARCHAR2(30) DEFAULT 'DEFAULT' NOT NULL,
    SHORT_NAME VARCHAR2(10) NOT NULL,
    NAME VARCHAR2(40) NOT NULL
    );
    
--Create USER_ROLES_GRANTS table
CREATE TABLE USER_ROLES_GRANTS (
    ID NUMBER(*,0) NOT NULL,
    USER_ID NUMBER(*,0) NOT NULL,
    RLE_ID NUMBER(*,0) NOT NULL
    );
    
--ALTER USERS TABLE set PRIMARY KEY
ALTER TABLE USERS
ADD CONSTRAINT USR_PK PRIMARY KEY (ID) ENABLE;

--ALTER ROLES TABLE set UNIQUE KEY
ALTER TABLE ROLES
ADD CONSTRAINT RLE_UK1 UNIQUE(SHORT_NAME, ORG_KEY) ENABLE;

--ALTER ROLES  TABLE set PRIMARY KEY 
ALTER TABLE ROLES
ADD CONSTRAINT RLE_PK PRIMARY KEY (ID) ENABLE;

--ALTER  USER ROLES GRANTS
ALTER TABLE USER_ROLES_GRANTS
ADD CONSTRAINT URG_PK PRIMARY KEY (ID) ENABLE;

ALTER TABLE USER_ROLES_GRANTS
ADD CONSTRAINT URG_UK1 UNIQUE (RLE_ID, USER_ID) ENABLE;

--Create user Sequence
CREATE SEQUENCE USER_SEQ INCREMENT BY 1 MAXVALUE 99999999999 MINVALUE 1 CACHE 20;

--Create role sequence
CREATE SEQUENCE ROLE_SEQ INCREMENT BY 1 MAXVALUE 99999999999 MINVALUE 1 CACHE 20;

--Create USER ROLE GRANTS SEQUENCE
create sequence USER_ROLES_GRANT_SEQ INCREMENT BY 1 MAXVALUE 9999999999 MINVALUE 1 CACHE 20; 
-- Create two users chandrashekhara and ravi
INSERT INTO users (ID, EMAIL_ADDRESS, USERNAME, ORG_KEY, PASSWORD, DISPLAY_NAME)
SELECT USER_SEQ.NEXTVAL,'chandrashekhara','chandrashekhara','DEFAULT','chandrashekhara', 'Chandrashekhara Nathegowda'
from dual
where not exists (select '1' from users where username='chandrashekhara');

insert into users (ID, EMAIL_ADDRESS, USERNAME, ORG_KEY, PASSWORD, DISPLAY_NAME)
select USER_SEQ.nextval,'ravi','ravi','DEFAULT','ravi', 'Ravi Pagidipala'
from dual
where not exists (select '1' from users where username='ravi');

INSERT INTO USERS (ID, EMAIL_ADDRESS, USERNAME, ORG_KEY, PASSWORD, DISPLAY_NAME)
SELECT USER_SEQ.NEXTVAL, 'BHARATH@GMAIL.COM', 'BHARATH REDDY', 'DEFAULT', 'NANI', 'Bharath Kondreddy'
from dual
where not exists (select '1' from users where username='BHARATH REDDY');

-- set up two roles: Administrator and User
insert into roles(id, SHORT_NAME, name)
select ROLE_SEQ.nextval, 'ADMIN','Administrator'
from dual
where not exists (select '1' from roles where short_name='ADMIN');

insert into roles(id, SHORT_NAME, name)
select ROLE_SEQ.nextval, 'USER','User'
from dual
where not exists (select '1' from roles where short_name='USER');

-- Make chandrashekhara as Administrator
insert into user_roles_grants (id,rle_id,user_id)
select USER_ROLES_GRANT_SEQ.nextval, rle.id, user.id
from roles rle, users usr
where rle.short_name='ADMIN'
and user.username='chandrashekhara'
and not exists (select '1' from user_roles_grants urg2
where urg2.user_id = usr.id
and urg2.rle_id = rle.id);

-- Make ravi as User
insert into user_role_grants (id,rle_id,user_id)
select USER_ROLES_GRANT_SEQ.nextval, rle.id, user.id
from roles rle, users usr
where rle.short_name='USER'
and usr.username='ravi'
and not exists (select '1' from user_role_grants urg2
where urg2.usr_id = user.id
and urg2.rle_id = rle.id);
--
commit;
