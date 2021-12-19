
import { Response, Request } from "express";
import { IToken } from "../../types/token";
import Token from "../../models/token";

const getTokens = async (req: Request, res: Response): Promise<void> => {
  try {
    const tokens: IToken[] = await Token.find();
    res.status(200).json({ tokens });
  } catch (error) {
    throw error;
  }
};

const addToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IToken, 
        "address" |
        "abi" |
        "networkId" |
        "name" |
        "logoUrl" 
    >;
    
    const router: IToken = new Token({
        address: body.address,
        abi: body.abi,
        networkId: body.networkId,
        name: body.name,
        logoUrl: body.logoUrl == "" ? "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/svg/color/generic.svg": body.logoUrl,
    });

    const newToken: IToken = await router.save();

    res.status(201).json(newToken);
  } catch (error) {
    throw error;
  }
};

const getTokenById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    console.log(id);
    const token: IToken | null = await Token.findById({ _id: id });

    res.status(token ? 200 : 404).json({ token });
  } catch (error) {
    throw error;
  }
};

const deleteToken = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedToken: IToken | null = await Token.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedToken,
    });
  } catch (error) {
    throw error;
  }
};

export { getTokens, addToken, deleteToken, getTokenById };