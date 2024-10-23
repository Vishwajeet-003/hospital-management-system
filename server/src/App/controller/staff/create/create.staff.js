import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

// Create a new Staff member
export const createStaff = async (req, res) => {
  const { full_name, specialization, user, password, type, contact_number, email, qualifications, department } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newStaff = await prisma.staff.create({
      data: {
        full_name,
        specialization,
        user,
        password : hashPassword,
        type,
        contact_number,
        email,
        qualifications,
        department,
      },
    });
    console.log(newStaff);
    return res.status(201).json({msg:"success"});
  } catch (error) {
    console.error('Error creating staff:', error.message);
    return res.status(500).json({ error: 'Error creating staff' });
  }
};