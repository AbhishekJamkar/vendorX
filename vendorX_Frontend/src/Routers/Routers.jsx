// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import CustomerRoutes from "./CustomerRoutes";
// import Admin from "../Admin/Admin";
// import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
// import SuperAdmin from "../SuperAdmin/SuperAdmin";
// import { useSelector } from "react-redux";
// import NotFound from "../customers/pages/NotFound/NotFound";
// import IngredientsList from "../Data/Demo";
// import CreateBusinessForm from "../Admin/AddBusinesses/CreateBusinessForm";
// import AdminRouters from "./AdminRouters";

// const Routers = () => {
//   const { auth } = useSelector((store) => store);

//   return (
//     <>
   
//     <Routes>
      
//       <Route
//         path="/admin/business/*"
//         element={<AdminRouters/>}
//       />
//       <Route path="/*" element={<CustomerRoutes />} />
//     </Routes>
//     </>
    
//   );
// };

// export default Routers;

import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import Admin from "../Admin/Admin";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import SuperAdmin from "../SuperAdmin/SuperAdmin";
import NotFound from "../customers/pages/NotFound/NotFound";
import IngredientsList from "../Data/Demo";
import CreateBusinessForm from "../Admin/AddBusinesses/CreateBusinessForm";
import AdminRouters from "./AdminRouters";

const Routers = () => {
  return (
    <>
      <Routes>
        {/* ✅ Add Super Admin Routes Here */}
        <Route path="/super-admin/*" element={<SuperAdmin />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin/business/*" element={<AdminRouters />} />

        {/* ✅ Customer Routes */}
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </>
  );
};

export default Routers;
