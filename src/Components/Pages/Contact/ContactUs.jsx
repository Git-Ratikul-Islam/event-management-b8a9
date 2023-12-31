import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {
      const form = useRef();

      const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_e5dm079', 'template_z4yxp9z', form.current, 'poR7pJGF9-BII_vRb')
                  .then((result) => {
                        console.log(result.text);

                        Swal.fire({
                              position: "top-center",
                              icon: "success",
                              title: "Message sent successfully",
                              showConfirmButton: false,
                              timer: 1500
                        });
                        form.current.reset();

                  }, (error) => {
                        console.log(error.text);
                  });
      };
      return (
            <>
                  <div className="absolute">
                        <h1 className="text-6xl font-medium relative lg:bottom-44 lg:left-[180px] bottom-44 left-[100px] text-white
                  ">Co<span className="text-[#f15b43]">n</span>tact us</h1>

                  </div>
                  <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                                    <div>
                                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                          <input type="email" name="user_email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required></input>
                                    </div>
                                    <div>
                                          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                          <input type="text" name="user_subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                                    </div>
                                    <div className="sm:col-span-2">
                                          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                          <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                    </div>
                                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                              </form>
                        </div>
                  </section>
            </>
      );
};

export default ContactUs;