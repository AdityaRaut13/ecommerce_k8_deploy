<!-- @format -->

# E-commerce-microservices

1. Created E-commerce by Microservices.
2. used API calls by axios to communicate between services.
3. Created separate databases for each of the services.
4. Understood the advantages of microservices.
5. learnt to use API Gateway for routing

# Kubernetes Cluster Changes :

1. The gateway code was changed to switch between routes .
2. The code of each route was changed and Config was used for DB path Changes .
3. The application for each was dockerized for each route and the gateway as well .
4. The architecture diagram is also given for the changes .
5. While Running make sure that MongoDB is running first , then the route's node server , then the whole gateway .
6. The projects works on windows with minikube installed on it . It will work on linux as well if only the powershell script is converted into bash script.
