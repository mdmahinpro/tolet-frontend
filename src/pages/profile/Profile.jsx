import { useState } from "react";
import {
  useAuthState,
  useUpdateEmail,
  useUpdatePassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

function Profile() {
  const [user] = useAuthState(auth);
  const [updateEmail] = useUpdateEmail(auth);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [updateProfile] = useUpdateProfile(auth);
  const [updatePassword] = useUpdatePassword(auth);
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (password) {
        await updatePassword(password);
        alert("Updated password");
      }

      if (displayName !== user.displayName || photoURL !== user.photoURL) {
        await updateProfile({ displayName, photoURL });
        alert("Updated profile");
      }

      if (user.email !== user.email) {
        await updateEmail(user.email);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 px-4 my-8 sm:px-6 md:grid-cols-3 lg:px-8">
      <div className="text-gray-800">
        <h2 className="text-base font-semibold leading-7 ">Update Profile</h2>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Update your name, profile photo and password associated with your
          account.
        </p>
      </div>

      <form className="md:col-span-2" onSubmit={handleUpdate}>
        <div className="grid grid-cols-1  gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium leading-6 text-gray-800"
            >
              Photo URL
            </label>
            <div className="mt-2">
              <input
                id="photoURL"
                name="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                type="text"
                className="block w-full rounded-md border-0 bg-teal-600/5 py-1.5 shadow-sm ring-1 ring-inset ring-teal-900/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-800"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                // autoComplete="name"
                className="block w-full rounded-md border-0 bg-teal-600/5 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-teal-900/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-800"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                value={user?.email || ""}
                disabled
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 bg-teal-600/5 py-1.5 shadow-sm ring-1 ring-inset ring-teal-900/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 "
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 bg-teal-600/5 py-1.5  shadow-sm ring-1 ring-inset ring-teal-900/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-md bg-teal-700 text-white px-3 py-2 text-sm font-semibold  shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
