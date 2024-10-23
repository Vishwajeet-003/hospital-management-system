import express from 'express';
import AllRoutes from './router/index.js'; // Add .js extension for local file import
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
// import AuthRoutes from './App/routes/auth.routes.js';
import dotenv from 'dotenv';
import AuthRoutes from './routes/auth.routes.js';



dotenv.config();

const SoftwareApp = express();

// Middleware
SoftwareApp.use(express.json());
SoftwareApp.use(cookieParser());
SoftwareApp.use(bodyParser.urlencoded({ extended: false }));
SoftwareApp.use(express.json());

// Use all routes under the /api path
SoftwareApp.use('/api', AllRoutes);


// Export the app
export default SoftwareApp;
