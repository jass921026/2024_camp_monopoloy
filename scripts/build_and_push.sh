yarn build-frontend
docker-compose down
docker image rm jass921026/monopoly
docker build . -t jass921026/monopoly
docker push jass921026/monopoly