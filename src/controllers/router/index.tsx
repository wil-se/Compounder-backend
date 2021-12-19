
import { Response, Request } from "express";
import { IRouter } from "../../types/router";
import Router from "../../models/router";

const getRouters = async (req: Request, res: Response): Promise<void> => {
  try {
    const routers: IRouter[] = await Router.find();
    res.status(200).json({ routers });
  } catch (error) {
    throw error;
  }
};

const addRouter = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IRouter, 
        "address" |
        "abi" |
        "networkId" |
        "name" |
        "logoUrl"
    >;
    
    const router: IRouter = new Router({
        address: body.address,
        abi: body.abi,
        networkId: body.networkId,
        name: body.name,
        logoUrl: body.logoUrl,
    });

    const newRouter: IRouter = await router.save();

    res.status(201).json(newRouter);
  } catch (error) {
    throw error;
  }
};

const getRouterById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const router: IRouter | null = await Router.findById({ _id: id });

    res.status(router ? 200 : 404).json({ router });
  } catch (error) {
    throw error;
  }
};

const deleteRouter = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedRouter: IRouter | null = await Router.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedRouter,
    });
  } catch (error) {
    throw error;
  }
};

export { getRouters, addRouter, deleteRouter, getRouterById };