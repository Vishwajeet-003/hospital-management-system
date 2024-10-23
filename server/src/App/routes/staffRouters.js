import express from 'express';
import { login, refreshToken } from '../controllers/staffController.js'; // Import controller functions
import { authenticateToken } from '../middleware/authMiddleware.js'; // Import middleware

const router = express.Router();

// Routes
router.post('/login', login);
router.post('/refresh-token', refreshToken);

// Example of a protected route
router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

export default router;
