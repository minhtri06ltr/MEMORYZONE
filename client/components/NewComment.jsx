import Image from "next/image";

const NewComment = () => {
  return (
    <div className="py-8 border-t border-[#e5e5e5]">
      <div>
        <div className="flex items-start w-full space-x-4">
          <div className="w-[100px] h-[100px]">
            <Image
              src={`https://www.gravatar.com/avatar/80dsdffd1a47sd01925f8020c02c2da363a36?s=110&d=identicon`}
              layout="responsive"
              width="100%"
              height="100%"
            />
          </div>
          <div className="flex-1 space-y-2">
            <span className="text-primary text-sm block font-semibold">
              Test
            </span>
            <span className="text-gray text-sm block">
              1/4/2022
            </span>
            <p className="text-text text-sm">
              Nhắm vào đối tượng các công ty nhỏ
              và văn phòng, sản phẩm này chính là
              sản phẩm mà bạn cần khi mới bắt đầu
              xây dựng một hệ thống NAS nội bộ với
              P/P (Giá cả/Hiệu Năng) tốt nhất mà
              bạn có thể tìm trên thị trường.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
