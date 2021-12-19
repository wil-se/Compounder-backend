
import { Response, Request } from "express";
import { IUser } from "../../types/user";
import User from "../../models/user";
import * as mongoDB from "mongodb";
import { connectToDatabase } from "../../db/mongo";


const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    throw error;
  }
};

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, "nonce" | "address" | "username">;
    const user: IUser = new User({
      // nonce: body.nonce,
      address: body.address,
      username: body.username,
    });

    const newUser: IUser = await user.save();

    res.status(201).json(newUser);
  } catch (error) {
    throw error;
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<IUser, "id">;
    const user: IUser | null = await User.findById({ _id: body.id });

    res.status(user ? 200 : 404).json({ user });
  } catch (error) {
    throw error;
  }
};

const getUserByAddress = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IUser, "address">;
      const user: IUser[] | null = await User.find({address: body.address});
      console.log(user);
      res.status(user ? 200 : 404).json({ user });
    } catch (error) {
      throw error;
    }
  };

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updateUser: IUser | null = await User.findByIdAndUpdate(
      { _id: id },
      body
    );

    res.status(updateUser ? 200 : 404).json({
      menu: updateUser,
    });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedUser: IUser | null = await User.findByIdAndRemove(
      req.params.id
    );
    res.status(204).json({
      todo: deletedUser,
    });
  } catch (error) {
    throw error;
  }
};

export { getUsers, addUser, getUserById, getUserByAddress, updateUser, deleteUser };
