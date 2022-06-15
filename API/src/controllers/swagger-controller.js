const config = require("../configs/env");

const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "OAuth2.0_01",
    version: "1.0.0",
    description: "Example OAuth2.0 protected API",
    contact: { name: "inf-21-dw2-g02" },
  },
  servers: [{ url: "http://localhost:" + config.port }],
  security: [
    {
      OAuth2Security: [],
    },
  ],
  paths: {
    "/Engines/Count": {
      get: {
        tags: ["EnginesController"],
        summary: "Count engines",
        operationId: "countEngines",
        responses: {
          200: {
            description: "Number of engines model instances",
          },
        },
      },
    },
    "/Engines": {
      get: {
        tags: ["EnginesController"],
        summary: "Retrieve engines",
        operationId: "retrieveEngines",
        responses: {
          200: {
            description: "Array of engines model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Engine",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "EnginesController",
      },
      post: {
        tags: ["EnginesController"],
        summary: "Create Engine",
        operationId: "createEngine",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Engine",
              },
              examples: {
                EngineInsert: {
                  $ref: "#/components/examples/EngineInsert",
                },
                EngineExample01: {
                  $ref: "#/components/examples/EngineExample01",
                },
                EngineExample02: {
                  $ref: "#/components/examples/EngineExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Engine",
              },
              examples: {
                EngineExample01: {
                  $ref: "#/components/examples/EngineExample01",
                },
                EngineExample02: {
                  $ref: "#/components/examples/EngineExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Engine model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Engine",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Engine",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "EnginesController",
      },
    },
    "/Engine/{id}": {
      get: {
        tags: ["EnginesController"],
        summary: "Retrieve Engine",
        operationId: "retrieveEngine",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Engine id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Engine id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Engine",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Engine",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "EnginesController",
      },
      put: {
        tags: ["EnginesController"],
        summary: "Update Engine",
        operationId: "updateEngine",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Engine id 1",
                value: 1,
              },
              two: {
                summary: "Update Engine id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Engine",
              },
              examples: {
                EngineUpdate: {
                  $ref: "#/components/examples/EngineInsert",
                },
                EngineExample01: {
                  $ref: "#/components/examples/EngineExample01",
                },
                EngineExample02: {
                  $ref: "#/components/examples/EngineExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Engine PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "EnginesController",
      },
      delete: {
        tags: ["EnginesController"],
        summary: "Delete Engine",
        operationId: "deleteEngine",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Engine id 1",
                value: 1,
              },
              two: {
                summary: "Delete Engine id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "EnginesController",
      },
    },
    "/Cars/Count": {
      get: {
        tags: ["CarsController"],
        summary: "Count cars",
        operationId: "countCars",
        responses: {
          200: {
            description: "Number of cars model instances",
          },
        },
      },
    },
    "/Cars": {
      get: {
        tags: ["CarsController"],
        summary: "Retrieve Cars",
        operationId: "retrieveCars",
        responses: {
          200: {
            description: "Array of Car model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Car",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200_1",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "CarsController",
      },
      post: {
        tags: ["CarsController"],
        summary: "Create Car",
        operationId: "createCar",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Car",
              },
              examples: {
                CarInsert: {
                  $ref: "#/components/examples/CarInsert",
                },
                CarExample01: {
                  $ref: "#/components/examples/CarExample01",
                },
                CarExample02: {
                  $ref: "#/components/examples/CarExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Car",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Car model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Car",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Car",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "CarsController",
      },
    },
    "/Car/{id}": {
      get: {
        tags: ["CarsController"],
        summary: "Retrieve Car",
        operationId: "retrieveCar",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Car id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Car id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Car",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Car",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "CarsController",
      },
      put: {
        tags: ["CarsController"],
        summary: "Update Car",
        operationId: "updateCar",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Car id 1",
                value: 1,
              },
              two: {
                summary: "Update Car id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Car",
              },
              examples: {
                CarUpdate: {
                  $ref: "#/components/examples/CarInsert",
                },
                CarExample01: {
                  $ref: "#/components/examples/CarExample01",
                },
                CarExample02: {
                  $ref: "#/components/examples/CarExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Car PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "CarsController",
      },
      delete: {
        tags: ["CarsController"],
        summary: "Delete Car",
        operationId: "deleteCar",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Car id 1",
                value: 1,
              },
              two: {
                summary: "Delete Car id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "CarsController",
      },
    },
    "/Manufacturers/Count": {
      get: {
        tags: ["ManufacturersController"],
        summary: "Count manufacturers",
        operationId: "countManufacturers",
        responses: {
          200: {
            description: "Number of manufacturers model instances",
          },
        },
      },
    },
    "/Manufacturers": {
      get: {
        tags: ["ManufacturersController"],
        summary: "Retrieve Manufacturers",
        operationId: "retrieveManufacturers",
        responses: {
          200: {
            description: "Array of manufacturers model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Manufacturer",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "ManufacturersController",
      },
      post: {
        tags: ["ManufacturersController"],
        summary: "Create Manufacturer",
        operationId: "createManufacturer",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Manufacturer",
              },
              examples: {
                ManufacturerInsert: {
                  $ref: "#/components/examples/ManufacturerInsert",
                },
                ManufacturerExample01: {
                  $ref: "#/components/examples/ManufacturerExample01",
                },
                ManufacturerExample02: {
                  $ref: "#/components/examples/ManufacturerExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Manufacturer",
              },
              examples: {
                ManufacturerInsert: {
                  $ref: "#/components/examples/ManufacturerInsert",
                },
                EngineExample01: {
                  $ref: "#/components/examples/ManufacturerExample01",
                },
                EngineExample02: {
                  $ref: "#/components/examples/ManufacturerExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Manufacturer model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Manufacturer",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Manufacturer",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "ManufacturersController",
      },
    },
    "/Manufacturer/{id}": {
      get: {
        tags: ["ManufacturersController"],
        summary: "Retrieve Manufacturer",
        operationId: "retrieveManufacturer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Manufacturer id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Manufacturer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Manufacturer",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Manufacturer",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ManufacturersController",
      },
      put: {
        tags: ["ManufacturersController"],
        summary: "Update Manufacturer",
        operationId: "updateManufacturer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Manufacturer id 1",
                value: 1,
              },
              two: {
                summary: "Update Manufacturer id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Manufacturer",
              },
              examples: {
                ManufacturerUpdate: {
                  $ref: "#/components/examples/ManufacturerInsert",
                },
                ManufacturerExample01: {
                  $ref: "#/components/examples/ManufacturerExample01",
                },
                ManufacturerExample02: {
                  $ref: "#/components/examples/ManufacturerExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Manufacturer PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ManufacturersController",
      },
      delete: {
        tags: ["ManufacturersController"],
        summary: "Delete Manufacturer",
        operationId: "deleteManufacturer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Manufacturer id 1",
                value: 1,
              },
              two: {
                summary: "Delete Manufacturer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "ManufacturersController",
      },
    },
    "/Owners/Count": {
      get: {
        tags: ["OwnersController"],
        summary: "Count owners",
        operationId: "countOwners",
        responses: {
          200: {
            description: "Number of owners model instances",
          },
        },
      },
    },
    "/Owners": {
      get: {
        tags: ["OwnersController"],
        summary: "Retrieve Owners",
        operationId: "retrieveOwners",
        responses: {
          200: {
            description: "Array of Owners model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Owner",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "OwnersController",
      },
      post: {
        tags: ["OwnersController"],
        summary: "Create Owner",
        operationId: "createOwner",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Owner",
              },
              examples: {
                OwnerInsert: {
                  $ref: "#/components/examples/OwnerInsert",
                },
                OwnerExample01: {
                  $ref: "#/components/examples/OwnerExample01",
                },
                OwnerExample02: {
                  $ref: "#/components/examples/OwnerExample02",
                },
              },
            },
            "application/xml": {
              schema: {
                $ref: "#/components/schemas/Owner",
              },
              examples: {
                OwnerInsert: {
                  $ref: "#/components/examples/OwnerInsert",
                },
                OwnerExample01: {
                  $ref: "#/components/examples/OwnerExample01",
                },
                OwnerExample02: {
                  $ref: "#/components/examples/OwnerExample02",
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Create a Owner model instance",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Owner",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Owner",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
        },
        "x-swagger-router-controller": "OwnersController",
      },
    },
    "/Owner/{id}": {
      get: {
        tags: ["OwnersController"],
        summary: "Retrieve Owner",
        operationId: "retrieveOwner",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Owner id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Owner id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Owner",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/Owner",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "OwnersController",
      },
      put: {
        tags: ["OwnersController"],
        summary: "Update Owner",
        operationId: "updateOwner",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Update Owner id 1",
                value: 1,
              },
              two: {
                summary: "Update Owner id 2",
                value: 2,
              },
            },
          },
        ],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Owner",
              },
              examples: {
                OwnerUpdate: {
                  $ref: "#/components/examples/OwnerInsert",
                },
                OwnerExample01: {
                  $ref: "#/components/examples/OwnerExample01",
                },
                OwnerExample02: {
                  $ref: "#/components/examples/OwnerExample02",
                },
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  description: "Owner PUT success",
                  "x-content-type": "application/json",
                },
              },
            },
          },
          400: {
            description: "Bad request",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "OwnersController",
      },
      delete: {
        tags: ["OwnersController"],
        summary: "Delete Owner",
        operationId: "deleteOwner",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Delete Owner id 1",
                value: 1,
              },
              two: {
                summary: "Delete Owner id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          204: {
            description: "No Content",
          },
          404: {
            description: "id not found",
          },
        },
        "x-swagger-router-controller": "OwnersController",
      },
    },
    "/Engines/{id}/Car": {
      get: {
        tags: ["CarsByEngineController"],
        summary: "Retrieve Cars based on Engine ID",
        operationId: "retrieveCarsOnEngine",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Engine id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Engine id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Car model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Car",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "CarsByEngineController",
      },
    },
    "/Owners/{id}/Car": {
      get: {
        tags: ["CarsByOwnerController"],
        summary: "Retrieve Cars based on Owner ID",
        operationId: "retrieveCarsOnOwner",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Owner id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Owner id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Car model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Car",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "CarsByOwnerController",
      },
    },
    "/Manufacturers/{id}/Car": {
      get: {
        tags: ["CarsByManufacturerController"],
        summary: "Retrieve Cars based on Manufacturer ID",
        operationId: "retrieveCarsOnManufacturer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            style: "simple",
            explode: false,
            schema: {
              minimum: 1,
              type: "integer",
              format: "int64",
            },
            examples: {
              one: {
                summary: "Retrieve Manufacturer id 1",
                value: 1,
              },
              two: {
                summary: "Retrieve Manufacturer id 2",
                value: 2,
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Array of Car model instances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Car",
                  },
                  "x-content-type": "application/json",
                },
              },
              "application/xml": {
                schema: {
                  $ref: "#/components/schemas/inline_response_200",
                },
              },
            },
          },
        },
        "x-swagger-router-controller": "CarsByManufacturerController",
      },
    },
  },
  components: {
    schemas: {
      Car: {
        title: "Car",
        required: [
          "description",
          "name",
          "engineId",
          "manufacturerId",
          "ownerId",
        ],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          color: {
            type: "string",
          },
          engineId: {
            type: "integer",
            format: "int64",
          },
          manufacturerId: {
            type: "integer",
            format: "int64",
          },
          ownerId: {
            type: "integer",
            format: "int64",
          },
        },
        additionalProperties: true,
        example: {
          id: 0,
          description: "description",
          name: "name",
          color: "color",
          engineId: 0,
          manufacturerId: 0,
          ownerId: 0,
        },
      },
      Engine: {
        title: "Engine",
        required: ["brand", "horsepower", "name"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
          horsepower: {
            type: "integer",
            format: "int64",
          },
          brand: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          name: "name",
          horsepower: 0,
          brand: "brand",
        },
      },
      Manufacturer: {
        title: "Manufacturer",
        required: ["description", "founded", "name"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
          founded: {
            type: "integer",
            format: "int64",
          },
          description: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          name: "name",
          founded: 0,
          description: "description",
        },
      },
      Owner: {
        title: "Owner",
        required: ["age", "name", "sex"],
        type: "object",
        properties: {
          id: {
            type: "integer",
            format: "int64",
          },
          name: {
            type: "string",
          },
          age: {
            type: "integer",
            format: "int64",
          },
          sex: {
            type: "string",
          },
        },
        additionalProperties: false,
        example: {
          id: 0,
          name: "name",
          age: 0,
          sex: "sex",
        },
      },
      inline_response_200: {
        type: "object",
        properties: {
          Engine: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Engine",
            },
          },
        },
        xml: {
          name: "Engine",
        },
      },
      inline_response_200_1: {
        type: "object",
        properties: {
          Car: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Car",
            },
          },
        },
        xml: {
          name: "Car",
        },
      },
    },
    examples: {
      CarExample01: {
        value: {
          id: 1,
          name: "Car 01",
          description: "Car 01 description",
          color: "Car 01 color",
        },
      },
      CarExample02: {
        value: {
          id: 2,
          name: "Car 02",
          description: "Car 02 description",
          color: "Car 02 color",
        },
      },
      CarInsert: {
        value: {
          name: "Car",
          description: "Car description",
          color: "Car color",
          engineId: 1,
          manufacturerId: 1,
          ownerId: 1,
        },
      },
      EngineExample01: {
        value: {
          id: 1,
          name: "Engine 01",
          brand: "Brand 01",
          horsepower: 0,
        },
      },
      EngineExample02: {
        value: {
          id: 2,
          name: "Engine 02",
          brand: "Brand 02",
          horsepower: 0,
        },
      },
      EngineInsert: {
        value: {
          name: "Engine",
          brand: "Engine brand",
          horsepower: 0,
        },
      },
      ManufacturerExample01: {
        value: {
          id: 1,
          name: "Manufacturer 01",
          description: "Manufacturer 01 description",
          founded: 0,
        },
      },
      ManufacturerExample02: {
        value: {
          id: 2,
          name: "Manufacturer 02",
          description: "Manufacturer 02 description",
          founded: 0,
        },
      },
      ManufacturerInsert: {
        value: {
          name: "Manufacturer",
          description: "Manufacturer description",
          founded: 0,
        },
      },
      OwnerExample01: {
        value: {
          id: 1,
          name: "Owner 01",
          description: "Owner 01 description",
          age: 0,
          sex: "sex",
        },
      },
      OwnerExample02: {
        value: {
          id: 2,
          name: "Owner 02",
          description: "Owner 02 description",
          age: 0,
          sex: "sex",
        },
      },
      OwnerInsert: {
        value: {
          name: "Owner",
          age: 0,
          sex: "Owner sex",
        },
      },
    },
    securitySchemes: {
      OAuth2Security: {
        type: "oauth2",
        flows: {
          authorizationCode: {
            authorizationUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            scopes: [],
          },
        },
      },
    },
  },
  security: [{ OAuth2Security: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
