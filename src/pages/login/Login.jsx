import { useEffect, useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/tolet.jpg";
import GoogleSignIn from "../../components/shared/GoogleSignIn";
import auth from "../../firebase/firebase.config";

export default function Login() {
  const userInfo = useAuthState(auth);
  const [signInWithEmailAndPassword, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo[0]) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    // const password = form.password.value;
    signInWithEmailAndPassword(email, password);

    fetch("https://tolet-backend-7e9u.onrender.com/jwt", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token));
  };

  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-teal-600 hover:text-teal-500"
                >
                  Register
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form onSubmit={handleSignIn} className="space-y-6">
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
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
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
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                      />
                      <p
                        className="mt-2 text-sm text-red-600 password-error-message"
                        style={{ display: "none" }}
                      >
                        Password must be at least 6 characters long.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-teal-600 hover:text-teal-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              {error && <p>{error?.message}</p>}
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
            src={loginImg}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
