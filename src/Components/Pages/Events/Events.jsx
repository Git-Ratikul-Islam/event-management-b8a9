import { RiMentalHealthFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
const Events = () => {
      return (
            <div className="container my-24 mx-auto md:px-6">
                  {/* <!-- Section: Design Block --> */}
                  <section className="mb-32 text-center md:text-left">
                        <h2 className="mb-12 text-center text-3xl font-bold">Upcoming Events</h2>

                        <div data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom" className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                              <div className="mb-6 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                          data-te-ripple-init data-te-ripple-color="light">
                                          <img src="https://i.ibb.co/RpCD0WK/mental-health-care-sketch-diagram.jpg" className="w-full" alt="Louvre" />
                                          <a href="#!">
                                                <div
                                                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                          </a>
                                    </div>
                              </div>

                              <div>
                                    <h3 className="mb-3 text-2xl font-bold">Mental Health</h3>
                                    <div
                                          className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">

                                          <RiMentalHealthFill className="mr-2 h-5 w-5"></RiMentalHealthFill>

                                          Health
                                    </div>
                                    <p className="mb-6 text-[#65c9bb]">
                                          <small>Published <u>13.01.2022</u> by
                                                <a href="#!">Anna Maria Doe</a></small>
                                    </p>
                                    <p className="text-black">
                                          A mental health event is a gathering or initiative focused on raising awareness, reducing stigma, and promoting mental well-being. These events often include workshops, discussions, and activities aimed at fostering understanding and support for individuals facing mental health challenges. They play a crucial role in advocating for mental health awareness and support.
                                    </p>
                              </div>
                        </div>

                        <div data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom" className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                              <div className="mb-6 md:order-2 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                          data-te-ripple-init data-te-ripple-color="light">
                                          <img src="https://i.ibb.co/ypVZDhs/6888430.jpg" className="w-full" alt="Louvre" />
                                          <a href="#!">
                                                <div
                                                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                          </a>
                                    </div>
                              </div>

                              <div className="md:order-1">
                                    <h3 className="mb-3 text-2xl font-bold">World Health Day</h3>
                                    <div
                                          className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">

                                          <GiHealthNormal className='className="mr-2 h-4 w-4"'></GiHealthNormal>

                                          Health

                                    </div>
                                    <p className="mb-6 text-[#65c9bb]">
                                          <small>Published <u>12.01.2022</u> by
                                                <a href="#!">Halley Frank</a></small>
                                    </p>
                                    <p className="text-black">
                                          World Health Day is celebrated annually on April 7th to raise awareness about global health issues and promote access to healthcare for all. It highlights the importance of health equity and encourages governments and individuals to take actions to improve public health, making the world a healthier place for everyone.
                                    </p>
                              </div>
                        </div>

                        <div data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom" className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                              <div className="mb-6 md:mb-0">
                                    <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                          data-te-ripple-init data-te-ripple-color="light">
                                          <img src="https://i.ibb.co/1sZMWyx/pexels-prasanth-inturi-1051838.jpg" className="w-full" alt="Louvre" />
                                          <a href="#!">
                                                <div
                                                      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                                </div>
                                          </a>
                                    </div>
                              </div>

                              <div>
                                    <h3 className="mb-3 text-2xl font-bold">Yoga Event</h3>
                                    <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
                                          <GrYoga className="mr-2 h-5 w-5"></GrYoga>


                                          Health
                                    </div>
                                    <p className="mb-6 text-[#65c9bb]">
                                          <small>Published <u>10.01.2022</u> by
                                                <a href="#!">Joe Svan</a></small>
                                    </p>
                                    <p className="text-black">

                                          Yoga events are gatherings that celebrate the ancient practice of yoga. They offer a platform for people to come together and participate in yoga classes, workshops, and meditation sessions. These events promote physical and mental well-being, stress relief, and a sense of community, fostering a holistic approach to health and wellness.
                                    </p>
                              </div>
                        </div>
                  </section>
                  {/* <!-- Section: Design Block --> */}
            </div>
      );
};

export default Events;