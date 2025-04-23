
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import { toast } from "sonner";

const subjects = [
  "General Inquiry",
  "Admissions",
  "Collaboration",
  "Support",
  "Other"
];

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, reset } = useForm<ContactFormData>();
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(data: ContactFormData) {
    // For demo: just show a toast; in a real app, integrate backend here.
    toast.success("Message sent successfully!", { description: "We'll get back to you soon." });
    reset();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">Contact Us</h1>
          <form
            className="bg-white rounded-lg shadow p-6 space-y-6"
            aria-label="Contact Form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            ref={formRef}
          >
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-800">
                Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: true, minLength: 2 })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${errors.name ? "border-rose-500" : "border-gray-300"}`}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                required
              />
              {errors.name && (
                <span className="text-rose-600 text-sm mt-1 block" id="name-error">
                  Please enter your name (at least 2 characters).
                </span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-800">
                Email <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${errors.email ? "border-rose-500" : "border-gray-300"}`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                required
              />
              {errors.email && (
                <span className="text-rose-600 text-sm mt-1 block" id="email-error">
                  Please enter a valid email address.
                </span>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 font-semibold text-gray-800">
                Subject
              </label>
              <select
                id="subject"
                {...register("subject")}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 border-gray-300"
                aria-label="Select subject"
                defaultValue={subjects[0]}
              >
                {subjects.map((s) => (
                  <option value={s} key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-800">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: false })}
                className="w-full border rounded px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-emerald-500 border-gray-300"
                aria-label="Your message"
                placeholder="How can we assist you?"
              ></textarea>
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                aria-label="Submit contact form"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
              {isSubmitSuccessful && (
                <div className="mt-4 text-emerald-700 text-center" aria-live="polite">
                  Thank you for contacting us!
                </div>
              )}
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
