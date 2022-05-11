import { ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Path = ({ path }) => {
  return (
    <section>
      <div className="border-b border-[#e5e5e5] py-3.5 flex justify-start items-center px-10">
        {path.map((item, index) => (
          <div key={index} className="flex  items-center">
            {path.length !== 1 ? (
              <>
                <Link href={item === "Home" ? "/" : item.toLowerCase()}>
                  <span
                    className={`${
                      index === path.length - 1
                        ? "text-primary  cursor-default pointer-events-none"
                        : "text-[#333333] cursor-pointer"
                    }  text-base   `}
                  >
                    {item}
                  </span>
                </Link>
                {index === path.length - 2 && (
                  <ChevronRightIcon width={13} height={13} className=" mx-2" />
                )}
              </>
            ) : (
              <span className=" text-primary  text-base  limit-1-line block">
                {item}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Path;
