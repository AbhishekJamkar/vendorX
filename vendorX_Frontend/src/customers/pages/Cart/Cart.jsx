import { Button, Card, Divider, FormControlLabel, Radio, RadioGroup, Snackbar } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AddressCard from "../../components/Address/AddressCard";
import CartItemCard from "../../components/CartItem/CartItemCard";
import { useDispatch, useSelector } from "react-redux";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { Box, Modal, Grid, TextField } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createOrder } from "../../../State/Customers/Orders/Action";
import { findCart } from "../../../State/Customers/Cart/cart.action";
import { isValid } from "../../util/ValidToOrder";
import { cartTotal } from "./totalPay";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const initialValues = { streetAddress: "", state: "", pincode: "", city: "" };
const validationSchema = Yup.object({ streetAddress: Yup.string().required("Street address is required"), state: Yup.string().required("State is required"), pincode: Yup.string().matches(/^\d{6}$/, "Pincode must be 6 digits").required("Pincode is required"), city: Yup.string().required("City is required") });
const modalStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, bgcolor: "background.paper", boxShadow: 24, p: 4 };

export default function Cart() {
  const dispatch = useDispatch();
  const { cart, auth } = useSelector((store) => store);
  const [open, setOpen] = useState(false), [notice, setNotice] = useState(false);
  const [fulfillmentMethod, setFulfillmentMethod] = useState("DELIVERY");
  const [paymentMethod, setPaymentMethod] = useState("ONLINE");
  const cartItems = cart.cartItems || [];
  useEffect(() => { dispatch(findCart(localStorage.getItem("jwt"))); }, [dispatch]);

  const placeOrder = (deliveryAddress) => {
    if (!isValid(cartItems) || (fulfillmentMethod === "DELIVERY" && !deliveryAddress)) return setNotice(true);
    dispatch(createOrder({ jwt: localStorage.getItem("jwt"), order: {
      businessId: cartItems[0].product?.business?.id,
      fulfillmentMethod, paymentMethod,
      deliveryAddress: fulfillmentMethod === "DELIVERY" ? deliveryAddress : null,
    }}));
  };
  const useNewAddress = (values) => {
    setOpen(false);
    placeOrder({ fullName: auth.user?.fullName || "", streetAddress: values.streetAddress, city: values.city, state: values.state, postalCode: values.pincode, country: "India" });
  };

  if (!cartItems.length) return <div className="flex h-[90vh] justify-center items-center"><div className="text-center space-y-5"><RemoveShoppingCartIcon sx={{ width: "10rem", height: "10rem" }} /><p className="font-bold text-3xl">Your Cart Is Empty</p></div></div>;
  return <Fragment><main className="lg:flex justify-between"><section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">{cartItems.map((item) => <CartItemCard key={item.id} item={item} />)}<Divider /><div className="px-5 text-sm space-y-3"><p>Order details</p><div className="flex justify-between"><p>Product total</p><p>₹{cartTotal(cartItems)}</p></div><div className="flex justify-between"><p>Platform fee</p><p>₹5</p></div><Divider /><div className="flex justify-between"><p>Total pay</p><p>₹{cartTotal(cartItems) + 5}</p></div></div></section><Divider orientation="vertical" flexItem /><section className="lg:w-[70%] px-5 pb-10"><div className="max-w-2xl mx-auto space-y-6 pt-10"><h1 className="text-center font-semibold text-2xl">Complete your order</h1><Card className="p-5"><h2 className="font-semibold">Fulfilment</h2><RadioGroup row value={fulfillmentMethod} onChange={(e) => setFulfillmentMethod(e.target.value)}><FormControlLabel value="DELIVERY" control={<Radio />} label="Deliver to my address" /><FormControlLabel value="PICKUP" control={<Radio />} label="Pick up directly from the Store" /></RadioGroup></Card>{fulfillmentMethod === "DELIVERY" && <div className="space-y-3"><h2 className="font-semibold text-xl">Choose delivery address</h2><div className="flex gap-5 flex-wrap">{(auth.user?.addresses || []).map((item) => <AddressCard key={item.id} item={item} handleSelectAddress={placeOrder} showButton />)}<Card className="p-5 w-64 text-center"><AddLocationAltIcon /><p>Add a new address</p><Button onClick={() => setOpen(true)} fullWidth variant="contained">Add address</Button></Card></div></div>}<Card className="p-5"><h2 className="font-semibold">Payment</h2><RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}><FormControlLabel value="ONLINE" control={<Radio />} label="Pay online" /><FormControlLabel value="COD" control={<Radio />} label={fulfillmentMethod === "PICKUP" ? "Cash on collection" : "Cash on delivery"} /></RadioGroup>{fulfillmentMethod === "PICKUP" && <Button variant="contained" onClick={() => placeOrder()}>Place pickup order</Button>}</Card></div></section></main><Modal open={open} onClose={() => setOpen(false)}><Box sx={modalStyle}><Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={useNewAddress}><Form><Grid container spacing={2}>{[["streetAddress","Street address",12],["state","State",6],["pincode","Pincode",6],["city","City",12]].map(([name,label,xs]) => <Grid item xs={xs} key={name}><Field name={name} as={TextField} label={label} fullWidth helperText={<ErrorMessage name={name} />} /></Grid>)}<Grid item xs={12}><Button type="submit" variant="contained">Use this address</Button></Grid></Grid></Form></Formik></Box></Modal><Snackbar open={notice} autoHideDuration={5000} onClose={() => setNotice(false)} message={fulfillmentMethod === "DELIVERY" ? "Select or add a delivery address." : "Add products from only one business at a time."} /></Fragment>;
}
