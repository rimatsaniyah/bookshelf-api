<<<<<<< HEAD
const Hapi = require('@hapi/hapi'); // Import the Hapi framework
const routes = require('./routes'); // Import the routes defined in the routes.js file

const init = async () => {
  const server = Hapi.server({
    port: 9000, // Set the port where the server will run
    host: 'localhost', // Set the host where the server will run
  });

  server.route(routes); // Add the routes to the server

  await server.start(); // Start the server
  console.log(`Server berjalan pada ${server.info.uri}`); // Log a message with the server's address
};

init(); // Call the init function to start the server
=======
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
>>>>>>> e5895b8 (Initial commit)
