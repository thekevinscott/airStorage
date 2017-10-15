import { MissingArgumentError } from "../utils/errors";
import api from "../api";
import request from "./request";
import setItem from "./setItem";
import getItem from "./getItem";
import removeItem from "./removeItem";

const airStorage = {
  request,
  setItem,
  getItem,
  removeItem,
};

export default airStorage;
