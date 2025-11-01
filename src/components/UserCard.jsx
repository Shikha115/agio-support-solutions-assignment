import { userStore } from "../store/user.store";

const UserCard = ({ user, onClick }) => {
  const { favouriteUsers, toggleFavourite } = userStore();

  const isFavourited = favouriteUsers?.includes(user.id);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    toggleFavourite(user.id);
  };

  return (
    <div
      className="bg-gray-800 shadow-lg rounded-lg p-6 xl:p-4 border border-gray-700 hover:shadow-xl hover:border-gray-600 transition-all duration-300 cursor-pointer transform hover:scale-105 relative"
      onClick={onClick}
    >
      <button
        onClick={handleHeartClick}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
        aria-label={isFavourited ? "Unlike" : "Like"}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isFavourited ? "red" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-colors duration-200 ${
            isFavourited ? "text-red-500" : "text-gray-400"
          }`}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <h3 className="text-xl font-bold text-white mb-2">{user.name}</h3>
      <p className="text-gray-300">
        <strong className="text-gray-400">Email:</strong>{" "}
        <a
          href={`mailto:${user.email}`}
          className="text-blue-400 hover:text-blue-300 hover:underline"
        >
          {user.email}
        </a>
      </p>
    </div>
  );
};

export default UserCard;
