const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
const _dirname = path.resolve();

app.use(cors());
app.use(express.json());

//register and login Users
app.use("/api/auth", require("./routes/authRoutes"));
// main herobanner
app.use("/api/herobanners", require("./routes/heroBanner.routes"));
//contact page
app.use("/api/contacts", require("./routes/contact.routes"));
//We’re talking rich, creamy, satisfyingly smooth with a tangy zip in every bite. on the home page
app.use("/api/category",require("./routes/category.routes"));
// Lebagol’s premium ice cream on the home page || Products list
app.use("/api/premium",require("./routes/premium.routes"));
//Reviews on  home page
app.use("/api/reviews",require("./routes/reviews.routes"));
//Happy clients say on a our story page
app.use("/api/clientview",require("./routes/clientview.routes"));
//blog model on the blog page
app.use("/api/blog",require("./routes/blog.routes"));
//menu model on the menu page
app.use("/api/menu",require("./routes/menu.routes"));
//faqs model on the faqs page
app.use("/api/faqs",require("./routes/faqs.routes"));
//location model on the home page
app.use("/api/location",require("./routes/restaurantlocation.routes"));
//cart model on the home page
app.use("/api/cart",require("./routes/cart.routes"));
//like model on the home page
app.use("/api/like",require("./routes/like.routes"));
//enquiry model on the home page
app.use("/api/enquiry",require("./routes/enquiry.routes"));
//orders
app.use("/api/orders", require("./routes/order.routes"));


app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
);

// Base route
app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);