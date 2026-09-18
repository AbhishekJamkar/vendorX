import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./Dashboard/AdminDashboard";
import AdminSidebar from "./AdminSidebar";
import BusinessDashboard from "./Dashboard/BusinessDashboard";
import BusinessesOrder from "./Orders/BusinessesOrder";
import BusinessesMenu from "./Products/BusinessesMenu";
import AddMenuForm from "./Products/AddMenuForm";
import CreateBusinessForm from "./AddBusinesses/CreateBusinessForm";
import IngredientTable from "./Events/Events";
import Category from "./Category/Category";
import Ingredients from "./Ingredients/Ingredients";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredientCategory,
  getIngredientsOfBusiness,
} from "../State/Admin/Ingredients/Action";
import { getBusinessesCategory } from "../State/Customers/Business/business.action";
import Details from "./Details/Details";
import AdminNavbar from "./AdminNavbar";
import { getUsersOrders } from "../State/Customers/Orders/Action";
import { fetchBusinessesOrder } from "../State/Admin/Order/businesses.order.action";
import Navbar from "../customers/components/Navbar/Navbar";
const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  const { auth, business, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (business.usersBusiness) {
      dispatch(
        getIngredientCategory({ jwt, id: business.usersBusiness?.id })
      );
      dispatch(
        getIngredientsOfBusiness({ jwt, id: business.usersBusiness?.id })
      );
      dispatch(
        getBusinessesCategory({
          jwt: auth.jwt || jwt,
          businessId: business.usersBusiness?.id,
        })
      );

      dispatch(
        fetchBusinessesOrder({
          businessId: business.usersBusiness?.id,
          jwt: auth.jwt || jwt,
        })
      );
    }
  }, [business.usersBusiness]);
  return (
    <div>
      <Navbar />
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/" element={<BusinessDashboard />} />
            <Route path="/orders" element={<BusinessesOrder />} />
            <Route path="/menu" element={<BusinessesMenu />} />
            <Route path="/add-menu" element={<AddMenuForm />} />
            <Route path="/add-business" element={<CreateBusinessForm />} />
            <Route path="/event" element={<IngredientTable />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
