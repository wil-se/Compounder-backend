
import { Response, Request } from "express";
import { ICompounder } from "../../types/compounder";
import Compounder from "../../models/compounder";

const getCompounders = async (req: Request, res: Response): Promise<void> => {
  try {
    const compounders: ICompounder[] = await Compounder.find();
    res.status(200).json({ compounders });
  } catch (error) {
    throw error;
  }
};

const addCompounder = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ICompounder, 
    "poolID" |
    "poolNumber" |
    "logoUrl" |
    "name" |
    "tick" |
    "gasBoost" |
    "depositSpeedup" |
    "emergencySpeedup" |
    "harvestSpeedup" |
    "swapSpeedup" |
    "approveSpeedup" |
    "deltaSeconds" |
    "theshold" |
    "slippage" |
    "stdGas" >;
    
    const compounder: ICompounder = new Compounder({
      poolID: body.poolID, 
      poolNumber:body.poolNumber,
      logoUrl:body.logoUrl,
      name:body.name,
      tick:body.tick,
      gasBoost:body.gasBoost,
      depositSpeedup:body.depositSpeedup,
      emergencySpeedup:body.emergencySpeedup,
      harvestSpeedup:body.harvestSpeedup,
      swapSpeedup:body.swapSpeedup,
      approveSpeedup:body.approveSpeedup,
      deltaSeconds:body.deltaSeconds,
      theshold:body.theshold,
      slippage:body.slippage,
      stdGas:body.stdGas,
    });

    const newCompounder: ICompounder = await compounder.save();

    res.status(201).json(newCompounder);
  } catch (error) {
    throw error;
  }
};

const getCompounderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const menu: ICompounder | null = await Compounder.findById({ _id: id });

    res.status(menu ? 200 : 404).json({ menu });
  } catch (error) {
    throw error;
  }
};

const deleteCompounder = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCompounder: ICompounder | null = await Compounder.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedCompounder,
    });
  } catch (error) {
    throw error;
  }
};

export { getCompounders, addCompounder, deleteCompounder, getCompounderById };
