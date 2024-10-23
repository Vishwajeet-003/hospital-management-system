import prisma from '../../db/index.js';
import bcrypt from 'bcrypt';
import { generateAccessToken, generateRefreshToken } from '../../utils/jwtUtils.js';
import jwt from 'jsonwebtoken';

// Staff login
export const login = async (req, res) => {
    const { email, password } = req.body;

    // Find staff by email
    const staff = await prisma.staff.findUnique({
        where: { email: email },
    });

    console.log(staff);
    console.log(staff.password);

    if (!staff || !(await bcrypt.compare(password, staff.password))) {
        return res.status(403).json({ message: 'Invalid credentials' });
    }

    // Generate tokens
    const accessToken = generateAccessToken({ email: staff.email, staffId: staff.Staff_id });
    const refreshToken = generateRefreshToken({ email: staff.email, staffId: staff.Staff_id });

    // Update refresh token in database (optional)
    await prisma.staff.update({
        where: { Staff_id: staff.Staff_id },
        data: { refreshToken: refreshToken },
    });

    return res.json({ accessToken, refreshToken });
};

// Refresh token
export const refreshToken = async (req, res) => {
    const { token } = req.body;

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_REFRESH_SECRET, async (err, staff) => {
        if (err) return res.sendStatus(403);

        // Find staff by email
        const foundStaff = await prisma.staff.findUnique({
            where: { email: staff.email },
        });

        if (!foundStaff || foundStaff.refreshToken !== token) {
            return res.sendStatus(403);
        }

        const accessToken = generateAccessToken({ email: staff.email, staffId: staff.Staff_id });
        res.json({ accessToken });
    });
};
