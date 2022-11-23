import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import Loader from "../Shared/Loader";
import UserItem from "./UserItem";

function UserResults() {
  const { isLoading, users } = useContext(GithubContext);

  return (
    <>
      {isLoading ? (
        <div className="w-100 mt-20 text-center mx-auto">
          <h3>Loading...</h3>
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default UserResults;
