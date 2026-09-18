import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import NotFound from "../customers/pages/NotFound/NotFound";
import { useSelector } from "react-redux";
import CreateBusinessForm from "../Admin/AddBusinesses/CreateBusinessForm";

const AdminRouters = () => {
  const { auth, business } = useSelector((store) => store);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            
            !business.usersBusiness ? (
              <CreateBusinessForm />
            ) : (
              <Admin />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRouters;
