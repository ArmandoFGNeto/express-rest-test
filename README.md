# express-rest-test
A basic express REST application

This is a basic REST API application that connects to a MongoDB database and delivers data about products.
This app hasn't got any type of security, so any consumer can fetch it's data. CORS is already enabled.

The endpoint to get the products data is /rest/v1/products and it accepts three query params:
limit: the amount of resources per page the consumer wants;
page: the page the consumer wants;
name: a string the consumer wants to use as filter for the products data.

In order to run this app, a MongoDB collection called "products" is needed. Inside the mock folder there's
a file with a command to populate data inside the MongoDb collection. This mock was generated by mockeroo.

To start the REST api run the following command:
npm run dev
