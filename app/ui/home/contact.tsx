import { FaArrowRight } from 'react-icons/fa';
import Section from '@/app/ui/section';
import Input from '@/app/ui/input';
import TextArea from '@/app/ui/textarea';

export default function Contact() {
  return (
    <Section secondaryBg>
      <div className="grid gap-7 md:grid-cols-2">
        <div data-aos="fade-up">
          <div className="heading-top-line"></div>
          <h2 className="text-display-3">
            Interested in working together?
            <br />
            Let&apos;s chat{' '}
            <FaArrowRight className="inline rotate-90 text-primary md:rotate-0" />
          </h2>
        </div>
        <form className="grid gap-10" data-aos="fade-up">
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <TextArea placeholder="Your message here" required />
          <button className="primary-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
}
