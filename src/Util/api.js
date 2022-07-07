import axios from "axios";

export const getNextCat = () => axios.get("https://aws.random.cat/meow");
