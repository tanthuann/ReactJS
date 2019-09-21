import express from 'express';

const router = express.Router();

//VALIDATE
import Validate from '../validate/auth.validate.js';

//CONTROLLERS
import Controller from '../controllers/auth.controller.js';

router.post('/login', Validate, Controller);

export default router;