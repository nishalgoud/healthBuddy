import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import UserService from "../services/UserService";

export function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const getUsersList = async () => {
    const { code, message, usersList } = await UserService.get().getUsersList();

    if (!code) {
      alert(message);
      return;
    }
    setUsersList(usersList);
  };
  const handleDelete = async (user, fullName) => {
    if (window.confirm(`are you sure you want to delete ${fullName}`)) {
      const { code, message = "user deleted successfully" } =
        await UserService.get().deleteUser(user.userId);
      alert(message);
      if (!code) {
        return;
      }
      navigate(0);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "1em",
          paddingBottom: "0.5em",
        }}
      >
        Users List
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Full Name</th>
            <th>MobileNumber</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersList.length > 0 &&
            usersList.map((user, index) => {
              const { userId, email, firstName, lastName, mobileNumber } = user;
              const fullName = firstName + (lastName ?? "");
              return (
                <tr>
                  <td>{userId}</td>
                  <td>{email}</td>
                  <td>{fullName}</td>
                  <td>{mobileNumber}</td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => handleDelete(user, fullName)}
                    >
                      Delete User
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
