# iasc-docker-compose-nginx-node-example
Small example of a node.js app using nginx as a load balancer using docker

### Pre-requisites

- Have an account on docker hub, if you want to push the docker images created
- install the docker and docker-compose applications, using apt-get, brew or related to your OS.

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

![alt text](https://raw.githubusercontent.com/arquitecturas-concurrentes/iasc-docker-compose-nginx-node-example/master/Screenshot_2018-11-20_17-43-40.png?token=AA_0D5M_wXfGg0ZwzVf1NflEdGzbgrLsks5b_a69wA%3D%3D)


also you can see the logs by doing

```bash
docker logs 99cb44d439be
```

in these examples 99cb44d439be is the container id.

you can enter the docker image by doing 

```bash
docker exec -it 99cb44d439be /bin/bash
```


## Using compose

We can use the compose by building using the cmd 

```bash
docker-compose build
```

if you want to set up more than one app then we need to change the nginx config


```
    upstream app_servers {
        server iasc-docker_app_1:5000;
        server iasc-docker_app_2:5000;
        server iasc-docker_app_3:5000;
        server iasc-docker_app_4:5000;
    }
```

then scale it accordingly

```bash
docker-compose scale app=4
```

and then bringing the services up

```bash
docker-compose up
```
