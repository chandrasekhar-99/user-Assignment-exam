import { Link } from "react-router-dom";
import "./index.css";

const UserList = (props) => {
  const { usersData } = props;
  const { id, username, email, address } = usersData;

  return (
    <li className="list-container">
      <Link key={id} to={`user/${id}`}>
        <div className="container">
          <h2>{username}</h2>
          <p>{email}</p>
          <p>{address.city}</p>
        </div>
      </Link>
    </li>
  );
};

export default UserList;
