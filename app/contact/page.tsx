import Section from '@/app/ui/section';
import ContactForm from '@/app/ui/contact-form';

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
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
