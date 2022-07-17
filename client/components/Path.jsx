import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Path = ({ path }) => {
  return (
    <section>
      <div className="border-b border-[#e5e5e5]  ">
        <div className=" py-4 flex justify-start items-center">
          {path.map((item, index) => (
            <div
              key={index}
              className="flex  items-center"
            >
              {path.length !== 1 ? (
                <>
                  <Link href={item.pathName}>
                    <span
                      className={`${
                        index === path.length - 1
                          ? "text-primary  cursor-default pointer-events-none"
                          : "text-[#333333] cursor-pointer"
                      }  text-sm`}
                    >
                      {item.title}
                    </span>
                  </Link>
                  {index >= 0 &&
                    index !== path.length - 1 && (
                      <ChevronRightIcon
                        width={13}
                        height={13}
                        className=" mx-2"
                      />
                    )}
                </>
              ) : (
                <span className=" text-primary  text-sm  limit-1-line block">
                  {item.title}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Path;
