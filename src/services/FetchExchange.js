import axios from "axios";

const FetchExchange = axios.create({
  baseURL: "https://economia.awesomeapi.com.br",
});

export default FetchExchange;
