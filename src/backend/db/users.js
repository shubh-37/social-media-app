import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Mohit",
    lastName: "Rana",
    username: "mohitrana",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Prateek",
    lastName: "Mishra",
    username: "prateekmishra",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Shubh",
    lastName: "Arya",
    username: "shubh37",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "viratkohli",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Soni",
    username: "shubhamsoni",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "",
    portfolio_link: "",
    avatar: "https://i.ibb.co/kSXJLZg/avataaars-1.png"
  }
];
