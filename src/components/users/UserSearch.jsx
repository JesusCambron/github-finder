import React, { useContext, useState } from "react";
import { ALERT_ACTIONS_TYPES } from "../../context/alert/alertActionsTypes";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";
import { GITHUB_ACTIONS_TYPES } from "../../context/github/githubActionsTypes";
import { FaSearch } from "react-icons/fa";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert("Please enter something", ALERT_ACTIONS_TYPES.ERROR);
    } else {
      dispatch({ type: GITHUB_ACTIONS_TYPES.SET_LOADING });
      const users = await searchUsers(text);
      dispatch({ type: GITHUB_ACTIONS_TYPES.GET_USERS, payload: users });
    }
  };

  const handleClear = () => {
    dispatch({
      type: GITHUB_ACTIONS_TYPES.CLEAR_SEARCH,
    });
    setText("");
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 mb-8">
        <h2 className="text-5xl font-bold text-center">Github Finder</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-4 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {!users.length || (
        <div className="">
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </>
  );
}

export default UserSearch;
