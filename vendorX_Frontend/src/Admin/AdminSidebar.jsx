import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import { useMediaQuery } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Dashboard } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";
import { logout } from "../State/Authentication/Action";
import EventIcon from "@mui/icons-material/Event";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBagIcon />, path: "/orders" },
  { title: "Product", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Product Category", icon: <CategoryIcon />, path: "/category" },
  { title: "Product options", icon: <Inventory2Icon />, path: "/ingredients" },
  { title: "Offers", icon: <EventIcon />, path: "/event" },
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" },
  
];
export default function AdminSidebar({ handleClose, open }) {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {business}=useSelector(store=>store);


  const handleNavigate = (item) => {
    navigate(`/admin/business${item.path}`);
    if (item.title === "Logout") {
      navigate("/");
      dispatch(logout());
    } else if (item.title === "Businesses") {
      navigate("/admin");
    }
    handleClose()
  };

  return (
    <div className=" ">
      <React.Fragment>
        <Drawer
          sx={{ zIndex: 1 }}
          anchor={"left"}
          open={open}
          onClose={handleClose}
          variant={isSmallScreen ? "temporary" : "permanent"}
          // variant="persistent"
        >
          <div className="w-[70vw] lg:w-[20vw] group h-[100vh] flex flex-col justify-center text-xl space-y-[1.65rem]">
            
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
               {i!==menu.length-1 && <Divider />}
              </>
            ))}
          </div>

        </Drawer>
      </React.Fragment>
    </div>
  );
}
