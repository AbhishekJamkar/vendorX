// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SuperAdminSidebar from "./SuperAdminSideBar";
// import SuperAdminCustomerTable from "./SuperAdminCustomerTable/SuperAdminCustomerTable";
// import Customers from "./SuperAdminCustomerTable/Customers";
// import BusinessTable from "./Businesses/BusinessTable";
// import SuperAdminBusiness from "./Businesses/SuperAdminBusiness";
// import BusinessRequest from "./BusinessRequest/BusinessRequest";
// import Navbar from "../customers/components/Navbar/Navbar";

// // import AdminDashboard from "./Dashboard/AdminDashboard";
// // import AdminSidebar from "./AdminSidebar";
// // import BusinessDashboard from "./Dashboard/BusinessDashboard";
// // import BusinessesOrder from "./Orders/BusinessesOrder";
// // import BusinessesMenu from "./MenuItem/BusinessesMenu";
// // import AddMenuForm from "./AddMenu/AddMenuForm";
// // import CreateBusinessForm from "./AddBusinesses/CreateBusinessForm";

// const SuperAdmin = () => {
//   return (
    
//     <div className="lg:flex justify-between">
      
//       <div className="">
      
//         <SuperAdminSidebar />
//       </div>

//       <div className="w-[80vw]">
//         {/* <Routes>
//           <Route path="/customers" element={<Customers/>}></Route>
//           <Route path="/businesses" element={<SuperAdminBusiness/>}></Route>
//           <Route path="/business-request" element={<BusinessRequest/>}></Route>
//         </Routes> */}
//          <Routes>
//           <Route path="/customers" element={<SuperAdminCustomerTable />} />
//           <Route path="/businesses" element={<BusinessTable />} />
//           <Route path="/business-request" element={<BusinessRequest />} />
//           </Routes>
//       </div>
//     </div>
//   );
// };

// export default SuperAdmin;


import React from "react";
import { Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./SuperAdminSideBar";
import SuperAdminCustomerTable from "./SuperAdminCustomerTable/SuperAdminCustomerTable";
import SuperAdminBusiness from "./Businesses/SuperAdminBusiness";
import BusinessRequest from "./BusinessRequest/BusinessRequest";
import Navbar from "../customers/components/Navbar/Navbar"; // Navbar import// <-- Make sure the path is correct

const SuperAdmin = () => {
  return (
    <div className="lg:flex flex-col">
      {/* AdminNavbar at the top */}
      <div className="w-full">
        <Navbar />
      </div>

      {/* Main content with sidebar and routes */}
      <div className="lg:flex justify-between">
        <div>
          <SuperAdminSidebar />
        </div>

        <div className="w-[80vw]">
          <Routes>
            <Route index element={<SuperAdminBusiness />} />
            <Route path="customers" element={<SuperAdminCustomerTable />} />
            <Route path="businesses" element={<SuperAdminBusiness />} />
            <Route path="business-request" element={<BusinessRequest />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
