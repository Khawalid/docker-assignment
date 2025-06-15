Application Description -> Used to log workouts

Architecture Diagram

![image](https://github.com/user-attachments/assets/3dcd4ec9-c922-403a-ab8b-960fb3a094df)

To run the app

docker compose build -> To build backend and frontend images

docker compose up -d -> To start containers (Also creates network for all the containers and a volume for monogodb container)

Working Application

UI
![image](https://github.com/user-attachments/assets/99f75997-2170-483d-855c-13287a3f237b)

Database Validation
![image](https://github.com/user-attachments/assets/1d8f1e8b-f108-40cc-85cb-6c06fc60ff8c)

Docker Hub Repos Link 

Frontend
https://hub.docker.com/r/kubekhawalid/workout-logger-frontend

Backend
https://hub.docker.com/r/kubekhawalid/workout-logger-backend

Creative Enhancement

Healtcheck is defined in mongodb container it if fails the monitoring script in backend container restarts and fixes the container so it gets healthy again.
Test defined in mongodb container is that the db container pings itself and if no response comes it gets unhealthy. To simulate this mongodb container was failed by changing the mongosh binary name to mongosh.bak and once the desired binary mongosh was not found response was not coming from container and healthcheck failed but the script fixed the problem by renaming the binary from mongosh.bak to mongosh and then restarts the container and it gets healthy again.
