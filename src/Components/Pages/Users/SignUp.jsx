
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const SignUp = () => {
      const { createUser } = useContext(AuthContext);
      console.log(createUser);



      const handleRegister = e => {
            e.preventDefault();
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(name, email, password);

            // create user in firebase
            createUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        e.target.reset();
                  })
                  .catch(error => console.error(error));
      };




      return (
            <div>
                  <section className="bg-[#ffffff] ">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[700px] lg:py-0">

                              <div className="w-full relative bottom-80 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8  ">
                                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Create and account
                                          </h1>
                                          <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                                <div>
                                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                      <input type="name" required name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" ></input>
                                                </div>

                                                <div>
                                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                                      <input type="email" required name="email" id="email" placeholder="yourname@example.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                                                </div>
                                                <div>
                                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                      <input type="password" required name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                                                </div>

                                                <div className="flex items-start">
                                                      <div className="flex items-center h-5">
                                                            <input id="terms" aria-describedby="terms" required type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" ></input>
                                                      </div>
                                                      <div className="ml-3 text-sm">
                                                            <label className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                                      </div>
                                                </div>
                                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                      Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/login">Login here</Link></a>
                                                </p>
                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default SignUp;