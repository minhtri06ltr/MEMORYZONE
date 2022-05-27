// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import product from "./product";
import user from "./user";
import review from "./review";
import order from "./order";
import orderItem from "./orderItem";
import shippingAddress from "./shippingAddress";
import paymentResult from "./paymentResult";
import reply from "./reply";

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
    orderItem,
    shippingAddress,
    paymentResult,
    reply,
  ]),
});
