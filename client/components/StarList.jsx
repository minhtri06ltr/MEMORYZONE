import { StarIcon } from "@heroicons/react/solid";

const StarList = ({ quantity, width, height }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((number) =>
        number <= quantity ? (
          <StarIcon
            key={number}
            className="text-[gold] cursor-pointer"
            width={width}
            height={height}
          />
        ) : (
          <StarIcon
            key={number}
            color="#cccccc"
            className="cursor-pointer"
            width={width}
            height={height}
          />
        )
      )}
    </div>
  );
};

export default StarList;
