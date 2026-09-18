import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Backdrop,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import MenuItemCard from "../../components/MenuItem/MenuItemCard";
import { useDispatch, useSelector } from "react-redux";
import { getBusinessById, getBusinessesCategory } from "../../../State/Customers/Business/business.action";
import { getMenuItemsByBusinessId } from "../../../State/Customers/Menu/menu.action";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TodayIcon from '@mui/icons-material/Today';

const categories = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Accompaniments",
  "Dessert",
];

const productTypes = [
  {label:"All",value:"all"},
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian Only", value: "non_vegetarian" },
  {label:"Seasonal",value:"seasonal"},
  
];
const Business = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const { business, menu } = useSelector((store) => store);
  const navigate = useNavigate();

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const productType = searchParams.get("product_type");
  const productCategory = searchParams.get("product_category");
  const jwt=localStorage.getItem("jwt")

  useEffect(() => {
    dispatch(
      getBusinessById({
        jwt: localStorage.getItem("jwt"),
        businessId: id,
      })
    );
    dispatch(
      getMenuItemsByBusinessId({
        jwt: localStorage.getItem("jwt"),
        businessId: id,
        seasonal: productType==="seasonal",
        vegetarian: productType==="vegetarian",
        nonveg: productType==="non_vegetarian",
        productCategory: productCategory || ""
      })
    );
    dispatch(getBusinessesCategory({businessId:id,jwt}))
  }, [id,productType,productCategory]);

  const handleFilter = (e, value) => {
    const searchParams = new URLSearchParams(location.search);
  
    if(value==="all"){
      searchParams.delete(e.target.name);
      searchParams.delete("product_category");
    }
    else searchParams.set(e.target.name, e.target.value); 

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <><div className="px-5 lg:px-20 ">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home/{business.business?.address.country}/
          {business.business?.name}/{business.business?.id}/Order Online
        </h3>
        <div>
         
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <img
            className="w-full h-[40vh] object-cover"
            src={business.business?.images[0]}
            alt=""
          />
            </Grid>
            <Grid item xs={12} lg={6}>
            <img
            className="w-full h-[40vh] object-cover"
            src={business.business?.images[1]}
            alt=""
          />
            </Grid>
            <Grid item xs={12} lg={6}>
            <img
            className="w-full h-[40vh] object-cover"
            src={business.business?.images[2]}
            alt=""
          />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">
            {business.business?.name}
          </h1>
          <p className="text-gray-500 mt-1">{business.business?.description}</p>
          <div className="space-y-3 mt-3">
              <p className="text-gray-500 flex items-center gap-3">
            <LocationOnIcon/> <span>{business.business?.address.streetAddress}
              </span> 
          </p>
          <p className="flex items-center gap-3 text-gray-500">
           <TodayIcon/> <span className=" text-orange-300"> {business.business?.openingHours} (Today)</span>  
          </p>
          </div>
        
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative ">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            
            <div className="">
              <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Product Type
              </Typography>
              <FormControl className="py-10 space-y-5" component="fieldset">
                <RadioGroup
                  name="product_type"
                  value={productType || "all"}
                  onChange={handleFilter}
                >
                  {productTypes?.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
                <Divider/>
                <Typography sx={{ paddingBottom: "1rem" }} variant="h5">
                Product Category
              </Typography>
                <RadioGroup
                  name="product_category"
                  value={productCategory || "all"}
                  onChange={handleFilter}
                >
                   <FormControlLabel
                      
                      value={"all"}
                      control={<Radio />}
                      label={"All"}
                      sx={{ color: "gray" }}
                    />
                  {business?.categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10">
          {menu?.menuItems.map((item) => (
            <MenuItemCard item={item} />
            // <p>ashok</p>
          ))}
        </div>
      </section>
    </div>
    <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={menu.loading || business.loading}
  
>
  <CircularProgress color="inherit" />
</Backdrop>
    </>
    
  );
};

export default Business;
