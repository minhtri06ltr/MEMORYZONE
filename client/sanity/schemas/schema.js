// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product";
import user from "./user";
import review from "./review";
import order from "./order";
import shippingAddress from "./shippingAddress";
import reply from "./reply";
import orderItem from "./orderItem";
import seoImage from "./seoImage";
import youtube from "./youtube";
import productDetail from "./productDetail";
import specification from "./specification";
import _new from "./new";
import blockTitle from "./blockTitle";
import newComment from "./newComment";
import content from "./content";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    product,
    review,
    user,
    order,
    shippingAddress,
    orderItem,
    reply,
    seoImage,
    youtube,
    productDetail,
    specification,
    _new,
    blockTitle,
    newComment,
    content,
  ]),
});
