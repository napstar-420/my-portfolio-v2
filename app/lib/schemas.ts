import { z } from 'zod';

export const MessageSchema = z.object({
  id: z.string(),
  name: z
    .string({
      invalid_type_error: 'Please enter your name.',
    })
    .min(2, {
      message: 'Name must be at least 2 characters long.',
    }),
  email: z
    .string({
      invalid_type_error: 'Please enter your email.',
    })
    .email({
      message: 'Please enter a valid email address.',
    }),
  message: z
    .string({
      invalid_type_error: 'Please enter a message.',
    })
    .min(10, {
      message: 'Message must be at least 10 characters long.',
    }),
  createdAt: z.date({
    invalid_type_error: 'Please enter a valid date.',
  }),
  repliedAt: z.boolean({
    invalid_type_error: 'Please enter a valid boolean.',
  }),
});
