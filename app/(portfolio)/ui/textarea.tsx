'use client';

import { useFormStatus } from 'react-dom';

interface TextAreaProps {
  placeholder: string;
  required?: boolean;
}

export default function Input({
  placeholder,
  required,
  ...props
}: TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const { pending } = useFormStatus();

  return (
    <textarea
      placeholder={placeholder}
      required={required}
      rows={5}
      {...props}
      disabled={pending}
      className="text-400 inline-block w-full border-b-2 border-b-neutral-500 bg-transparent pb-4 font-bold text-neutral-100 transition-colors duration-200 ease-in-out placeholder:text-neutral-500 hover:border-b-neutral-100 focus:border-b-neutral-100 focus:outline-none"
    ></textarea>
  );
}
