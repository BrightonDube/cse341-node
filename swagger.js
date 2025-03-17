import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: "Contacts API",
        description: "API for managing contacts",
        version: "1.0.0",
    },
    host: "localhost: 3000",
    schemes: ["http", "https"]
};
const outputFile = "./swagger.json";
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles, doc);

