import { Router } from "express";
import {
  getMenus,
  addMenu,
  updateMenu,
  deleteMenu,
  retrieveMenu,
} from "../controllers/menus";

import {
  getUsers,
  addUser,
  getUserByAddress,
  getUserById,
} from "../controllers/user";

import {
  getCompounders,
  addCompounder,
  getCompounderById,
} from "../controllers/compounder";

import {
  getFarms,
  addFarm,
  getFarmById,
} from "../controllers/farm";

import {
  getNetworks,
  addNetwork,
  getNetworkById,
} from "../controllers/network";

import {
  getPools,
  addPool,
  getPoolById,
} from "../controllers/pool";

import {
  getRouters,
  addRouter,
  getRouterById,
} from "../controllers/router";

import {
  getTokens,
  addToken,
  getTokenById,
} from "../controllers/token";


const menuRoutes: Router = Router();
menuRoutes.get("/menu", getMenus);
menuRoutes.post("/menu", addMenu);
menuRoutes.put("/menu/:id", updateMenu);
menuRoutes.delete("/menu/:id", deleteMenu);
menuRoutes.get("/menu/:id", retrieveMenu);

const userRoutes: Router = Router();
userRoutes.get("/user", getUsers);
userRoutes.get("/user/:id", getUserById);
userRoutes.post("/user", addUser);
userRoutes.get("/user/address", getUserByAddress);

const compounderRoutes: Router = Router();
compounderRoutes.get("/compounder", getCompounders);
compounderRoutes.post("/compounder", addCompounder);
compounderRoutes.get("/compounder/:id", getCompounderById);

const farmRoutes: Router = Router();
farmRoutes.get("/farm", getFarms);
farmRoutes.post("/farm", addFarm);
farmRoutes.get("/farm/:id", getFarmById);

const networkRoutes: Router = Router();
networkRoutes.get("/network", getNetworks);
networkRoutes.post("/network", addNetwork);
networkRoutes.get("/network/:id", getNetworkById);

const poolRoutes: Router = Router();
poolRoutes.get("/pool", getPools);
poolRoutes.post("/pool", addPool);
poolRoutes.get("/pool/:id", getPoolById);

const routerRoutes: Router = Router();
routerRoutes.get("/router", getRouters);
routerRoutes.post("/router", addRouter);
routerRoutes.get("/router/:id", getRouterById);

const tokenRoutes: Router = Router();
tokenRoutes.get("/token", getTokens);
tokenRoutes.post("/token", addToken);
tokenRoutes.get("/token/:id", getTokenById);


export { 
  menuRoutes, 
  userRoutes, 
  compounderRoutes, 
  farmRoutes, 
  networkRoutes, 
  poolRoutes, 
  routerRoutes,
  tokenRoutes
 };
