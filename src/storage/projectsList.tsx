import img1 from "../assets/images/projects/1.png";
import img2 from "../assets/images/projects/2.png";
import img3 from "../assets/images/projects/3.png";
import img4 from "../assets/images/projects/4.png";
import img5 from "../assets/images/projects/5.png";
import img6 from "../assets/images/projects/6.png";
import img7 from "../assets/images/projects/7.png";
import img8 from "../assets/images/projects/8.png";
import img9 from "../assets/images/projects/9.webp";
import img10 from "../assets/images/projects/10.png";
import img11 from "../assets/images/projects/11.png";
import img12 from "../assets/images/projects/12.png";
import img13 from "../assets/images/projects/13.png";
import img14 from "../assets/images/projects/14.png";
import img15 from "../assets/images/projects/15.png";
import img16 from "../assets/images/projects/16.webp";
import img17 from "../assets/images/projects/17.webp";
import img18 from "../assets/images/projects/18.jpg";
import img19 from "../assets/images/projects/19.jpg";
import img20 from "../assets/images/projects/20.jpg";
import img21 from "../assets/images/projects/21.jpg";

export type TprojectItem = {
  id: number;
  type: number;
  image: string;
  name: string;
  link: null | string;
};
// TYPES
//  | 0 - website |
//  | 1 - design |
//  | 2 - adprint |
export const projectsList: TprojectItem[] = [
  {
    id: 1,
    type: 0,
    image: img1,
    name: "Camp",
    link: "https://lukafexshvelashvili.github.io/CampWebsite-React-TS/",
  },
  { id: 2, type: 0, image: img2, name: "OnHome", link: "https://onhome.ge/" },
  {
    id: 3,
    type: 0,
    image: img3,
    name: "Colab",
    link: "https://lukafexshvelashvili.github.io/ColabWebsite/",
  },
  {
    id: 4,
    type: 0,
    image: img4,
    name: "Eventoy",
    link: "https://lukafexshvelashvili.github.io/Eventoy/",
  },
  {
    id: 5,
    type: 0,
    image: img5,
    name: "Book Store",
    link: "https://lukafexshvelashvili.github.io/BookStoreWebsite/",
  },
  {
    id: 6,
    type: 0,
    image: img6,
    name: "Rations",
    link: "https://lukafexshvelashvili.github.io/Rations/",
  },
  {
    id: 7,
    type: 0,
    image: img7,
    name: "Bravay",
    link: "https://lukafexshvelashvili.github.io/NFT-Landing-Page/",
  },
  {
    id: 8,
    type: 0,
    image: img8,
    name: "Coeluso",
    link: "https://lukafexshvelashvili.github.io/CoelusoWebsite/",
  },
  {
    id: 9,
    type: 1,
    image: img9,
    name: "Meraba.ge",
    link: "https://meraba.ge/",
  },
  {
    id: 10,
    type: 0,
    image: img10,
    name: "autokeys.ge",
    link: "https://autokeys.ge/",
  },
  { id: 11, type: 1, image: img11, name: "KICKBOXING", link: null },
  {
    id: 12,
    type: 0,
    image: img12,
    name: "Modern Watch",
    link: "https://moderndesigners.github.io/ModernWatch/",
  },
  {
    id: 13,
    type: 1,
    image: img13,
    name: "Web Development Presentation",
    link: null,
  },
  {
    id: 14,
    type: 1,
    image: img14,
    name: "DNS Development Presentation",
    link: null,
  },
  { id: 15, type: 1, image: img15, name: "Spec Borbali", link: null },
  {
    id: 16,
    type: 0,
    image: img16,
    name: "FrightLand",
    link: "https://atukajikuridze.github.io/FrightLand/",
  },
  {
    id: 17,
    type: 0,
    image: img17,
    name: "HooBank",
    link: "https://atukajikuridze.github.io/hoobank/",
  },
  {
    id: 18,
    type: 2,
    image: img18,
    name: "CITROEN",
    link: null,
  },
  {
    id: 19,
    type: 2,
    image: img19,
    name: "Cafe",
    link: null,
  },
  {
    id: 22,
    type: 2,
    image: img20,
    name: "WOOD FACTORY",
    link: null,
  },
  {
    id: 21,
    type: 2,
    image: img21,
    name: "CAR WASH",
    link: null,
  },
];
