# APIs

I have used loopback framework(build on top of ExpressJS) to create APIs in Node.js. They can be consumed from web applications and mobile applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

To get started, you should have **node** and **npm** installed. It can be downloaded from https://nodejs.org/en/ and npm comes with node. Please use below commands to check your node and npm version.

```
node -v
npm -v
```

### Installing

Below are the series of steps that will tell you how to get an env running

Enter into root directory and install node modules by running below commands:

```
npm install
```

To start node services, set AWS_ACCESS_KEY and AWS_SECRET_ACCESS_KEY environment variables with start npm:

```
AWS_ACCESS_KEY='<AWS_ACCESS_KEY>' AWS_SECRET_ACCESS_KEY='<AWS_SECRET_ACCESS_KEY>' npm start
```