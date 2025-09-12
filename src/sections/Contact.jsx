import AnimatedSection from "../components/AnimatedSection";
import config from "../config";

export default function Contact() {
  const Button = ({ children, type = "submit", className }) => (
    <button
      type={type}
      className={`inline-block bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-white transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <AnimatedSection id="contact" className="py-20 bg-gray-50 dark:bg-black/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Have a question or want to collaborate? Send me a message at{" "}
          <a
            href={`mailto:${config.email}`}
            className="text-gray-900 dark:text-gray-100 font-semibold hover:underline"
          >
            {config.email}
          </a>{" "}
          or use the form below.
        </p>

        {/* Replace your_form_id with your Formspree form ID */}
        <form
          action={`https://formspree.io/f/xldwvboa`}
          method="POST"
          className="max-w-xl mx-auto text-left"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>
          <div className="text-center">
            <Button className="w-full md:w-auto">Send Message</Button>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
