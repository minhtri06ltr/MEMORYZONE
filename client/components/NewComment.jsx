import Image from "next/image";
import { formatDateTime } from "../utils/format";

const NewComment = ({ data }) => {
  return (
    <div className="py-8 border-t border-[#e5e5e5]">
      <div>
        <div className="flex items-start w-full space-x-4">
          <div className="w-[100px] h-[100px]">
            <Image
              src={`https://api.multiavatar.com/${data.email}.png?apikey=${process.env.NEXT_PUBLIC_MULTIAVATAR_API_KEY}`}
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex-1 space-y-2">
            <span className="text-primary text-sm block font-semibold">
              {data.fullName}
            </span>
            <span className="text-gray text-sm block">
              {formatDateTime(data.createdTime)}
            </span>
            <p className="text-text text-sm">
              {data.comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
