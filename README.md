# Dokumentation - Social Network - Mooder
**Data & Knowledge Engineering Praktikum** 
Gruppe 2 
Nicola Reichenvater, Bernhard Auinger, Sebastian Hatmanstorfer, Jakob  Froschauer

## Architektur
Schematische Darstellung der Services des Social Network:
![Architektur Visualisierung](https://am3pap005files.storage.live.com/y4m1WHQujZT9T49F9Wfhdm0Ce92ERfskjR8P_6IQi3XuWSTJXiK_DU8Lk226Xn-xMVw42qwTmwbaGTT4W4W6m1tMYJB9PUsLuKEmZS--v08D-WUQ7wwLsC2V3De1AUHGBs7CyhEudXXu66EuopUx4Mx4jMj6OAO6JxWgoUpv3Y_c1Ch9OtasZCsYqtPoVqf5ovZ?width=865&height=535&cropmode=none)

Das API Gateway kommuniziert mittels HTTP (REST) mit den drei Services und das API-Gateway kommuniziert mittels HTTP mit dem Frontend.
## Lessons Learned
* Verantwortlichkeiten zwar klar definiert -> praktisch aber nicht umsetzbar das Code genau einer Person zuegordnet werden kann
  * Bei Integration war praktisch IMMER Pair-Programing nötig
  * Wegen Orchestrierung auf einem PC -> auch GIT-Commit nicht wirklich aussagekräftig 
  * Überlegung ob Bewertung als Gruppe nicht sinnvoller oder Umfang begrenzen dafür mit Docker?
* Zusammenarbeit außerordentlich gut!
  * Immer Hilfsbereitschaft
  * Sehr gute Arbeitsteilung
  * Absprachen immer reibungs- und problemlos
* Für nächstes Projekt:
  *  Detailliertere Schnittstellendefinition und durch ganzes Projekt durchziehen
  *  Variablen / Datenobjektbenennung noch genauer und über Services hinweg absprechen
  *  -> Wichtig für Integration!
## Anwendungsfälle

| Use-Cases Standardfunktionalität | Status |
| ------------------------------- | ------ |
| User Posten "mood"-Emoji        | Implementiert |
| Sehen Stream der eigenen Emojis | Implementiert |
| Können anderen folgen | Implementiert |
| Sehen aktuelle Laune von allen Freunden | Implementiert |
| Können Personen und Postings suchen | Implementiert |

| Weitere Use-Cases  | Status |
| ------------------------------- | ------ |
| Registrierung        | Implementiert |
| Login / Logout | Implementiert |
| Nach HashTags suchen | Nicht Implementiert |
| Erwähnungen und Notifications | Nicht Implementiert |
| Protokollierung (DSGVO Auskunft) | Nicht Implementiert |
| Einstellungen (Hintergrund, Privatsphäre, Notifications) | Implementiert |



## API-Gateway
### Vorbereitung
1. Starten Sie die drei Services (Post Service, Social Service, User Service).
2. APIGateway starten.
### Schnittstellen des API Gateways
#### 1. GET /ping

http://localhost:8081/ping

**Response-Body:**
```
OK
```
#### 2. POST /service

http://localhost:8081/service

**Request-Body:**
````json
{
    "ip" : "localhost",
    "port" : "8083",
    "type" : "post"
}
````

**Response-Body:**
```
OK
```
##### User Controller
#### 3. POST /register 

**Description:** Register a user to the UserService and the SocialService.

http://localhost:8081/register

**Request-Body:**
```json
{
    "username" : "user123",
    "password" : "admin",
    "repeatedPassword" : "admin"
}
```
**Response-Body:**
```json
{
    "username" : "user123",
    "password" : "admin",
    "repeatedPassword" : "admin"
}
```
#### 4. POST /login

**Description:** Login and authenticate to the API Gateway.

http://localhost:8081/login

**Request-Body:** 
```json
{
	"username" : "user123",
	"password" : "admin"
}
```
**Response-Body:**
```json
{
	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg",
	"username" : "user123"
}
```
####  5. DELETE /user
http://localhost:8081/user

**Request-Body:**
```
berni
```
**Response-Body:**
```json
OK
```
#### 6. GET /user 
http://localhost:8081/user

**Request-Header:**
```json
{
	"username" : "berni",
	"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```
**Response-Body:**
```
OK
```
##### Social Controller
#### 7. POST /follow 
**Description:** Follow a user | callingUser -> followUser |.

http://localhost:8081/follow

**Request-Body:**
```json
{
	"callingUserId" : "user123",
	"followUserId" : "user1234"
}
```
**Response-Body:**
```json
OK
```
#### 8. POST /unfollow 

**Description:** Unfollow a user | callingUser -> unfollowUser |.

http://localhost:8081/unfollow

**Request-Body:**
```json
{
	"callingUserId" : "user123",
	"unfollowUserId" : "user1234"
}
```
**Response-Body:**
```json
OK
```
#### 9. GET /followed 
**Description:** Returns all followed Users, identified by searchingUser.

http://localhost:8081/followed

**Request-Header:**
```json
{
	"user" : "user123"
}
```
**Response-Body:**
```json
[
	"user1234"
]
```
#### 10. GET /search
**Description:** Searching in the p
osts of a specified user.

http://localhost:8081/search

**Request-Header:**
```json
{
	"searchString" : "hello",
	"searchingUser": "user123"
}
```
```json
[
	{
	"_id":  {
		"timestamp":  1611526179,
		"machineIdentifier":  996340,
		"processIdentifier":  15944,
		"counter":  5942766,
		"time":  1611526179000,
		"date":  1611526179000,
		"timeSecond":  1611526179
	},
	"userid":  "berni",
	"post":  "Hello what's on?",
	"mood":  "U+1F600",
	"timestamp":  1611526179054,
	"hashtags":  [
					"seas",
					"ero"
				]
	}
]
```
##### Post Controller
#### 11. POST /post

**Description:** Create a new Post.

http://localhost:8081/post

**Request-Body:**
````json
{
    "userid" : "user123",
    "post" : "Hey what's on?",
    "mood" : "U+1F600",
    "timestamp" : 1611523086719,
    "hashtags"  :  [
					    "hashtag1",
					    "hashtag2"
				   ]
}
````
**Response-Body:**
```
OK
```
#### 12. DELETE /post

**Description:** Delete the Post.

http://localhost:8081/post

**Request-Header:**
````json
{
    "user" : "user123",
}
````
**Response-Body:**
```
OK
```
####  13. GET /posts

**Description:** Get all posts of the user.

http://localhost:8083/posts

**Response-Body:**
```json
[
	{
	"_id":  {
		"timestamp":  1611526179,
		"machineIdentifier":  996340,
		"processIdentifier":  15944,
		"counter":  5942766,
		"time":  1611526179000,
		"date":  1611526179000,
		"timeSecond":  1611526179
	},
	"userid":  "berni",
	"post":  "Hey what's on?",
	"mood":  "U+1F600",
	"timestamp":  1611526179054,
	"hashtags":  [
					"seas",
					"ero"
				]
	}
]
```
#### 14. GET /feed 
**Description:** Get the feed (own posts and the posts of followed user) of a specified user.

http://localhost:8081/feed

**Request-Body**:
```json
[
	"user123",
	"user1234"
]
```
**Response-Body:**
```json
[
	{
	"_id":  {
		"timestamp":  1611526179,
		"machineIdentifier":  996340,
		"processIdentifier":  15944,
		"counter":  5942766,
		"time":  1611526179000,
		"date":  1611526179000,
		"timeSecond":  1611526179
	},
	"userid":  "berni",
	"post":  "Hey what's on?",
	"mood":  "U+1F600",
	"timestamp":  1611526179054,
	"hashtags":  [
					"seas",
					"ero"
				]
	}
]
```
#### 15. POST /recent 
**Description:** Get all posts of some specified users, identified by a list of userids.

http://localhost:8083/recent

Request-Header:
```json
{
	"username" : "berni",
	"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```
Response-Body:
```
OK
```

## 1. User Service

### Vorbereitung

1. Download der Oracle XE DB auf dieser [Website](https://www.oracle.com/database/technologies/xe-downloads.html).
2. Passwort wählen und in *application.properties* unter "spring.datasource.password" das Passwort eintragen
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
4. JWT Expiration Date einstellen (default: 18000000 -> ca. 5 Stunden) in *application.properties*
5. DkeuserviceApplication starten (Kann bis zu 60 Sekunden dauern -> Spring JPA DB Verbindung)

### Schnittstellen des User Service

#### 1. GET /ping
http://localhost:8080/ping

**Response-Body:**
```
OK
```
#### 2. POST /register 

**Description:** Register a user to the UserService.

http://localhost:8080/register

**Request-Body:**
````json
{
    "username" : "user123",
    "password" : "admin",
    "repeatedPassword" : "admin"
}
````
**Response-Body:**
```
OK
```
#### 3. POST /login

**Description:** Login and authenticate to the User Service.

http://localhost:8080/login

**Request-Body:** 
```json
{
	"username" : "user123",
	"password" : "admin"
}
```
**Response-Body:**
```json
{
	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg",
	"username" : "user123"
}
```
#### 4. PATCH /user
http://localhost:8080/user

**Request-Header:**
```json
{
	"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```
**Request-Body:**
```json
{
	"username" : "berni",
	"password" : "admin",
	"repeatedPassword" : "admin"
}
```
**Response-Body:**
```json
OK
```
####  5. DELETE /delete
http://localhost:8080/user

**Request-Body:**
```
berni
```
**Response-Body:**
```json
OK
```
#### 5. GET /user 
http://localhost:8080/user

**Request-Header:**
```json
{
	"username" : "berni",
	"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```
**Response-Body:**
```
OK
```
## 2. Post Service

### Vorbereitung

1. Download der MongoDB auf dieser [Website](https://www.mongodb.com/try/download/community).
2. MongoDB starten und HOST auf **localhost:27017** stellen.
3. PostServer starten 

### Schnittstellen des Post Services

#### 1. GET /ping
http://localhost:8083/ping

**Response-Body:**
```
OK
```
#### 2. POST /post

**Description:** Create a new Post.

http://localhost:8083/post

**Request-Body:**
````json
{
    "userid" : "user123",
    "post" : "Hey what's on?",
    "mood" : "U+1F600",
    "timestamp" : 1611523086719,
    "hashtags"  :  [
					    "hashtag1",
					    "hashtag2"
				   ]
}
````
**Response-Body:**
```
OK
```
####  2. GET /posts

**Description:** Get all posts in the DB.

http://localhost:8083/posts

**Response-Body:**
```json
[
	{
	"_id":  {
		"timestamp":  1611526179,
		"machineIdentifier":  996340,
		"processIdentifier":  15944,
		"counter":  5942766,
		"time":  1611526179000,
		"date":  1611526179000,
		"timeSecond":  1611526179
	},
	"userid":  "berni",
	"post":  "Hey what's on?",
	"mood":  "U+1F600",
	"timestamp":  1611526179054,
	"hashtags":  [
					"seas",
					"ero"
				]
	}
]
```
#### 3. GET /getAllPostsofone
**Description:** Get all posts of one specific user, identified by userid.

http://localhost:8083/getAllPostsofone/{userid}

**Response-Body:**
```json
[
	{
	"_id":  {
		"timestamp":  1611526179,
		"machineIdentifier":  996340,
		"processIdentifier":  15944,
		"counter":  5942766,
		"time":  1611526179000,
		"date":  1611526179000,
		"timeSecond":  1611526179
	},
	"userid":  "berni",
	"post":  "Hey what's on?",
	"mood":  "U+1F600",
	"timestamp":  1611526179054,
	"hashtags":  [
					"seas",
					"ero"
				]
	}
]
```
#### 4. POST /feed 
**Description:** Get all posts of some specified users, identified by a list of userids.

http://localhost:8083/feed

Request-Body:
```json
[
	"user123",
	"user1234"
]
```
Response-Body:
```json
OK
```
#### 5. POST /recent 
**Description:** Get all posts of some specified users, identified by a list of userids.

http://localhost:8083/recent

Request-Header:
```json
{
	"username" : "berni",
	"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZXJuaSIsImlzVXNlciI6dHJ1ZSwiZXhwIjoxNjEwMjIzMDYwLCJpYXQiOjE2MTAyMDUwNjB9.fHHwBv3QeyaDpbFKrhZ06pSZKyIndDsXRSCfbAgjvISb8_-r5X_nRORNFDzFU_0NR7kwyw31e2plAg6k1b77Lg"
}
```
Response-Body:
```
OK
```
## 3. Social Service

1. Download der Neo4J Datenbank auf dieser [Website](https://neo4j.com/download/).
2. Neo4J Datenbank erstellen mit dem Namen: "*neo4j*" und dem Passwort: "*admin*".
3. Neo4J Datenbank starten
4. MooderSocialService starten 

### Schnittstelle des Social Services

#### 1. GET /ping

http://localhost:8082/ping

**Response-Body:**
```
OK
```
#### 2. GET /users

**Description:** Get all users in the DB.

http://localhost:8082/users

**Response-Body:**
```json
[
	"user123",
	"user1234"
]
```
#### 2. GET /user 

**Description:** Check if user exists.

http://localhost:8082/follower

**Request-Header:**
```json
{
	"userid" : "user123"
}
```
**Response-Body:**
```json
[
	"user123"
]
```
#### 3. POST /register 
**Description:** Register a user to the Social Service.

http://localhost:8082/register

**Request-Body:**
````json
{
    "username" : "user123"
}
````
**Response-Body:**
```
OK
```
#### 4. POST /follow 
**Description:** Follow a user | callingUser -> followUser |.

http://localhost:8082/follow

**Request-Body:**
```json
{
	"callingUserId" : "user123",
	"followUserId" : "user1234"
}
```
**Response-Body:**
```json
OK
```
#### 5. POST /unfollow 

**Description:** Unfollow a user | callingUser -> unfollowUser |.

http://localhost:8082/unfollow

**Request-Body:**
```json
{
	"callingUserId" : "user123",
	"unfollowUserId" : "user1234"
}
```
**Response-Body:**
```json
OK
```
#### 6. GET /follower 
**Description:** Returns all followed Users, identified by searchingUser.

http://localhost:8082/follower

**Request-Header:**
```json
{
	"searchingUser" : "user123"
}
```
**Response-Body:**
```json
[
	"user1234"
]
```
