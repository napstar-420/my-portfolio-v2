import { FaArrowRight } from 'react-icons/fa';
import Input from '@/app/ui/input';
import TextArea from '@/app/ui/textarea';

export default function Contact() {
  return (
    <div className="bg-neutral-700 bg-opacity-40 px-5 py-24 sm:py-28 md:py-40 lg:py-60">
      <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">
        <div>
          <div className="heading-top-line"></div>
          <h2 className="text-display-3">
            Interested in working together?
            <br />
            Let&apos;s chat{' '}
            <FaArrowRight className="inline rotate-90 text-primary md:rotate-0" />
          </h2>
        </div>
        <form className="grid gap-10">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <TextArea placeholder="Your message here" required />
          <button className="primary-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
