import {
  Layout,
  Term,
} from "../../../components";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircleIcon,
  PrinterIcon,
} from "@heroicons/react/outline";

const OrderSuccess = () => {
  return (
    <Layout
      title="Memoryzone | Thank you for your purchase at Memoryzone"
      description="Thanks for your purchase at Memoryzone we hope can see you again"
      removeLayout={true}
    >
      <div className="bg-[#f4f4f4] px-10 py-8 min-h-screen">
        <div>
          <Link href="/">
            <a>
              <div className="relative w-[225px] cursor-pointer h-[60px]">
                <Image
                  priority={true}
                  layout="fill"
                  src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex space-x-6">
          <div className="w-[60%]">
            <div className="flex items-center my-4 space-x-2">
              <div>
                <CheckCircleIcon
                  width={100}
                  height={100}
                  color="#8ec343"
                />
              </div>
              <div>
                <span className="block text-lg text-[#000000] mb-2 font-semibold">
                  Thank you for your order
                </span>
                <span className="block text-sm text-[#595959]">
                  We hope our product will meet
                  your expectations. Let us know
                  if you have any questions.
                </span>
                <span className="block text-sm text-[#595959]">
                  Hope we can see you again in
                  next buy at Memoryzone
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1">side</div>
        </div>
        <div className="flex items-center space-x-8 justify-center my-6">
          <button className="bg-primary  text-lg text-white px-8 py-3 rounded-md">
            Continue shopping
          </button>
          <div className="text-primary flex items-center space-x-2 cursor-pointer">
            <div>
              <PrinterIcon
                color=""
                width={35}
                height={35}
              />
            </div>
            <span className="text-xl">Print</span>
          </div>
        </div>
        <Term />
      </div>
    </Layout>
  );
};
export default OrderSuccess;
