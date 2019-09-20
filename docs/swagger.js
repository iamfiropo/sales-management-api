const options = {
  definition: {
    swagger: '2.0',
    info: {
      title: 'Sales Management API',
      version: '1.0.0',
      description: 'API docs for Sales Management Application'
    },
    securityDefinitions: {
      bearerAuth: {
        name: 'Authorization',
        in: 'header',
        type: 'apiKey',
      },
    },
    schemes: ['https', 'http'],
  },
  apis: ['./docs/*.yml'],
};

export default options;
