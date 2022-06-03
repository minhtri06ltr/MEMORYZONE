import { Layout, Path } from "../components";
import {
  DeviceMobileIcon,
  OfficeBuildingIcon,
  LocationMarkerIcon,
  GlobeIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const account = () => {
  return (
    <Layout
      title="Memoryzone | Account"
      description="Memoryzone account information"
    >
      <Path
        path={[
          {
            title: "Home",
            pathName: "/",
          },
          {
            title: "Account",
            pathName: "/account",
          },
        ]}
      />
      <div className="px-10 my-12 space-x-6 flex  ">
        <div className="w-3/4 pr-2">
          <span className="text-text text-lg block font-medium">CUSTOMER</span>
          <span className="text-sm my-3 block font-semibold text-text ">
            Hello, <span className="text-primary">ly tri</span> !
          </span>
          <div>
            <table className="border w-full border-[#e1e1e1]">
              <tbody className="divide-y divide-[#e1e1e1]">
                <tr className="divide-x divide-[#e1e1e1]">
                  <td className="headerOrderTable">Order</td>
                  <td className="headerOrderTable">Date</td>
                  <td className="headerOrderTable">Address</td>
                  <td className="headerOrderTable">Order Price</td>
                  <td className="headerOrderTable">Payment Status</td>
                  <td className="headerOrderTable">Status</td>
                </tr>
                <tr className="divide-x divide-[#e1e1e1]">
                  {/* <td colspan="6" className="text-center align-top   p-2">
                  <span className="text-sm min-h-[42px] block">
                    There is no order yet.
                  </span>
                </td> */}

                  <td className="itemOrderTable ">#sds87d83</td>
                  <td className="itemOrderTable ">6/3/2022</td>
                  <td className="itemOrderTable ">
                    2/19 Ap Tan Lap, xa Tan Thoi Nhi, huyen Hoc Mon, tp
                    HCMasdddddddddddddddd
                  </td>
                  <td className="itemOrderTable ">2.345$</td>
                  <td className="itemOrderTable italic">Paid</td>
                  <td className="itemOrderTable ">Prepare</td>
                </tr>
                <tr className="divide-x divide-[#e1e1e1]">
                  {/* <td colspan="6" className="text-center align-top   p-2">
                  <span className="text-sm min-h-[42px] block">
                    There is no order yet.
                  </span>
                </td> */}

                  <td className="itemOrderTable ">#sds87d83</td>
                  <td className="itemOrderTable ">6/3/2022</td>
                  <td className="itemOrderTable ">
                    2/19 Ap Tan Lap, xa Tan Thoi Nhi, huyen Hoc Mon, tp
                    HCMasdddddddddddddddd
                  </td>
                  <td className="itemOrderTable ">2.345$</td>
                  <td className="itemOrderTable italic">Paid</td>
                  <td className="itemOrderTable ">Prepare</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1">
          <span className="block text-base mt-4 py-3">MY ACCOUNT</span>
          <div className="space-y-6 text-sm mb-2">
            <div className="flex items-center ">
              <DeviceMobileIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <span>Phone Number:</span> <span></span>
            </div>
            <div className="flex items-center">
              <LocationMarkerIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <span>Address</span> <span></span>
            </div>
            <div className="flex items-center">
              <OfficeBuildingIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <span>Company:</span> <span></span>
            </div>
            <div className="flex items-center">
              <GlobeIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 "
              />
              <span>Country:</span> <span></span>
            </div>
            <div className="flex items-center">
              <CodeIcon
                width={15}
                height={15}
                className="text-primary mr-2.5 mb-[0.25px]"
              />
              <span>Zip Code:</span> <span></span>
            </div>
          </div>
          <Link href="/account/address">
            <button className="rounded-sm my-4 hover:bg-white hover:text-primary transition ease-linear text-white text-sm bg-primary w-full border border-primary  py-2 px-8">
              Address list (0)
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default account;
