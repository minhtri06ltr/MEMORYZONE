import ReactImageMagnify from "react-image-magnify";

const test = () => {
  return (
    <div className="w-[363px] h-[363px] p-10">
      <ReactImageMagnify
        {...{
          smallImage: {
            isFluidWidth: true,
            src: `https://bizweb.sapocdn.net/thumb/small/100/329/122/products/laptop-gaming-msi-bravo-15-b5dd-265vn-5d8f4053-3d27-4dd0-a8fd-e115b8fb4f07.jpg?v=1639191464460`,
          },
          largeImage: {
            src: `https://bizweb.sapocdn.net/thumb/small/100/329/122/products/laptop-gaming-msi-bravo-15-b5dd-265vn-5d8f4053-3d27-4dd0-a8fd-e115b8fb4f07.jpg?v=1639191464460`,

            width: 3000,
            height: 1000,
          },
          enlargedImageContainerStyle: {
            objectFit: "contain",
            transform: "scale(2,2)",
          },
        }}
      />
    </div>
  );
};

export default test;
