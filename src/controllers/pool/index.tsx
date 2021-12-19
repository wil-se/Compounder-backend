
import { Response, Request } from "express";
import { IPool } from "../../types/pool";
import Pool from "../../models/pool";

const getPools = async (req: Request, res: Response): Promise<void> => {
  try {
    const pools: IPool[] = await Pool.find();
    res.status(200).json({ pools });
  } catch (error) {
    throw error;
  }
};

const addPool = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IPool, 
        "name" |
        "farmId" |
        "rewardTokenId" |
        "stakeTokenId" |
        "exitTokenId" |
        "id" |
        "logoUrl"
    >;
       
    const pool: IPool = new Pool({
        "name": body.name,
        "farmId": body.farmId,
        "rewardTokenId": body.rewardTokenId,
        "stakeTokenId": body.stakeTokenId,
        "exitTokenId": body.exitTokenId,
        "id": body.id,
        "logoUrl": body.logoUrl == "" ? "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg": body.logoUrl,
    });

    const newPool: IPool = await pool.save();

    res.status(201).json(newPool);
  } catch (error) {
    throw error;
  }
};

const getPoolById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const pool: IPool | null = await Pool.findById({ _id: id });

    res.status(pool ? 200 : 404).json({ pool });
  } catch (error) {
    throw error;
  }
};

const deletePool = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedPool: IPool | null = await Pool.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedPool,
    });
  } catch (error) {
    throw error;
  }
};

export { getPools, addPool, deletePool, getPoolById };