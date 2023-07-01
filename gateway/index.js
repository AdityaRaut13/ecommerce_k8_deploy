/** @format */

const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");
const env = require("dotenv");
const morgan = require("morgan");
env.config();
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const customer = createProxyMiddleware({
  target: `http://${process.env.CUSTOMER}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/customer`]: "",
  },
});
const shopping = createProxyMiddleware({
  target: `http://${process.env.SHOPPING}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/shopping`]: "",
  },
});
const product = createProxyMiddleware({
  target: `http://${process.env.PRODUCT}`,
  changeOrigin: true,
  pathRewrite: {
    [`^/product`]: "",
  },
});

app.use("/customer", customer);
app.use("/shopping", shopping);
app.use("/product", product); //products

app.listen(process.env.PORT, () => {
  console.log(`Gateway service is running at ${process.env.PORT}`);
});
