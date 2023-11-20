import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object({
  from_name: Yup.string().max(30, "Name too long").required("* Name required"),
  from_email: Yup.string().email("Invalid email").required("* Email required"),
  message: Yup.string()
    .required("Write a message")
    .max(10000, "Message too long")
    .min(10, "Message too short"),
});

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitterName, setSubmitterName] = useState("");

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          values,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
            setSubmitterName(values.from_name);
            formikHelpers.setSubmitting(false);
            formikHelpers.resetForm();
          },
          (error) => {
            console.log(error.text);
            formikHelpers.setSubmitting(false);
          }
        );
    },
  });

  if (isSubmitted) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Thank You, {submitterName}!</h2>
          <p>
            Your message has been successfully sent. We will get back to you
            soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="flex items-center justify-center h-screen bg-gray-100"
    >
      <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-5/12">
          <img
            src="/img/Electrical-image.jpg"
            alt="Electrical services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="w-full md:w-1/2 px-6 py-10 md:px-12 md:py-12 mb-4"
        >
          {/* Name Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from_name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from_name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_name}
            />
            {formik.touched.from_name && formik.errors.from_name && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.from_name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="from_email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="from_email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.from_email}
            />
            {formik.touched.from_email && formik.errors.from_email && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.from_email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              rows={7}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-xs italic">
                {formik.errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-oe-blue hover:bg-oe-orange transition duration-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
