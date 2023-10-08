

const SingleCard = ({ cards }) => {
      const { name, image, price, short_description, text, discount } = cards;
      return (
            <div className="px-4 py-8" data-aos="fade-up"
                  data-aos-duration="1500">
                  <div className="bg-[#f4f2f1] mb-6 tracking-wide h-[600px]" >
                        <div className="md:flex-shrink-0 ">
                              <img src={image} alt="mountains" className="w-full h-[344px] object-cover"></img>
                        </div>
                        <div className="px-4 py-2 mt-4">
                              <h2 className="font-bold text-2xl text-gray-800 tracking-normal">{name}</h2>
                              <p className=" mt-3  mr-1">
                                    {short_description}
                              </p>
                        </div>
                        <div className="flex ">
                              <div>
                                    <h3 className="text-xl font-bold ml-4 mt-12 text-[#65c9bb]">{price}.00</h3>
                                    <p className="ml-4 font-bold text-sm">only</p>
                              </div>
                              <div className="flex items-center">
                                    <div className="relative lg:left-16 left-10">
                                          <h3 className="text-xl font-bold ml-4 mt-12 text-[#65c9bb]">{discount}.00</h3>
                                          <p className="ml-4 font-bold text-sm">Discount</p>
                                    </div>
                                    <button className="btn relative lg:left-40 left-28 bg-[#f15b43] hover:border-[#f15b43] hover:text-[#f15b43] hover:bg-[#f15a4300] text-white lg:px-20 px-10 rounded-none top-5 ">
                                          {text}
                                    </button>
                              </div>
                        </div>


                  </div>
            </div>
      );
};

export default SingleCard;