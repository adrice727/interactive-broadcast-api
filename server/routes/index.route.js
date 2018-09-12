import express from 'express';
import messageRoutes from './message.route';
import adminRoutes from './admin.route';
import authRoutes from './auth.route';
import eventRoutes from './event.route';

const router = express.Router(); // eslint-disable-line new-cap
// mount admin routes at /admin
router.use('/message', messageRoutes);
router.use('/admin', adminRoutes);
router.use('/auth', authRoutes);
router.use('/event', eventRoutes);

export default router;
