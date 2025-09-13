const { default: axiosClient } = require("./axiosClinets");

const getLastestProducts = () => axiosClient.get("/products");

// تجيب المنتجات المضافة خلال آخر أسبوع (7 أيام)
// - نستخدم فلاتر Strapi على الحقلين: publishedAt أو createdAt (بالـ OR) لضمان الالتقاط.
// - فرز تنازلي حسب تاريخ النشر.
// - يمكن تغيير limit و populate و sort عند الحاجة.
const getProductsAddedWithinLastWeek = ({
  limit = 8,
  populate = "*",
  sort = "publishedAt:desc",
} = {}) => {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  const params = new URLSearchParams();
  params.set("filters[$or][0][publishedAt][$gte]", since);
  params.set("filters[$or][1][createdAt][$gte]", since);
  params.set("sort", sort);
  params.set("pagination[limit]", String(limit));
  params.set("populate", populate);

  return axiosClient.get(`/products?${params.toString()}`);
};

const getTopSellingProducts = ({
  limit = 8,
  populate = "*",
  sort = "salesCount:desc",
} = {}) => {
  const params = new URLSearchParams();
  params.set("sort", sort);
  params.set("pagination[limit]", String(limit));
  params.set("populate", populate);

  return axiosClient.get(`/products?${params.toString()}`);
};
export default {
  getLastestProducts,
  getProductsAddedWithinLastWeek,
  getTopSellingProducts,
};
export {
  getLastestProducts,
  getProductsAddedWithinLastWeek,
  getTopSellingProducts,
};
