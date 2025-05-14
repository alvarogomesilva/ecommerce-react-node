import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const isAutenticated = async (
    request: Request,
    response: Response,
    next: NextFunction) => {

    const authorization = request.headers['authorization']

    if (!authorization) {
        response.status(401).send({ message: 'unauthorized' })
        return
    }

    const token = authorization?.substring(7) as string

    try {
        const { sub } = verify(token, process.env.JWT_SECRET as string)
        request.userId = sub as string

        next()

    } catch (error) {
        response.status(401).send({ message: 'unauthorized' })
    }

}