import express from 'express';
import { login, refreshToken } from '../controller/staff/auth.js';

const AuthRoutes = express.Router();

AuthRoutes.post('/login', login);
AuthRoutes.post('/refresh-token', refreshToken);

export default AuthRoutes;
