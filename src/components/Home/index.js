import React, { useState, useEffect } from "react";
import UserList from "../UserList";
import "./index.css";

const Home = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const renderUsers = () => {
    return (
      <ul>
        {usersData.map((each) => (
          <UserList key={each.id} usersData={each} />
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>User LIST</h1>
      <div>{renderUsers()}</div>
    </div>
  );
};

export default Home;
