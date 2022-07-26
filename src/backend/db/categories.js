import { v4 as uuid } from "uuid";


import riot0 from '../../asset/img/riot0.jpg'
import riot1 from '../../asset/img/riot1.jpg'
import riot2 from '../../asset/img/riot2.jpg'
import riot3 from '../../asset/img/riot3.jpg'
import riot4 from '../../asset/img/riot4.jpg'

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */


export const categories = [
  {
    _id: uuid(),
    imgUrl:riot0,
    btnText:'Check Now',
    categoryName: "Star Guardian Version",
     title:
      "Star Guardian Version",
  },
  {
    _id: uuid(),
    imgUrl:riot1,
    btnText:'Check Now',
    categoryName: "sessions lol",
     title:
      "sessions lol",
  },
  {
    _id: uuid(),
    imgUrl:riot2,
    btnText:'Check Now',
    categoryName: "Pentakill",
     title:
      "Pentakill",
  },
  {
    _id: uuid(),
    imgUrl:riot3,
    btnText:'Check Now',
    categoryName: "Warsongs",
     title:
      "Warsongs",
  },
  {
    _id: uuid(),
    imgUrl:riot4,
    btnText:'Check Now',
    categoryName: "kDa",
     title:
      "kDa",
  },
];
