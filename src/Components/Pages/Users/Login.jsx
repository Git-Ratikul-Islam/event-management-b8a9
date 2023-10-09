import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from 'sweetalert2';
import { signInWithPopup } from "firebase/auth";


const Login = () => {

      const { logInUser, signInWithGoogle } = useContext(AuthContext);
      const navigate = useNavigate();

      const handleLogin = e => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            console.log(email, password);

            const passwordRegex = /^(?=.*[A-Z])(?=.*[@#$%^&*()_+{}\[\]:;<>,.?/~\\-]).*$/;
            if (!passwordRegex.test(password)) {
                  Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password must contain at least one capital letter and one special character',
                  });
                  e.target.reset();
                  return;
            }

            logInUser(email, password)
                  .then(result => {
                        console.log(result.user);
                        e.target.reset();
                        Swal.fire(
                              'login Success!',
                              'User loged in succesfully!',
                              'success'
                        );
                        navigate('/');

                  })
                  .catch(error => console.error(error));

      };


      const handleGoogleSignIn = () => {
            signInWithGoogle()
                  .then(result => {
                        console.log(result.user);
                        Swal.fire(
                              'login Success!',
                              'User loged in succesfully!',
                              'success'
                        );

                        navigate('/');
                  })
                  .catch(error => {
                        console.error(error);
                        Swal.fire({
                              icon: 'error',
                              title: 'Oops...',
                              text: 'Something went wrong try again!',
                        });
                  });

      };





      return (
            <div>
                  <section className="">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h- lg:py-0 relative bottom-56">
                              <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                              </a>
                              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                                Sign in to your account
                                          </h1>
                                          <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                                                <div>
                                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                      <input type="email" name="email" id="email" required className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"></input>
                                                </div>
                                                <div>
                                                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                                      <input type="password" name="password" id="password" required placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                      <div className="flex items-start">

                                                            <div className="ml-3 text-sm">
                                                                  <label className="text-gray-500 dark:text-gray-300">Forgot Password?</label>
                                                            </div>
                                                      </div>
                                                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>

                                                </div>

                                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                                <div className="px-6 sm:px-0 max-w-sm">
                                                      <button onClick={handleGoogleSignIn} type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                                </div>
                                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/signUp">Sign up</Link></a>
                                                </p>

                                          </form>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );

};
export default Login;