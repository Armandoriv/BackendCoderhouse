import express from "express";
import productRouter from "./routes/products.js";
import cartRouter from "./routes/cart.js";

//Creando Server Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

//Creando Loacal host 8080
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () =>
  console.log(`Express por Loacal host ${server.address().port}`)
);
server.on("error", (error) => console.log(`Error en servidor ${error}`));