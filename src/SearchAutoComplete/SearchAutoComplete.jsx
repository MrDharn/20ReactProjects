import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import './autoComplete.css'

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [filteredusers, setFilteredUsers] = useState([]);
  const [searchedParams, setSearchedParams] = useState("");

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setSearchedParams(filterValue);

    if (filterValue.length > 0) {
      const filteredData =
        users && users.length > 0
          ? users.filter(
              (filteredItem) =>
                filteredItem.toLowerCase().indexOf(filterValue) > -1
            )
          : [];
      setFilteredUsers(filteredData);
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  const handleClick = (id)=> {
   setSearchedParams(filteredusers[id]);
   setDropDown(false)
  }

  if(loading){
    return <div className="loading-message">Loading Please wait !!!</div>
  }

  if(error != null){
    return <div className="error-message">Data could not be fetched !! {error}</div>


  }
  return (
    <div className="search-auto-complete-container">
    
    <input
      type="text"
      value={searchedParams}
      onChange={(e) => handleChange(e)}
      placeholder="search user here....."
    />
    {dropDown && <DropDown data={filteredusers} handleClick={handleClick}/>}
    </div>
  );
}
