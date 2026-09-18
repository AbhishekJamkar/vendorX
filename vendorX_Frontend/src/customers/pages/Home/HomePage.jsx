import React, { useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import { restaurents } from "../../../Data/restaurents";
import BusinessCard from "../../components/BusinessCard/BusinessCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBusinessesAction } from "../../../State/Customers/Business/business.action";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

// import { getAllBusinessesAction } from "../../../State/Business/Action";
// import RestarantCard from "../../components/BusinessCard/Business";

const HomePage = () => {
  const { auth, business } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllBusinessesAction(localStorage.getItem("jwt")));
    }
  }, [auth.user]);

  return (
    <div>
      <section className="-z-50 banner relative flex items-center justify-end">
        {/* Content */}
        <div className="w-full lg:w-[40%] z-10 text-left mr-8 lg:mr-20">
          <p className="text-2xl lg:text-5xl font-bold py-3 text-white">
            Shop From Nearby Stores
          </p>

          <p className="text-gray-200 text-base lg:text-xl leading-relaxed">
            Discover products from local shops near you. Order online with fast
            delivery or convenient store pickup.
          </p>
        </div>

        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <div>
          <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
            Top Meals
          </p>

          <MultipleItemsCarousel />
        </div>
      </section>

      <section className="px-5 lg:px-20">
        <div>
          <h1 className="text-2xl font-semibold text-gray-400 py-3">
            Order From Our Handpicked Favorites
          </h1>

          <div className="flex flex-wrap items-center justify-around">
            {business.businesses.map((item, i) => (
              <BusinessCard key={i} data={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Start */}
      <Footer container className="mt-10 bg-black text-white border-t border-gray-800">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand className="w-12 object-contain"
                href="/"
                // src={`${process.env.PUBLIC_URL}/image.webp`}
                // alt="VendorX Logo"
                name="VendorX"
              />
            </div>

            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="About" />

                <FooterLinkGroup col>
                  <FooterLink href="#">VendorX</FooterLink>
                  <FooterLink href="#">Local Stores</FooterLink>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle title="Follow Us" />

                <FooterLinkGroup col>
                  <FooterLink href="#">Github</FooterLink>
                  <FooterLink href="#">Instagram</FooterLink>
                </FooterLinkGroup>
              </div>

              <div>
                <FooterTitle title="Legal" />

                <FooterLinkGroup col>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                  <FooterLink href="#">Terms & Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>


          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="VendorX" year={2026} />

            <div className="mt-8 flex space-x-10 sm:mt-6 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
      {/* Footer End */}
    </div>
  );
};

export default HomePage;