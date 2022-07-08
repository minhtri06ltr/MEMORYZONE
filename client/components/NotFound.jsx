import Image from "next/image";
import { Layout } from ".";
import { ExclamationIcon } from "@heroicons/react/outline";
import Link from "next/link";

const NotFound = ({
  title,
  description,
  layoutTitle,
  layoutDescription,
}) => {
  return (
    <Layout
      title={layoutTitle}
      description={layoutDescription}
      removeLayout={true}
    >
      <div className="bg-[#f4f4f4] px-10 w-screen min-h-screen">
        <div className="py-8 border-b border-[#cecdcd] flex items-center justify-center  ">
          <Link href="/">
            <a>
              <div className="relative w-[225px] cursor-pointer h-[60px]">
                <Image
                  alt="Memoryzone logo"
                  priority={true}
                  layout="fill"
                  src="https://bizweb.sapocdn.net/100/329/122/themes/835213/assets/checkout_logo.png?1656064578646"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="flex items-center justify-center my-6 space-y-6 flex-col">
          <div>
            <ExclamationIcon
              width={80}
              height={80}
              color="#e9be33"
            />
          </div>
          <span className="text-lg block text-[#000000] font-semibold">
            {title}
          </span>
          <span className="text-[#000000] block text-sm">
            {description}
          </span>
          <Link href="/">
            <button className="bg-primary hover:bg-[#006533] rounded-md py-4 px-10 text-white text-lg font-semibold">
              Return homepage
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
