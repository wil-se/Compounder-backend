
import { Response, Request } from "express";
import { IFarm } from "../../types/farm";
import Farm from "../../models/farm";

const getFarms = async (req: Request, res: Response): Promise<void> => {
  try {
    const farms: IFarm[] = await Farm.find();
    res.status(200).json({ farms });
  } catch (error) {
    throw error;
  }
};

const addFarm = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IFarm, 
        "name" |
        "routerId" |
        "pid" |
        "pendingFName" |
        "hasReferral" |
        "masterchefAddress" |
        "masterchefAbi" |
        "stakeTokenId" |
        "rewardTokenId" |
        "logoUrl"
    >;
       
    const farm: IFarm = new Farm({
        name: body.name,
        routerID: body.routerId,
        pid: body.pid,
        pendingFName: body.pendingFName,
        hasReferral: body.hasReferral,
        masterchefAddress: body.masterchefAddress,
        masterchefAbi: body.masterchefAbi,
        stakeTokenId: body.stakeTokenId,
        rewardTokenId: body.rewardTokenId,
        logoUrl: body.logoUrl,
    });

    const newFarm: IFarm = await farm.save();

    res.status(201).json(newFarm);
  } catch (error) {
    throw error;
  }
};

const getFarmById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const menu: IFarm | null = await Farm.findById({ _id: id });

    res.status(menu ? 200 : 404).json({ menu });
  } catch (error) {
    throw error;
  }
};

const deleteFarm = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedFarm: IFarm | null = await Farm.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedFarm,
    });
  } catch (error) {
    throw error;
  }
};

export { getFarms, addFarm, deleteFarm, getFarmById };