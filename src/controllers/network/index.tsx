
import { Response, Request } from "express";
import { INetwork } from "../../types/network";
import Network from "../../models/network";

const getNetworks = async (req: Request, res: Response): Promise<void> => {
  try {
    const networks: INetwork[] = await Network.find();
    res.status(200).json({ networks });
  } catch (error) {
    throw error;
  }
};

const addNetwork = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<INetwork, 
        "id" |
        "name" |
        "wss" |
        "rpc" |
        "knownAddresses" |
        "logoUrl"
    >;
       
    const network: INetwork = new Network({
        "id": body.id,
        "name": body.name,
        "wss": body.wss,
        "rpc": body.rpc,
        "knownAddresses": body.knownAddresses,
        "logoUrl": body.logoUrl,
    });

    const newNetwork: INetwork = await network.save();

    res.status(201).json(newNetwork);
  } catch (error) {
    throw error;
  }
};

const getNetworkById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const net: INetwork | null = await Network.findById({ _id: id });

    res.status(net ? 200 : 404).json({ net });
  } catch (error) {
    throw error;
  }
};

const deleteNetwork = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedNetwork: INetwork | null = await Network.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedNetwork,
    });
  } catch (error) {
    throw error;
  }
};

export { getNetworks, addNetwork, deleteNetwork, getNetworkById };