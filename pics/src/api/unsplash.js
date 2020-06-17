import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Z3JeMUUMfAKH-siC6BZ0mjG5Mmi1J3uJN1g3IGeb0pI",
  },
});
