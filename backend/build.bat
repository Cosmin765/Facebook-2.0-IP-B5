docker build -t build-env-image ./build-env/

docker compose -f ./build-env/docker-compose.yaml up -d
docker exec build-env mvn install -f /Facebook/pom.xml
docker compose -f ./build-env/docker-compose.yaml stop

docker build -t facebook-core-image ./Facebook/
