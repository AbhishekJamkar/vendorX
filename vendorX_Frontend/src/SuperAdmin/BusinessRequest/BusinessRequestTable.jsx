// import {
//     Avatar,
//     Backdrop,
//     Box,
//     Button,
//     Card,
//     CardHeader,
//     CircularProgress,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Typography,
//   } from "@mui/material";
  
//   import React, { useEffect } from "react";
//   import { useParams } from "react-router-dom";
  
//   import { useDispatch, useSelector } from "react-redux";
//   import { getMenuItemsByBusinessId } from "../../State/Customers/Menu/menu.action";
  
//   const BusinessRequestTable = ({ isDashboard, name }) => {
//     const dispatch = useDispatch();
//     const { menu } = useSelector((store) => store);
//     // const { id } = useParams();
  
//     useEffect(() => {
      
//     }, []);
  
//     const handleDeleteProduct = (productId) => {
//       console.log("delete product ", productId);
//     };
  
//     return (
//       <Box width={"100%"}>
//         <Card className="mt-1">
//           <CardHeader
//             title={name}
//             sx={{
//               pt: 2,
//               alignItems: "center",
//               "& .MuiCardHeader-action": { mt: 0.6 },
//             }}
//           />
//           <TableContainer>
//             <Table  aria-label="table in dashboard">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Image</TableCell>
//                   <TableCell>Title</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
//                   <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
//                   {!isDashboard && <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>}
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {menu.menuItems.slice(0,isDashboard?7:menu.menuItems.length).map((item) => (
//                   <TableRow
//                     hover
//                     key={item.name}
//                     sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
//                   >
//                     <TableCell>
//                       {" "}
//                       <Avatar alt={item.name} src={item.imageUrl} />{" "}
//                     </TableCell>
  
//                     <TableCell
//                       sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
//                     >
//                       <Box sx={{ display: "flex", flexDirection: "column" }}>
//                         <Typography
//                           sx={{
//                             fontWeight: 500,
//                             fontSize: "0.875rem !important",
//                           }}
//                         >
//                           {item.name}
//                         </Typography>
//                         <Typography variant="caption">{item.brand}</Typography>
//                       </Box>
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {item.category.name}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       ₹{item.price}
//                     </TableCell>
//                     <TableCell sx={{ textAlign: "center" }}>
//                       {item.quantity || 10}
//                     </TableCell>
  
//                     {!isDashboard && <TableCell sx={{ textAlign: "center" }}>
//                       <Button
//                         variant="text"
//                         onClick={() => handleDeleteProduct(item._id)}
//                       >
//                         Delete
//                       </Button>
//                     </TableCell>}
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Card>
  
//         <Backdrop
//           sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//           open={menu.loading}
//         >
//           <CircularProgress color="inherit" />
//         </Backdrop>
//       </Box>
//     );
//   };
  
//   export default BusinessRequestTable;
  
















import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const BusinessRequestTable = ({ isDashboard, name }) => {
  const dummyMenuItems = [
    {
      _id: "1",
      name: "Margherita Pizza",
      brand: "Domino's",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Pizza" },
      price: 199,
      quantity: 5,
    },
    {
      _id: "2",
      name: "Paneer Burger",
      brand: "Burger King",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Burger" },
      price: 149,
      quantity: 7,
    },
    {
      _id: "3",
      name: "Cold Coffee",
      brand: "Cafe Coffee Day",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Beverage" },
      price: 99,
      quantity: 15,
    },
    {
      _id: "4",
      name: "Veg Biryani",
      brand: "Biryani Blues",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Rice" },
      price: 229,
      quantity: 10,
    },
    {
      _id: "5",
      name: "Tandoori Chicken",
      brand: "Barbeque Nation",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Grill" },
      price: 349,
      quantity: 6,
    },
    {
      _id: "6",
      name: "Chocolate Shake",
      brand: "Keventers",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Beverage" },
      price: 120,
      quantity: 20,
    },
    {
      _id: "7",
      name: "Cheese Sandwich",
      brand: "Subway",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Snacks" },
      price: 110,
      quantity: 12,
    },
    {
      _id: "8",
      name: "Pasta Alfredo",
      brand: "Italiano",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Pasta" },
      price: 210,
      quantity: 8,
    },
    {
      _id: "9",
      name: "Spring Rolls",
      brand: "Wok Express",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Chinese" },
      price: 130,
      quantity: 9,
    },
    {
      _id: "10",
      name: "Ice Cream Sundae",
      brand: "Baskin Robbins",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Dessert" },
      price: 170,
      quantity: 11,
    },
    {
      _id: "11",
      name: "French Fries",
      brand: "McDonald's",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Snacks" },
      price: 99,
      quantity: 25,
    },
    {
      _id: "12",
      name: "Chocolate",
      brand: "McDonald's",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Beverage" },
      price: 189,
      quantity: 200,
    },
    {
      _id: "13",
      name: "Coffee",
      brand: "Starbucks",
      imageUrl: "https://via.placeholder.com/50",
      category: { name: "Snacks" },
      price: 99,
      quantity: 25,
    },
  ];

  const handleDeleteProduct = (productId) => {
    alert(`Delete product with ID: ${productId}`);
  };

  return (
    <Box width={"100%"}>
      <Card className="mt-1">
        <CardHeader
          title={name || "Business Menu Request"}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table aria-label="business-menu-table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                {!isDashboard && (
                  <TableCell align="center">Delete</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyMenuItems
                .slice(0, isDashboard ? 7 : dummyMenuItems.length)
                .map((item) => (
                  <TableRow key={item._id} hover>
                    <TableCell>
                      <Avatar alt={item.name} src={item.imageUrl} />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography fontWeight={500}>{item.name}</Typography>
                        <Typography variant="caption">
                          {item.brand}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="center">{item.category.name}</TableCell>
                    <TableCell align="center">₹{item.price}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    {!isDashboard && (
                      <TableCell align="center">
                        <Button
                          variant="text"
                          color="error"
                          onClick={() => handleDeleteProduct(item._id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default BusinessRequestTable;
