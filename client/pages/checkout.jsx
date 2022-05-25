import Image from "next/image";
import { Layout } from "../components";
import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";

const checkout = () => {
  return (
    <Layout
      removeLayout={true}
      title="Memoryzone | Checkout"
      description="Memoryzone - Professional in memory - Checkout - Payment orders "
    >
      <div className="flex">
        <div className="bg-white h-[1200px] pl-10  w-[66%]">
          <div className="p-3">
            <div className="relative w-56 h-14 my-4 cursor-pointer ">
              <Link href="/">
                <a>
                  <Image
                    src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1653463685615"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <div className="flex w-full justify-between items-center">
                  <span className="font-bold">Delivery information</span>
                  <div className="flex">
                    <UserCircleIcon
                      className="text-primary"
                      width={22}
                      height={22}
                    />
                    <span>Login</span>
                  </div>
                </div>
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="text" placeholder="Full Name" />
                  <input type="tel" placeholder="Phone Number" />
                  <input type="text" placeholder="Address" />
                  <select>
                    <option>Province</option>
                  </select>
                  <select>
                    <option>Distric</option>
                  </select>
                  <select>
                    <option>Wards</option>
                  </select>
                  <input type="textarea" placeholder="Note" />
                </form>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
        <div className="bg-red-200 h-[1200px] flex-1"></div>
      </div>
    </Layout>
  );
};

export default checkout;
