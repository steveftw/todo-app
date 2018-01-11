# Spring Boot + Angular TODO Application
This is a little demo application I put together for a YouTube video.
Check out my channel here: https://www.youtube.com/channel/UC85xKpBiM8lazao7pbidUOw

This project can be used as a good starting point for anyone who wants to start developing their own application using the Spring Boot + Angular.

## Running
To run the application locally you will need to start the backend API first and then the frontend angular app second.

### Start the API on its own
```
cd todo-app-api
mvn spring-boot:run
```

### Start the UI on its own
```
cd todo-app-ui
ng serve --proxy-config proxy.conf.json
```

The --proxy-config parameter above will route the API calls from the angular app to your Spring Boot API.

### Packaging for deployment
Here you have a number of options.

1. You can build the backend API and the UI separately and deploy them separately, or
2. You can bundle the API and the UI into a single deployable jar file.

To build the api on its own:
```
cd todo-app-api
mvn clean package
``` 

To build the frontend on its own:
```
cd todo-app-ui
ng build
```

To bundle both together and have a single jar file with everything
```
cd todo-app-api
mvn -p bundle clean package
```
