const { default: fetcher } = require("utils/fetcher");

const BASE_URL = 'https://api.coingecko.com/api/v3';
const url = endpoint => `${BASE_URL}${endpoint}`;

const get_token_price = id => fetcher.get(url(`/simple/price?ids=${id}&vs_currencies=usd`));

export default {
  get_token_price
}