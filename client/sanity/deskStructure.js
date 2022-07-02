import S from "@sanity/desk-tool/structure-builder";
import { createSuperPane } from "sanity-super-pane";

import {
  CubeIcon,
  TicketIcon,
  NewspaperIcon,
  UserIcon,
  BeakerIcon,
  HomeIcon,
  CollectionIcon,
  ClipboardListIcon,
  ColorSwatchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  TagIcon,
} from "@heroicons/react/outline";
export default () =>
  S.list()
    .title("MEMORYZONE")
    .items([
      S.listItem()
        .title("Products")
        .icon(CubeIcon)
        .child(
          S.list()
            .id("productFeature")
            .title("Product Feature")
            .items([
              S.listItem()
                .title("Products")
                .icon(ShoppingCartIcon)
                .child(
                  createSuperPane("product", S),
                ),
              S.listItem()
                .title("Categories")
                .icon(CollectionIcon)
                .child(
                  createSuperPane("category", S),
                ),
              S.listItem()
                .title("Coupons")
                .icon(TicketIcon)
                .child(
                  createSuperPane("coupon", S),
                ),
              S.listItem()
                .title("Brands")
                .icon(BeakerIcon)
                .child(
                  createSuperPane("brand", S),
                ),
            ]),
        ),
      S.listItem()
        .title("Users")
        .icon(UserGroupIcon)
        .child(
          S.list()
            .id("userFeature")
            .title("User Feature")
            .items([
              S.listItem()
                .title("Users")
                .icon(UserIcon)
                .child(
                  createSuperPane("user", S),
                ),
              S.listItem()
                .title("Orders")
                .icon(ClipboardListIcon)
                .child(
                  createSuperPane("order", S),
                ),
            ]),
        ),
      S.listItem()
        .title("Shop")
        .icon(HomeIcon)
        .child(
          S.list()
            .id("shopFeature")
            .title("Shop Feature")
            .items([
              S.listItem()
                .title("Home Banners")
                .icon(ColorSwatchIcon)
                .child(
                  createSuperPane("banner", S),
                ),
              S.listItem()
                .title("News")
                .icon(NewspaperIcon)
                .child(createSuperPane("new", S)),
              S.listItem()
                .title("Media Tags")
                .icon(TagIcon)
                .child(
                  createSuperPane("media.tag", S),
                ),
            ]),
        ),
    ]);
