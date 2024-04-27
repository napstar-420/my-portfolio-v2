'use client';

import { useFormStatus } from 'react-dom';
import { useFormState } from 'react-dom';
import { createMessage } from '@/app/actions';
import Input from '@/app/ui/input';
import TextArea from '@/app/ui/textarea';
import SubmitButton from '@/app/ui/submit-btn';

const initialState = {
  errors: {},
  message: '',
};

export default function ContactForm() {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createMessage, initialState);

  return (
    <form
      action={formAction}
      className="grid gap-10 rounded-2xl bg-neutral-700 px-8 py-14 md:px-12 md:py-20 lg:px-14"
    >
      <div>
        <Input
          type="text"
          placeholder="Enter your name"
          name="name"
          required
          minLength={2}
        />
        <p aria-live="polite" className="mt-1 text-red-500">
          {state?.errors?.name}
        </p>
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <p aria-live="polite" className="mt-1 text-red-500">
          {state?.errors?.email}
        </p>
      </div>
      <div>
        <TextArea
          placeholder="Enter your message"
          name="message"
          required
          minLength={10}
        />
        <p aria-live="polite" className="mt-1 text-red-500">
          {state?.errors?.message}
        </p>
      </div>
      <p aria-live="polite" className="mt-1 text-red-500">
        {state?.message}
      </p>
      <SubmitButton />
    </form>
  );
}
