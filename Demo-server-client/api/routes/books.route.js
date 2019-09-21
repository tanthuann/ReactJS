import express from 'express';

import controller from '../controllers/books.controller.js';

import verifyTokenRoute from '../../middlewares/verifyToken.middleware.js';

const router = express.Router();

router.get('/',verifyTokenRoute, controller.viewBooks);

export default router;
