import { Link, NavLink, useLocation } from "react-router-dom";
import './Navbar.css';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {

      const { user, logOutUser } = useContext(AuthContext);
      const handleLogOut = () => {
            logOutUser()
                  .then(() => {
                        console.log('user logout');
                  })
                  .catch(error => console.error(error));
      };


      const location = useLocation();


      // Defining a function to get the class name based on the current route
      const getBackgroundClass = () => {
            if (location.pathname === "/events") {
                  return "events";
            } else if (location.pathname === "/service") {
                  return "service";
            } else if (location.pathname === "/contactUs") {
                  return "contactUs";
            } else if (location.pathname === "/login") {
                  return "login";
            } else if (location.pathname === "/signUp") {
                  return "login";
            } else if (location.pathname === "/*") {
                  return "login";
            }
            else {
                  return ""; // Default background class

            }

      };

      const backgroundClass = getBackgroundClass();


      const links = <>

            <li className="text-[16px] font-semibold"><NavLink to="/" >Home</NavLink></li>
            <li className="text-[16px] font-semibold"><NavLink to="/events" >Events</NavLink></li >
            <li className="text-[16px] font-semibold"><NavLink to="/service" >Services</NavLink></li >
            <li className="text-[16px] font-semibold"><NavLink to="/contactUs">Contact us</NavLink></li >
            {/* <li className="text-[16px] font-semibold"><NavLink to="/contactUs"></NavLink></li > */}



            {/* <li className="text-[16px] "><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#f15b43]" : ""}>Home</NavLink></li>
            <li className="text-[16px]"><NavLink to="/events" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#f15b43]" : ""}>Events</NavLink></li>
            <li className="text-[16px]"><NavLink to="/service" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#f15b43]" : ""}>Service</NavLink></li>
            <li className="text-[16px]"><NavLink to="/contactUs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-[#f15b43]" : ""}>Contact Us</NavLink></li> */}


      </>;

      const shouldShowContent = !["/events", "/service", "/contactUs", "/login", "/signUp", "/*"].includes(
            location.pathname
      );



      return (
            <>



                  <div className={`navbar-container ${backgroundClass}`}>
                        <div className="navbar  md:w-5/6 md:mx-auto ">
                              <div className="navbar-start">
                                    <div className="dropdown">
                                          <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                          </label>
                                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-base-100 rounded-box w-52">
                                                {links}
                                          </ul>
                                    </div>


                                    <img src="https://i.ibb.co/wM6VFgt/Healthy-Life-Logodsalkgfalsdkgkj.png" className="h-[76px] w-[200px] mt-2" alt="" />
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1 text-white " >
                                          {links}
                                    </ul>
                              </div>
                              <div className="navbar-end ">
                                    {user && <span>{user.email}</span>}

                                    {user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-4">
                                          <div className="w-10 rounded-full">
                                                <img src="https://i.ibb.co/J7wT95S/logan-weaver-lgnwvr-XCkc8-s7-FA-unsplash.jpg" />


                                          </div>

                                    </label> : ""}
                                    <div>
                                          <NavLink to="/login">
                                                {
                                                      user ? <button onClick={handleLogOut} className="btn btn-sm bg-[#f15b43] border-none text-white">Log out</button> : <button className="btn btn-sm bg-[#65c9bb] border-none text-white">Log in</button>
                                                }
                                          </NavLink>
                                    </div>
                              </div>
                        </div >
                  </div>
                  {shouldShowContent && (
                        <div className="absolute ">
                              {/* Your content block */}
                              <div className="relative md:bottom-[530px] bottom-[400px] md:left-96 left-10 text-white md:space-y-10 space-y-7">
                                    <h1 className="md:text-6xl text-4xl font-bold ">
                                          Celebrate Life<br />
                                          Explore Health also <br /> Wellness Events Now!
                                    </h1>
                                    <p className="md:text-xl text-white ">
                                          Are you ready to take charge of your well-being and <br /> embark on
                                          a path to a healthier, happier you?{" "}
                                    </p>
                                    <Link to="/login">
                                          <button className="btn bg-[#65c9bb] border-[#65c9bb] text-white px-12 rounded-none hover:bg-[#65c9bc00] mt-10">

                                                Check Events
                                          </button>
                                    </Link>

                              </div >

                        </div >
                  )}












            </>
      );
};

export default Navbar;