import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { 
  userRoutes, 
  compounderRoutes, 
  farmRoutes, 
  networkRoutes, 
  poolRoutes, 
  routerRoutes,
  tokenRoutes, 
} from "./routes";



const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(compounderRoutes);
app.use(farmRoutes);
app.use(networkRoutes);
app.use(poolRoutes);
app.use(routerRoutes);
app.use(tokenRoutes);



const uri: string = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
