import { NextFunction, Request, Response } from "express";
import { prismaClient } from "..";
import { hashSync, compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { BadRequests } from "../exceptions/bad-requests";
import { ErrorCode } from "../exceptions/root";
import { UnprocessableEntity } from "../exceptions/validiation";
import { SignUpSchema } from "../schema/users";
import { NotFoundException } from "../exceptions/not-found";
import { UnauthorizedException } from "../exceptions/unauthorized";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* 
    En utilisant SignUpSchema.parse(req.body), le code valide et extrait les données du corps de la requête req.
    .body en utilisant les règles définies dans le module SignUpSchema.
     Cela peut inclure la vérification des types de données, la validation des champs requis, la normalisation des données, etc.
    
    */
  SignUpSchema.parse(req.body);
  const { fname, lname, email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (user) {
    //we call the custom exception class and throw an error
    new BadRequests("User already exists", ErrorCode.USER_ALREADY_EXISTS);
  }
  user = await prismaClient.user.create({
    data: { fname, lname, email, password: hashSync(password, 10) },
  });
  res.status(201).json(user);
};

/* *********** Login Block *********    */

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  let user = await prismaClient.user.findFirst({ where: { email } });
  if (!user) {
    //  res.status(400).json({message: 'User already exists'});
    throw new NotFoundException(
      "User does not exists",
      ErrorCode.USER_DOES_NOT_EXISTS
    );
  }
  // compare the password with the hash password in the database
  if (!compareSync(password, user.password)) {
    throw new BadRequests("Incorrect password", ErrorCode.INCORRECT_PASSWORD);
  }
  // generate token
  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  //
  // req.cookies.token ;
  // set the token in the cookie
  // res.cookie("token", token, { httpOnly: true });
  res.status(201).json({ user, token });
};

//? me -> return the logged in user

export const me = async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ user: req.user });
};
