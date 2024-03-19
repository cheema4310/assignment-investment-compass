const { z } = require('zod');

// Creating Register Schema
const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name must be 3 characters long' })
    .max(255, { message: 'Name must be no more than 255 chars' }),
  email: z.string().trim().email({ message: 'Invalid Email' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be 8 characters long' }),
});

// Creating Login Schema
const loginSchema = z.object({
  email: z.string().trim().email({ message: 'Invalid Email' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be 8 characters long' }),
});

module.exports = { registerSchema, loginSchema };
