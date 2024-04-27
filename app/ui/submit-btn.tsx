'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className="primary-btn">
      {pending ? 'Sending...' : 'Send message'}
    </button>
  );
}
