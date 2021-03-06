import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import {
  getData,
  postData,
} from "../utils/requestMethod";
const Footer = () => {
  const [contactEmail, setContactEmail] =
    useState("");
  const contactHandle = async (e) => {
    e.preventDefault();
    if (contactEmail === "") {
      alert(
        "Please fill contact email to continue",
      );
      return;
    }
    const res = await postData(
      "mailchimp/addSubscriber",
      contactEmail,
    );
    if (res.success) {
      alert(res.message);
    } else {
      alert(res.error);
    }
  };

  return (
    <>
      <div className="border-y  border-[#ebebeb]">
        <div className="limitScreen">
          <div className="flex flex-col lg:flex-row   pb-14  ">
            <div className=" hidden pt-8 sm:flex justify-between w-full lg:w-[65%] pr-0 lg:pr-16">
              <div className="flex-1">
                <span className="footerHeaderText mb-6">
                  INTRODUCE
                </span>
                <ul className="list-none text-[#898989] text-sm space-y-2">
                  <li className="footerItem">
                    Home
                  </li>
                  <li className="footerItem">
                    About Memoryzone
                  </li>
                  <li className="footerItem">
                    Terms of Transaction
                  </li>
                  <li className="footerItem">
                    Information security
                  </li>
                  <li className="footerItem">
                    Recruit
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <span className="footerHeaderText mb-6">
                  COMPANY POLICY
                </span>
                <ul className="list-none text-[#898989] text-sm space-y-2">
                  <li className="footerItem">
                    Delivery policy
                  </li>
                  <li className="footerItem">
                    Return policy
                  </li>
                  <li className="footerItem">
                    Payment methods
                  </li>
                  <li className="footerItem">
                    Installment Instructions
                  </li>
                  <li className="footerItem">
                    Warranty
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <span className="footerHeaderText mb-6">
                  CUSTOMER SUPPORT
                </span>
                <ul className="list-none text-[#898989] text-sm space-y-2">
                  <li className="footerItem">
                    Warranty:{" "}
                    <b>(028) 7301 3879</b>
                  </li>
                  <li className="footerItem">
                    Warranty hotline in HCM:{" "}
                    <b>0703 305 350</b>
                  </li>
                  <li className="footerItem">
                    Submit a warranty claim
                  </li>
                  <li className="footerItem">
                    Submit an exchange request
                  </li>
                  <li className="footerItem">
                    Sales Department:{" "}
                    <b>
                      laptopdienthoai1@gmail.com
                    </b>
                  </li>
                  <li className="footerItem">
                    Customer Support Department:{" "}
                    <b>
                      laptopdienthoai1@gmail.com
                    </b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 pt-8 flex-1">
              <div>
                <span className="footerHeaderText">
                  SUPER SPEED INFORMATION SERVICES
                  CO., LTD
                </span>
                <span className="text-sm text-text block">
                  Head office: No. 91-93 Road No.
                  5, An Phu Ward, City. Thu Duc,
                  Ho Chi Minh City
                </span>
                <span className="text-sm text-text block">
                  MST: 0311427563 - issued on
                  December 22, 2011 at the
                  Department of Planning and
                  Investment of Ho Chi Minh City
                </span>
              </div>
              <div>
                <span className="footerHeaderText">
                  SHOWROOM HO CHI MINH:
                </span>
                <span className="text-sm text-text block">
                  Address: 4C Dong Xoai, Ward 13,
                  Tan Binh District
                </span>
                <span className="text-sm text-text block">
                  Phone:
                  <b>(028) 7301 3878</b> - Mobile:{" "}
                  <b>0909 305 350</b>
                </span>
                <span className="text-sm text-text block">
                  <b>Open</b>:{" "}
                  <span className="cursor-pointer hover:text-primary">
                    9am to 8pm from Monday to
                    Sunday
                  </span>
                </span>
              </div>
              <div>
                <span className="footerHeaderText">
                  SHOWROOM HANOI:
                </span>
                <span className="text-sm text-text block">
                  Address: 60 Dich Vong Hau
                  Street, Dich Vong Hau, Cau Giay
                  District
                </span>
                <span className="text-sm text-text block">
                  Phone:
                  <b>(028) 7301 3878</b> - Mobile:{" "}
                  <b>0915 305 350</b>
                </span>
                <span className="text-sm text-text block">
                  <b>Open</b>:{" "}
                  <span className="cursor-pointer hover:text-primary">
                    9am to 8pm from Monday to
                    Sunday
                  </span>
                </span>
              </div>
              <div className="flex space-x-4">
                <div className="cursor-pointer">
                  <Image
                    alt="Memoryzone Certificate of notification from the Ministry of Industry and Trade"
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/boct_1.png?1654165396541"
                    width={135}
                    height={51}
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    alt="Memoryzone Certificate of registration of the Ministry of Industry and Trade"
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/boct_2.png?1654165396541"
                    width={135}
                    height={51}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="limitScreen">
        <div className="pb-8 flex flex-col lg:space-x-20 lg:flex-row ">
          <div className="flex-1 pt-8 space-y-4 ">
            <span className="footerHeaderText lg:text-left text-center mb-6">
              SIGN UP TO RECEIVE PROMOTION NEWS
            </span>
            <div>
              <form
                onSubmit={contactHandle}
                className="space-x-2 flex items-center"
                method="POST"
                action={`https://us10.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_MAIL_CHIMP_AUDIENCE_ID}`}
              >
                <input
                  id="contactEmail"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  name="contactEmail"
                  onChange={(e) =>
                    setContactEmail(
                      e.target.value,
                    )
                  }
                  type="email"
                  placeholder="Enter your email"
                  className="text-sm outline-none bg-[#f8f8f8] px-4 py-2 flex-1 rounded-sm border border-[#e1e1e1]"
                />
                <button
                  type="submit"
                  className="rounded-sm  hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary  border border-primary  py-2 px-6"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
          <div className="flex-col lg:space-x-10  flex sm:flex-row">
            <div className=" flex-1 space-y-4 lg:space-y-0 flex lg:items-start justify-center flex-col items-center pt-8 ">
              <span className="footerHeaderText  mb-6">
                PAYMENT METHODS
              </span>
              <div className="cursor-pointer">
                <Image
                  alt="Memoryzone payment methods"
                  width={350}
                  height={33}
                  src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/payment.png?1654165396541"
                />
              </div>
            </div>
            <div className="pt-8 flex flex-1 lg:items-start justify-center flex-col items-center space-y-4 lg:space-y-0">
              <span className="footerHeaderText mb-6">
                CONNECT WITH US
              </span>
              <div className="flex space-x-4">
                <div className="cursor-pointer">
                  <Image
                    alt="Follow Memoryzone on Facebook to get more event and products information"
                    width={32}
                    height={32}
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/facebook.png?1654165396541"
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    alt="Follow Memoryzone on Lazada"
                    width={32}
                    height={32}
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/lazada.png?1654165396541"
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    alt="Follow Memoryzone on Shopee"
                    width={32}
                    height={32}
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/shopee.png?1654165396541"
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    alt="Follow Memoryzone on Instagram to get more information about products, sales and event"
                    width={32}
                    height={32}
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/instagram.png?1654165396541"
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    alt="Follow Memoryzone on Youtube to get products review, benchmark, compare and much more"
                    width={32}
                    height={32}
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/youtube.png?1654165396541"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
