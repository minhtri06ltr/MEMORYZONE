import MediaAssetSource from "part:sanity-plugin-media/asset-source";
import Webcam from "part:sanity-plugin-asset-source-webcam/image-asset-source";
import Cloudinary from "part:asset-source-cloudinary/image-asset-source";
import Unsplash from "part:sanity-plugin-asset-source-unsplash/image-asset-source";

export default [
  MediaAssetSource,
  Webcam,
  Cloudinary,
  Unsplash,
];
