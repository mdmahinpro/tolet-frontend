import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

const initialCodeString = `
import React from 'react';

const WelcomeMessage = () => {
  return (
    <div>
      <h1>Welcome, Mr {name}</h1>
      <p>Thanks for joining To-Let.</p>
    </div>
  );
};

export default WelcomeMessage;
`;

function Hero() {
  const [text, setText] = useState("");

  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const name = user.displayName;

      // Replace the placeholder {name} with the actual user name
      const codeString = initialCodeString.replace("{name}", name);

      let index = 0;
      const interval = setInterval(() => {
        setText(codeString.slice(0, index));
        index++;
        if (index > codeString.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [user]);

  return (
    <div className="bg-white ">
      <div className="relative  isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto flex justify-center items-center max-w-7xl pb-24 pt-10 sm:pb-32 ">
          <div className="sm:mt-12  md:mx-auto md:max-w-3xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute  inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg w-full md:rounded-3xl">
              <div className="bg-teal-800 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px  -z-10 ml-10 w-[100%] skew-x-[-20deg] bg-indigo-400 opacity-20 ring-1 ring-inset ring-white md:ml-10 lg:ml-20"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            WelcomeMessage.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            App.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pb-14 pt-6 text-white">
                        <pre className="whitespace-pre-wrap">
                          {user ? (
                            <code className="text-sm">{text}</code>
                          ) : (
                            "Please Login First"
                          )}
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}

export default Hero;
