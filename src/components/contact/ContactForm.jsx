import { FloatingLabel, Textarea } from "flowbite-react";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="leading-loose">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
          <p className="font-general-medium text-primary-dark dark:text-primary-light text-3xl w-fit mx-auto mb-8">
            Contact Form
          </p>
          <div className="flex flex-col gap-4">
            <FloatingLabel variant="filled" label="Name" type="text" />
            <FloatingLabel variant="filled" label="Email" type="email" />
            <FloatingLabel variant="filled" label="Subject" type="text" />
            <Textarea
              className="rounded-bl-none rounded-br-none"
              variant="filled"
              cols="14"
              rows="6"
              placeholder="Write Your Message Here"
              aria-label="Message"
            ></Textarea>
            <button className="text-xl text-indigo-700 dark:text-slate-100 hover:text-slate-100 w-full p-2 py-3 border-2 border-indigo-600 transition-all duration-500 hover:bg-indigo-600 rounded-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
