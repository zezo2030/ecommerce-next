const { default: axiosClient } = require("./axiosClinets");

const getLastestProducts = () => axiosClient.get("/products");

export default { getLastestProducts };
