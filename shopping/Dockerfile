FROM node

RUN mkdir -p /usr/src/app
WORKDIR  /usr/src/app

COPY . .
RUN npm install

# i need to override the db_path and the port number in environment variable
    #   - MONGODB_URI=mongodb://root:password123@customer_db:27017
    #   - PORT=3000
ENTRYPOINT [ "npm" ]
CMD [ "run" , "server" ]




