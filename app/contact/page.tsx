import Section from '@/app/ui/section';
import Input from '@/app/ui/input';
import TextArea from '@/app/ui/textarea';

export default function Contact() {
  return (
    <main>
      <Section>
        <div className="heading-top-line large"></div>
        <h1 className="text-display-2 mb-8 md:mb-12">
          Let&apos;s work together
        </h1>
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-heading-2 mb-1">Get in touch with me</h2>
            <p>
              I am currently available for new projects and opportunities. I
              love to work with new people and learn new things. If you have a
              project in mind, or just want to say hi, feel free to get in
              touch.
            </p>
          </div>
          <div>
            <form className="grid gap-10 rounded-2xl bg-neutral-700 px-8 py-14 md:px-12 md:py-20 lg:px-14">
              <Input type="text" placeholder="Enter your name" required />
              <Input type="email" placeholder="Enter your email" required />
              <TextArea placeholder="Enter your message" required />
              <button className="primary-btn">Submit</button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
