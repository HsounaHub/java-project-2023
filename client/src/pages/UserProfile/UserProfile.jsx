import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useData } from "../../contexts/DataProvider";
import { useState } from "react";

import "./UserProfile.css";
import { useAuth } from "../../contexts/AuthProvider";
import CustomProducts from "./customProducts/CustomProducts";
export const UserProfile = () => {
  const { loading } = useData();
  const { currentPage, setCurrentPage } = useAuth();

  return (
    !loading && (
      <>
        <div>
          <div className="user-profile-container">
            <div className="link-container">
              <Link
                style={{ color: currentPage === "profile" ? "black" : "grey" }}
                onClick={() => setCurrentPage("profile")}
                to="/profile"
              >
                Profile
              </Link>
              <Link
                style={{ color: currentPage === "orders" ? "black" : "grey" }}
                onClick={() => setCurrentPage("orders")}
                to="/profile/orders"
              >
                Orders
              </Link>
              <Link
                style={{
                  color: currentPage === "addresses" ? "black" : "grey",
                }}
                onClick={() => setCurrentPage("addresses")}
                to="/profile/addresses"
              >
                Addresses
              </Link>
              <Link
                style={{
                  color: currentPage === "addresses" ? "black" : "grey",
                }}
                onClick={() => setCurrentPage("sales")}
                to="/profile/sales"
              >
                Sales
              </Link>
            </div>
            <Outlet />
          </div>
        </div>
        <CustomProducts />
      </>
    )
  );
};
