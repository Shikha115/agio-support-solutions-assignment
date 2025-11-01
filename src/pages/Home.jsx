import { Suspense, useEffect, useState, lazy } from "react";
import { useGetAllUsers } from "../services/user.service";
import { userStore } from "../store/user.store";
import { InputStore } from "../store/inputs.store";
const UserCard = lazy(() => import("../components/UserCard"));
const UserModal = lazy(() => import("../components/UserModal"));

function Home() {
  const { data, isLoading, error } = useGetAllUsers();
  const { selectedUser, setSelectedUser, favouriteUsers } = userStore();
  const { searchTerm, selectedCity, showFavourites } = InputStore();

  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (!data) {
      setFilteredUsers([]);
      return;
    }
    const term = searchTerm.trim().toLowerCase();
    let users = data;
    if (term) {
      users = users.filter((u) => {
        const name = u.name.toLowerCase();
        // const username = u.username.toLowerCase();
        const email = u.email.toLowerCase();
        return name.includes(term) || email.includes(term);
      });
    }
    if (selectedCity) {
      users = users.filter((u) => u.address.city === selectedCity);
    }
    if (showFavourites) {
      users = users.filter((u) => favouriteUsers.includes(u.id));
    }
    setFilteredUsers(users);
  }, [data, searchTerm, selectedCity, favouriteUsers, showFavourites]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="">
        {error && (
          <div className="flex justify-center items-center mb-4">
            <div className="text-xl text-red-400">
              Error: {error.message ?? "Failed to load"}
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="text-center text-gray-400 text-xl">
            Loading users…
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center text-gray-400 text-xl">
            No users found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onClick={() => setSelectedUser(user)}
              />
            ))}
          </div>
        )}

        {selectedUser && <UserModal />}
      </div>
    </Suspense>
  );
}

export default Home;
