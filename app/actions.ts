'use server';

import { revalidatePath } from 'next/cache';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import dbConnect from '@/app/lib/dbConnect';
import Message from '@/app/models/message';
import { MessageSchema } from '@/app/lib/schemas';
import { idGenerator } from '@/app/helpers/id-generator';
import { redirect } from 'next/navigation';
import { Routes } from '@/app/constants/routes';

dotenv.config();

const RECEIVER_EMAIL_ADDR = process.env.RECEIVER_EMAIL_ADDR;
const SENDER_EMAIL_ADDR = process.env.SENDER_EMAIL_ADDR;
const SENDER_EMAIL_PASS = process.env.SENDER_EMAIL_PASS;

const CreateMessage = MessageSchema.omit({
  id: true,
  repliedAt: true,
  createdAt: true,
});

export async function createMessage(prevState: any, formData: FormData) {
  const validatedFields = CreateMessage.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Message.',
    };
  }

  // Prepare data for insertion into the database
  const { name, email, message } = validatedFields.data;
  const _id = idGenerator();

  try {
    await dbConnect();
    await Message.create({ _id, name, email, message });
  } catch (error) {
    console.log(error);
    return {
      message: 'Failed to send message. Please try again later',
    };
  }

  // Send email notification to the site owner
  const subject = `New Message from ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  sendEmail(subject, body);

  // Redirect to the thanks page
  revalidatePath('/dashboard/messages');
  redirect(Routes.THANKS);
}

async function sendEmail(subject: string, body: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SENDER_EMAIL_ADDR,
      pass: SENDER_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: SENDER_EMAIL_ADDR,
    to: RECEIVER_EMAIL_ADDR,
    subject: subject,
    text: body,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}
