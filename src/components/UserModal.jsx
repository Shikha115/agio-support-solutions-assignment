import React from "react";
import { userStore } from "../store/user.store";

const UserModal = () => {

  const { selectedUser: user, setSelectedUser } = userStore();

  function onClose() {
    setSelectedUser(null);
  }

  return (
    <div className="fixed inset-0  flex justify-center items-center z-50 animate-fade-in">
      <div
        className="bg-black bg-opacity-75 absolute h-full w-full z-55"
        onClick={onClose}
      />
      <div className="relative z-99 bg-gray-800 rounded-xl p-8 max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl transform transition-all duration-300 ease-out">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-3xl font-bold text-white">{user.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-3xl transition-colors duration-200 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
          >
            x
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-gray-400 block mb-1">Username</strong>
              <span className="text-white text-lg">{user.username}</span>
            </div>
            <div>
              <strong className="text-gray-400 block mb-1">Email</strong>
              <a
                href={`mailto:${user.email}`}
                className="text-blue-400 hover:text-blue-300 hover:underline text-lg"
              >
                {user.email}
              </a>
            </div>
            <div>
              <strong className="text-gray-400 block mb-1">Phone</strong>
              <span className="text-white text-lg">{user.phone}</span>
            </div>
            <div>
              <strong className="text-gray-400 block mb-1">Website</strong>
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 hover:underline text-lg"
              >
                {user.website}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-300 mb-3 text-xl">
              📍 Address
            </h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-300 mb-1">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-gray-300 mb-2">
                {user.address.city}, {user.address.zipcode}
              </p>
              <p className="text-sm text-gray-400">
                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
              </p>
              {/* <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&z=14&output=embed`}
              /> */}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h3 className="font-semibold text-gray-300 mb-3 text-xl">
              🏢 Company
            </h3>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-white font-semibold text-lg mb-2">
                {user.company.name}
              </p>
              <p className="text-gray-300 italic mb-1">
                "{user.company.catchPhrase}"
              </p>
              <p className="text-gray-400 text-sm">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
