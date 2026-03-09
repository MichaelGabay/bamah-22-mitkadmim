import { Router } from 'express';
import { getMe } from '../controllers/user.controller.js';
import { auth } from '../middleware/auth.middleware.js';
import { catchAsync } from '../utils/catchAsync.js';

const router = Router();

router.get('/me', auth, catchAsync(getMe));

export default router;
