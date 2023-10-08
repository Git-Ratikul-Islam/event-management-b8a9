import { Link, useLoaderData } from "react-router-dom";
import Cards from "./Cards";


const Home = () => {
      const cards = useLoaderData();
      // console.log(cards);

      return (
            <>
                  <div className="bg-[#fcf2eb]" >
                        <div className="w-5/6  mx-auto">
                              <div className="hero lg:min-h-[75vh] min-h-[]" >
                                    <div className="hero-content flex-col lg:flex-row">
                                          <img src="https://i.ibb.co/Rpw0Wqs/wellness-diet-plan-healthy-living-icon.jpg" className="h-[460px] w-[640px] lg:ml-14 object-cover " />
                                          <div className="lg:ml-24" data-aos="fade-right"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                                                <div className="lg:mb-10 mb-4" >
                                                      <p className="text-[#65c9bb] font-semibold">Upcoming Events</p>
                                                </div>
                                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
                  <div className="bg-[#ffff]">
                        <div className="w-5/6  mx-auto">
                              <div className="hero lg:min-h-[70vh] min-h-[100vh]">
                                    <div className="hero-content flex-col lg:flex-row-reverse absolute">
                                          <img src="https://i.ibb.co/D4nP7Lb/relativecard.png" className="lg:h-[500px] h-[400px]" />

                                          <div className="lg:ml-14 ml-6" data-aos="fade-left"
                                                data-aos-offset="300"
                                                data-aos-easing="ease-in-sine">
                                                <div className="lg:mb-10 mb-4">
                                                      <p className="text-[#65c9bb] font-semibold">Upcoming Events</p>
                                                </div>

                                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                                <div>
                                                      <Link to="/events" className=""><button className="btn btn-primary mt-4 text-white rounded-none bg-[#f15b43] border-none hover:bg-[#7ed957] px-10">All Events</button></Link>
                                                </div>



                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>


                  <Cards cards={cards}></Cards>




            </>

      );
};

export default Home;