import express from 'express';

const router = express.Router();

//VALIDATE
import Validate from '../validate/user.validate.js';

//CONTROLLERS
import Controller from '../controllers/user.controller.js';

router.post('/register',Validate, Controller);

export default router;