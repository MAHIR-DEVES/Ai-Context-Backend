import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';

import { ChatbotRoutes } from '../modules/chatbot/chatbot.route';

const router = Router();

router.use('/users', UserRoute);
router.use('/chatbot', ChatbotRoutes);

export default router;
