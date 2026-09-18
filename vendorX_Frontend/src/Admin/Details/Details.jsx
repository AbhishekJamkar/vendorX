import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InstagramIcon from "@mui/icons-material/Instagram";
// import XIcon from '@mui/icons-material/X';
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  updateBusiness,
  updateBusinessStatus,
} from "../../State/Customers/Business/business.action";

const Details = () => {
  const dispatch = useDispatch();
  const { auth, business, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const handleBusinessStatus = () => {
    dispatch(
      updateBusinessStatus({
        businessId: business.usersBusiness.id,
        jwt: auth.jwt || jwt,
      })
    );
  };
  return (
    <div className="lg:px-20 px-5">
      <div className="py-5 flex justify-center items-center gap-5">
        <h1 className="text-2xl lg:text-7xl text-center font-bold p-5">
          {business.usersBusiness?.name}
        </h1>
        <div>
          <Button
            onClick={handleBusinessStatus}
            size="large"
            // sx={{ padding: "1rem 2rem" }}
            className="py-[1rem] px-[2rem]"
            variant="contained"
            color={business.usersBusiness?.open ? "error" : "primary"}
          >
            {business.usersBusiness?.open
              ? "Close"
              : "Open"}
          </Button>
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Business</span>}
            />
            <CardContent>
              <div className="space-y-4 text-gray-200">
                <div className="flex">
                  <p className="w-48">Owner</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.owner.fullName}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Business Name</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.name}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Business Type</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.businessType}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Opning Hours</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.openingHours}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Status</p>
                  <div className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.open ? (
                      <span className="px-5 py-2 rounded-full bg-green-400 text-gray-950">
                        Open
                      </span>
                    ) : (
                      <span className="text-black px-5 py-2 rounded-full bg-red-400">
                        Closed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Address</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Country</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.address.country}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">City</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.address.city}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Postal Code</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.address.postalCode}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Street Address</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    {business.usersBusiness?.address.streetAddress}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Card>
            <CardHeader
              title={<span className="text-gray-300"> Contact</span>}
            />
            <CardContent>
              <div className="space-y-3 text-gray-200">
                <div className="flex">
                  <p className="w-48">Email</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>
                    {business.usersBusiness?.contactInformation.email}
                  </p>
                </div>
                <div className="flex">
                  <p className="w-48">Mobile</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>
                    {" +91"}
                    {business.usersBusiness?.contactInformation.mobile}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="w-48">Social</p>
                  <div className="text-gray-400 flex items-center pb-3">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    <a
                      target="_blank"
                      href={
                        business.usersBusiness?.contactInformation.instagram
                      }
                      rel="noreferrer"
                    >
                      <InstagramIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      className="ml-5"
                      href={
                        business.usersBusiness?.contactInformation.instagram
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      className="ml-5"
                      href={
                        business.usersBusiness?.contactInformation.instagram
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon sx={{ fontSize: "3rem" }} />
                    </a>
                    <a
                      className="ml-5"
                      href={
                        business.usersBusiness?.contactInformation.instagram
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon sx={{ fontSize: "3rem" }} />
                    </a>
                  </div>
                </div>
                {/* <div className="flex">
                  <p className="w-48">Twitter</p>
                  <p className="text-gray-400">
                    {" "}
                    <span className="pr-5">-</span>{" "}
                    <a
                      href={
                        business.usersBusiness?.contactInformation.instagram
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <TwitterIcon sx={{fontSize:"3rem"}} />
                    </a>
                  </p>
                </div> */}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
