'use server';

import { revalidatePath } from 'next/cache';
import dbConnect from '@/app/lib/dbConnect';
import Message from '@/app/models/message';
import { MessageSchema } from '@/app/lib/schemas';
import { idGenerator } from '@/app/helpers/id-generator';
import { redirect } from 'next/navigation';
import { Routes } from '@/app/constants/routes';

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
      message: 'Database Error: Failed to Create Message.',
    };
  }

  revalidatePath('/dashboard/messages');
  redirect(Routes.THANKS);

  return {
    message: 'Message Created Successfully.',
  };
}
