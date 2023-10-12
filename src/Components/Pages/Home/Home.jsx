import { Link, useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import RecentEvent from "./RecentEvent/RecentEvent";


const Home = () => {
      const cards = useLoaderData();


      return (
            <>
                  <div className="bg-[#fcf2eb] overflow-hidden" >
                        <div className="w-5/6  mx-auto">
                              <div className="hero lg:min-h-[75vh] min-h-[]" >
                                    <div className="hero-content flex-col lg:flex-row">
                                          <img src="https://i.ibb.co/Rpw0Wqs/wellness-diet-plan-healthy-living-icon.jpg" className="h-[460px] w-[640px] lg:ml-14 object-cover " />
                                          <div className="lg:ml-24 overflow-x-hidden overflow-y-auto" data-aos="fade-up"
                                                data-aos-anchor-placement="bottom-bottom">
                                                <div className="lg:mb-10 mb-4" >
                                                      <p className="text-[#65c9bb] font-semibold">Upcoming Events</p>
                                                </div>
                                                <h1 className="text-5xl font-bold">Health Living</h1>
                                                <p className="py-6">
                                                      Healthy living is a holistic approach to well-being, encompassing physical, mental, and emotional health. It involves maintaining a balanced diet, regular exercise, adequate sleep, and stress management. Hydration, mindfulness, and positive social connections also play crucial roles. Prioritizing these aspects can lead to a happier, longer, and more fulfilling life.</p>
                                                <div className="flex gap-6">
                                                      <div>
                                                            <Link to="/events" className=""><button className="btn btn-primary mt-4 text-white rounded-none bg-[#f15b43] border-none hover:bg-[#7ed957] px-10">All Events</button></Link>
                                                      </div>

                                                      <div>
                                                            <Link to="/service"><a className="btn mt-4 bg-[#f15b43] text-white rounded-none border-none bg-none hover:bg-[#7ed957] px-10">Services</a> </Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
                  <div className="bg-[#ffff] overflow-hidden lg:mt-0 mt-10">
                        <div className="w-5/6  mx-auto">
                              <div className="hero lg:min-h-[70vh] min-h-[100vh]">
                                    <div className="hero-content flex-col lg:flex-row-reverse absolute">
                                          <img src="https://i.ibb.co/D4nP7Lb/relativecard.png" className="lg:h-[500px] h-[400px]" />

                                          <div className="lg:ml-14 ml-6 overflow-x-hidden overflow-y-auto" data-aos="fade-up"
                                                data-aos-anchor-placement="bottom-bottom">
                                                <div className="lg:mb-10 mb-4">
                                                      <p className="text-[#65c9bb] font-semibold">Upcoming Events</p>
                                                </div>

                                                <h1 className="text-5xl font-bold">Relaxing Meditation!</h1>
                                                <p className="py-6 ">
                                                      Relaxing meditation is a practice that promotes inner calm and stress relief. By focusing attention on breath, sensations, or a soothing mantra, it helps clear the mind of clutter and anxiety. Regular sessions improve mental clarity, reduce tension, and enhance overall well-being, making it a valuable tool for relaxation and self-care.</p>

                                                <div>
                                                      <Link to="/events" className=""><button className="btn btn-primary mt-4 text-white rounded-none bg-[#f15b43] border-none hover:bg-[#7ed957] px-10">All Events</button></Link>
                                                </div>



                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>


                  <Cards cards={cards}></Cards>
                  <div className="bg-[#fcf2eb] overflow-hidden" >
                        <div className="w-5/6  mx-auto">
                              <div className="hero lg:min-h-[75vh] min-h-[]" >
                                    <div className="hero-content flex-col lg:flex-row-reverse">
                                          <img src="https://i.ibb.co/Rpw0Wqs/wellness-diet-plan-healthy-living-icon.jpg" className="h-[460px] w-[640px] lg:ml-14 object-cover " />
                                          <div className="lg:ml-24 overflow-x-hidden overflow-y-auto" data-aos="fade-up"
                                                data-aos-anchor-placement="bottom-bottom">
                                                <div className="lg:mb-10 mb-4" >
                                                      <p className="text-[#65c9bb] font-semibold">Upcoming Events</p>
                                                </div>
                                                <h1 className="text-5xl font-bold">Health Living</h1>
                                                <p className="py-6">
                                                      Healthy living is a holistic approach to well-being, encompassing physical, mental, and emotional health. It involves maintaining a balanced diet, regular exercise, adequate sleep, and stress management. Hydration, mindfulness, and positive social connections also play crucial roles. Prioritizing these aspects can lead to a happier, longer, and more fulfilling life.</p>
                                                <div className="flex gap-6">
                                                      <div>
                                                            <Link to="/events" className=""><button className="btn btn-primary mt-4 text-white rounded-none bg-[#f15b43] border-none hover:bg-[#7ed957] px-10">All Events</button></Link>
                                                      </div>

                                                      <div>
                                                            <Link to="/events"><a className="btn mt-4 bg-[#f15b43] text-white rounded-none border-none bg-none hover:bg-[#7ed957] px-10">Services</a> </Link>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
                  <RecentEvent></RecentEvent>





            </>

      );
};

export default Home;