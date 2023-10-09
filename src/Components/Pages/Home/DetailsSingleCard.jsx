
import { Link } from 'react-router-dom';

const DetailsSingleCard = ({ card }) => {
      const { name, image, price, short_description, text, discount, id, description } = card || {};
      return (
            <div className="hero min-h-screen  ">
                  <div className=" lg:flex-row bg-[#f4f2f1]  border border-[#f4f2f1] flex flex-col md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                        <img src={image} className='h-[550px] w-[600px] object-cover' />

                        <div className='lg:ml-4 mt-4'>
                              <h1 className="text-5xl ml-3 font-bold">{name}</h1>
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

                                    </div>
                              </div>
                              <div className='lg:w-[600px] ml-4 mt-10'>
                                    <p>{description}</p>
                              </div>
                              <div className='flex justify-between p-3 mt-[42px]'>
                                    <div>
                                          <Link to="/">
                                                <button className="btn  bg-[#f15b43] hover:border-[#f15b43] hover:text-[#f15b43] hover:bg-[#f15a4300] text-white lg:px-20 px-10 rounded-none top-5 " data-tip="Book now to see details">
                                                      Go Home
                                                </button></Link>
                                    </div>
                                    <div className=''>
                                          <Link to="/">
                                                <button className="btn  bg-[#f15b43] hover:border-[#f15b43] hover:text-[#f15b43] hover:bg-[#f15a4300] text-white lg:px-20 px-10 rounded-none top-5 ">
                                                      Other Events
                                                </button></Link>
                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default DetailsSingleCard;