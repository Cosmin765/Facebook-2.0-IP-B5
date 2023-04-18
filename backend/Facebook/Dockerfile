FROM openjdk:17-jdk-alpine
EXPOSE 8084
COPY ./target/Facebook-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
COPY src/main/resources/application.properties /app/application.properties
