const { z } = require('zod');

// Creating Contact Form Schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { message: 'Name must be 3 characters long' })
    .max(255, { message: 'Name must be no more than 255 chars' }),
  email: z.string().trim().email({ message: 'Invalid Email' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be 10 characters long' }),
});

module.exports = { contactSchema };
