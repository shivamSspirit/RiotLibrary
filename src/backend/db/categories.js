import { v4 as uuid } from "uuid";


import cate0 from '../../asset/img/istockphoto-1308451777-170667a.jpeg'
import cate1 from '../../asset/img/istockphoto-1287065554-170667a.jpeg'
import cate2 from '../../asset/img/photo-1487180144351-b8472da7d491.avif'
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */


export const categories = [
  {
    _id: uuid(),
    imgUrl:cate0,
    btnText:'Check Now',
    categoryName: "Computer Programming",
     title:
      "Computer programming",
  },
  {
    _id: uuid(),
    imgUrl:cate1,
    btnText:'Check Now',
    categoryName: "Frontend Development",
     title:
      "Front development",
  },
  {
    _id: uuid(),
    imgUrl:cate2,
    btnText:'Check Now',
    categoryName: "Backend Development",
     title:
      "Backend Development",
  },
  {
    _id: uuid(),
    imgUrl:cate2,
    btnText:'Check Now',
    categoryName: "full stack Development",
     title:
      "full stack Development",
  },
  {
    _id: uuid(),
    imgUrl:cate2,
    btnText:'Check Now',
    categoryName: "web3",
     title:
      "Blockchanin Development",
  },
];
