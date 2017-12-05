# Socket Test

Socket Test provides the simplest form of a socket connection using socket.io.

## Getting Started

Socket test consists of two parts, and API and a SITE. The Site connects to the API via socket.io on http://localhost:8033

### API Prerequisites

You will need node and npm installed

### API Installation

cd into the API directory and install

```
npm install
```

And then run the API

```
node index.html
```
Once the site has connected you will see in the console "TEST SUCESSFULL"

## Running the site

Open the SITE folder and drag the index.html file into any browser, check the dev tools - console and you should see "TEST SUCESSFULL"

## Roadmap
The plan is to incrementally add support for nginx and docker

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


