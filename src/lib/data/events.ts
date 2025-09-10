import type { Event } from "types/events";

const events: Event[] = [
  {
    image: "assets/events/3wines.png",
    wine: true,
    food: false,
    loto: false,
    duration: 60,
    date: "2025-10-01",
    title: "3 WINES EXPERIENCE",
    description:
      "Degustazione di tre vini al Rifugio del Vino e visita alla cantina e alla cantina",
    price: 25,
  },
  {
    image: "assets/events/5wines.png",
    wine: true,
    food: true,
    loto: false,
    duration: 90,
    date: "2038-01-19",
    title: "5 WINES EXPERIENCE",
    description:
      "Degustazione di 5 vini del territorio presso il rifugio dei vini in cantina e barricaia",
    price: 34,
  },
  {
    image: "assets/events/cheese.png",
    wine: true,
    food: true,
    loto: false,
    duration: 90,
    date: "2025-10-02",
    title: "WINE AND CHEESE EXPERIENCE",
    description:
      "Degustazione di 5 vini selezionati in abbinamento a 6 formaggi locali e visita alla cantina e barricaia",
    price: 45,
  },
  {
    image: "assets/events/topwines.png",
    wine: true,
    food: true,
    loto: false,
    duration: 100,
    date: "2025-12-03",
    title: "TOP WINES EXPERIENCE",
    description:
      "Degustazione di 5 vini di alta qualità accompagnati da un tagliere della gastronomia locale e visita alla cantina e barricaia",
    price: 65,
  },
  {
    image: "assets/events/coteau.png",
    wine: true,
    food: true,
    loto: false,
    duration: 120,
    date: "2000-00-00",
    title: "CÔTEAU LA TOUR EXPERIENCE",
    description:
      "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
    price: 75,
  },
  {
    image: "assets/events/winemaker.png",
    wine: true,
    food: true,
    loto: false,
    duration: 100,
    date: "2026-02-10",
    title: "WINEMAKER'S EXPERIENCE",
    description:
      "Scopri il mondo, raccontato dal nostro enologo Rafaele, dai vigneti alla cantina",
    price: 90,
  },
];

const hero: Event = {
  image: "assets/events/hero.png",
  wine: true,
  food: true,
  loto: true,
  duration: 120,
  date: "2025-10-01",
  title: "CÔTEAU LA TOUR EXPERIENCE",
  description:
    "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
  price: 346,
};

export { events, hero };
