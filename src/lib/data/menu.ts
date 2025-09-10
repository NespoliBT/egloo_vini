import type { MenuItem } from "$lib/types/menu";

const menu: { left: MenuItem[]; right: MenuItem[] } = {
  left: [
    {
      label: "Identità",
      subMenu: [
        {
          label: "Chi siamo",
          link: "#chisiamo",
        },
        {
          label: "La nostra storia",
          link: "#storia",
        },
      ],
    },
    {
      label: "Vini",
      link: "#vini",
    },
    {
      label: "Devin Cosmetica",
      link: "#devincosmetica",
    },
  ],
  right: [
    {
      label: "Esperienza",
      subMenu: [
        {
          label: "La nostra ricetta",
          link: "#ricetta",
        },
        {
          label: "Galleria",
          link: "#galleria",
        },
      ],
    },
    {
      label: "Gift Card",
      link: "#giftcard",
    },
    {
      label: "Store Locator",
      link: "#storelocator",
    },
    {
      icon: "",
      id: "language",
      label: "IT",
      subMenu: [
        {
          label: "EN",
          link: "#",
        },
        {
          label: "FR",
          link: "#",
        },
      ],
    },
  ],
};

export default menu;
