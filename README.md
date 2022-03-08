### Objective

Your assignment is to implement a URL shortening service using Node and any framework.

### Brief

ShortLink is a URL shortening service where you enter a URL such as https://codesubmit.io/library/react and it returns a short URL such as http://short.est/GeAi9K.

### Tasks

-   Implement assignment using:
    -   Language: **Node**
    -   Framework: **any framework**
    -   Two endpoints are required
        -   /encode - Encodes a URL to a shortened URL
        -   /decode - Decodes a shortened URL to its original URL.
    -   Both endpoints should return JSON
-   There is no restriction on how your encode/decode algorithm should work. You just need to make sure that a URL can be encoded to a short URL and the short URL can be decoded to the original URL.
-   You should persist the URLs to a database of your choice (preferably MySQL)
-   Provide detailed instructions on how to run your assignment in a separate markdown file (e.g. README.md)

### Result
To execute the project, it is necessary to meet the following requirements:
- MySQL database;
- Docker (If you want to run the DB in a container. Docker configuration in the project);
- Node.js

Running the project with Docker database:
Commands:
  - docker-compose docker_mysql/docker-compose up -d
  - npm i
  - npm run run-migration
  - npm run start

Running the project without Docker database:
    You will need to open the knexfile.js file to configure DB access:
    host : 'your db address',
       port : 3306,
       user : 'your user',
       password : 'your password',
       database : 'going2_challenge'

Once configured, run the following commands:
  - npm i
  - npm run run-migration
  - npm run start


- Endpoints:
    - /encode: 
        - Request:
        {
            "url": "copy the url here"
        }
        - Response:
        {
            "id": 4,
            "url": "your url shortened"
        }

    - /decode:
        - Request:
        {
            "url": "your url shortened"
        }
        - Response:
        {
            "url": "url original"
        }

