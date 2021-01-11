# Vorbereitung

1. Download der Oracle XE DB auf dieser [Website](https://www.oracle.com/database/technologies/xe-downloads.html).
2. Passwort wählen und in application.properties unter "spring.datasource.password" das Passwort eintragen
3. Eine Tabelle erstellen mit folgendem DDL-Schema:
 ```sql
   create table USERDAO
   (
   USERNAME   VARCHAR2(500) not null
   primary key,
   PASSWORD   VARCHAR2(500) not null,
   FIRST_NAME VARCHAR2(500), 
   LAST_NAME  VARCHAR2(500),
   EMAIL      VARCHAR2(500),
   ROLE       VARCHAR2(200)
   )
   /
```
4. JWT Expiration Date einstellen (default: 18000000 -> ca. 5 Stunden) in application.properties
5. DkeuserviceApplication starten (Kann bis zu 60 Sekunden dauern -> Spring JPA DB Verbindung)

#API

### 1. POST /register 

http://localhost:8080/register

````json
{
    "username" : "berni",
    "password" : "admin",
    "repeatedPassword" : "admin",
    "role" : "ROLE_USER"
}
````
### 2. POST /login
http://localhost:8080/login

Request-Body: 
```json
{
"username" : "berni",
"password" : "admin"
}
```
Response-Body:
```json
{
"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```

### 3. PATCH /user
http://localhost:8080/user

Authorization:
```json
{
'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg',
}
```
Request-Body:
```json
{
  "username" : "berni",
  "password" : "admin",
  "repeatedPassword" : "admin",
  "role" : "ROLE_USER"
}
```
Response-Body:
```json
OK
```

### 4. DELETE /user
http://localhost:8080/user

Authorization:
```json
{
'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg',
}
```
Request-Body:
```
berni
```
Response-Body:
```json
OK
```

### 5. GET /user
http://localhost:8080/user

Authorization:
```json
{
'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg',
}
```
Request-Body:
```
berni
```
Response-Body:
```
OK
```
