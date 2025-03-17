import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import express from 'express';
import swaggerUi from "swagger-ui-express";

const swaggerDocument = require('../swagger.json');
const router = express.Router();
router.use("/api-docs", swaggerUi.serve);
router.use("/api-docs", swaggerUi.setup(swaggerDocument));

export default router;