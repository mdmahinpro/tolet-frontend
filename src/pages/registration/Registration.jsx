import { useEffect, useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import toletImg from "../../assets/tolet2.jpg";
import GoogleSignIn from "../../components/shared/GoogleSignIn";
import auth from "../../firebase/firebase.config";

export default function Registration() {
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, error] =
    useCreateUserWithEmailAndPassword(auth);
  const userInfo = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo[0]) {
      navigate("/");
    }
    if (error) {
      console.log(error.message);
    }
  }, [navigate, error, userInfo]);

  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    userInfo.displayName = name;
    // const password = form.password.value;
    const newUser = { name, email, password };
    createUserWithEmailAndPassword(email, password);
    console.log(newUser);
    setShowToast(true);

    console.log("user created successfully");
  };
  return (
    <>
      <div className="flex min-h-full flex-1">
        {showToast && (
          <div className="toast toast-end">
            <div className="alert alert-success">
              <span>You have been registered successfully.</span>
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register an account
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        className="block px-2 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        onChange={(e) => {
                          setPassword(e.target.value);
                          const passwordLength = e.target.value.length;
                          const errorMessage = document.querySelector(
                            ".password-error-message"
                          );
                          if (passwordLength < 6) {
                            errorMessage.style.display = "block";
                          } else {
                            errorMessage.style.display = "none";
                          }
                        }}
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <p
                        className="mt-2 text-sm text-red-600 password-error-message"
                        style={{ display: "none" }}
                      >
                        Password must be at least 6 characters long.
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Register
                    </button>
                  </div>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                      to="/login"
                    >
                      Login
                    </Link>
                  </p>
                </form>
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6  gap-4">
                  <GoogleSignIn />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={toletImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
