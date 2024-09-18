import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

const UserDetail = () => {
  const { id } = useParams();
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUserList(data);
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

  const renderUserDetails = () => {
    return (
      <ul>
        {userList.map((each) => (
          <div>
            <p>{each.name}</p>
            <p>{each.username}</p>
            <p>{each.email}</p>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>USER DETAILS</h1>
      <div>{renderUserDetails()}</div>
    </div>
  );
};

export default UserDetail;
