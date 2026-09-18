import React, { useEffect } from "react";
import BusinessCard from "./BusinessCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessByUserId } from "../../State/Customers/Business/business.action";
import AddressCard from "../../customers/components/Address/AddressCard";
import AddBusinessCard from "./AddBusinessCard";


const AdminDashboard = () => {
  const params = useParams();
  const {business}=useSelector(state=>state);
  console.log("params", params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBusinessByUserId());
  }, []);

  return (
    <div className="lg:px-20">
     
      <div className="lg:flex flex-wrap justify-center">
        {business.usersBusiness.map((item) => (
          <BusinessCard item={item}/>
        ))}
        {business.usersBusiness.length<1 && <AddBusinessCard/>}
      </div>
    </div>
  );
};

export default AdminDashboard;
