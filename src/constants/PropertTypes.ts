// constants/propertyTypes.ts

import {
  FaHome,
  FaBuilding,
  FaWarehouse,
} from "react-icons/fa";

import {
  LuHotel,
  LuHousePlus,
  LuLandPlot,
  LuTrees,
} from "react-icons/lu";

import {
  MdVilla,
  MdOutlineHolidayVillage,
} from "react-icons/md";

export const propertyTypes = [
  {
    label: "House",
    icon: FaHome,
    slug: "house",
  },
  {
    label: "Apartment",
    icon: FaBuilding,
    slug: "apartment",
  },
  {
    label: "Villa",
    icon: MdVilla,
    slug: "villa",
  },
  {
    label: "Studio",
    icon: LuHousePlus,
    slug: "studio",
  },
  {
    label: "Penthouse",
    icon: FaBuilding,
    slug: "penthouse",
  },
  {
    label: "Townhouse",
    icon: MdOutlineHolidayVillage,
    slug: "townhouse",
  },
  {
    label: "Farm House",
    icon: LuTrees,
    slug: "farm-house",
  },
  {
    label: "Land / Plot",
    icon: LuLandPlot,
    slug: "land-plot",
  },
  {
    label: "Commercial Office",
    icon: FaBuilding,
    slug: "commercial-office",
  },
  {
    label: "Shop",
    icon: FaWarehouse,
    slug: "shop",
  },
  {
    label: "Warehouse",
    icon: FaWarehouse,
    slug: "warehouse",
  },
  {
    label: "Hotel",
    icon: LuHotel,
    slug: "hotel",
  },
];