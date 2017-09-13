# Show
> Poptato's shows management micro-service

## Documentation
This micro-service's documentation is available in `/docs` directory.
This documentation directory is also exposed by the service on runtime under `<service>/docs`.

## Running
### Natively
First, make sure you have [NodeJS](https://nodejs.org/en/) 8.1.0 or higher, [RethinkDB](https://www.rethinkdb.com/) 2.3.5 or higher.
Then, in terminal, navigate to a target folder and run:
```shell
$ git clone https://github.com/Poptato/show-service.git
$ cd movie-service
$ npm install
$ npm start
```

### Docker Standalone
First, make sure you have [Docker](https://docker.com) higher.  
Then, in terminal, navigate to a target folder and run:
```shell
$ git clone https://github.com/Poptato/show-service.git
$ cd movie-service
$ docker-compose up --build
```

### All Solution
See [easy-setup](https://github.com/Poptato/easy-setup) repository.

## Testing
### Unit Tests
Open a terminal in the projects folder, then run:
```shell
$ npm run test:unit
```

### API Tests
Open a terminal in the projects folder, then run:
```shell
$ npm run test:api
```

### Integration Tests
See [easy-setup](https://github.com/Poptato/easy-setup) repository.
