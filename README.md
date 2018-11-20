# iasc-docker-compose-nginx-node-example
Small example of a node.js app using nginx as a load balancer using docker


## Building an image, for eg. the app

on the app folder you can build up the image by doing:

```bash
docker build -t <your username>/node-pong-app .
```

execute it by doing 

```bash
docker run -p 49160:5000 -d <your username>/node-pong-app
```

and getting the status by

```bash
docker ps
```


also you can see the logs by doing

```bash
docker logs 99cb44d439be
```

in these examples 99cb44d439be is the container id.

you can enter the docker image by doing 

```bash
docker exec -it 99cb44d439be /bin/bash
```
