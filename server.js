import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";

/**
 * Swagger and OpenAPI
 */
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const swaggerDocument = swaggerJsDoc({
    definition: {
        openapi: "3.1.0",
        info: {
            title: "MojVrt",
            version: "0.1.0",
            description:
                "MojVrt **REST API** razvijam kot projekt za učenje spletnega programiranja, namenjen pa bo za podporo pri vrtnarjenju."
        },
        tags: [
            {
                name: "MojVrt",
                description: "MojVrt je namenjen izdelavi lastnega virtualnega vrta.",
            },
            {
                name: "Tržnica",
                description: "Tržnica je namenjena postavljanju ponudb in povpraševanj za sadike in druge vrtne pridelke",
            }, {
                name: "Nasveti",
                description: "Nasveti so namenjeni izmenjavi izkušenj in pomoči.",
            },
            {
                name: "Galerija",
                description: "Galerija je namenjena izmenjavi fotografij.",
            }

        ],
        servers: [
            {
                url: "http://localhost:3000/api",
                description: "Strežnik za razvoj in testiranje",
            }
        ],
        components: {
            schemas: {
                SporočiloNapake: {
                    type: "object",
                    properties: {
                        sporočilo: {
                            type: "string",
                            description: "Napaka o sporočilu",
                        },
                    },
                    required: ["sporočilo"],
                },
            },
        },
    },
    apis: ["./api/models/trznica.js", "./api/controllers/trznica.js"],
});

// Povezemo se na bazo
import "./api/models/db.js";

import apiRouter from "./api/routes/index.js";

var server = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(join(__dirname, 'public')));

server.use('/api', apiRouter);

/**
 * Swagger file and explorer
 */
apiRouter.get("/swagger.json", (req, res) =>
    res.status(200).json(swaggerDocument)
);
apiRouter.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
        customCss: ".swagger-ui .topbar { display: none }",
    })
);

export default server;
