import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';

export async function errorHandler(
    error: Error,
    _: Request,
    response: Response,
    next: NextFunction
) {
    if (error instanceof ZodError) {
        response.status(400).send({
            message: 'Validation error.',
            issues: error.format(),
        });
        return;
    }

    response.status(500).send({
        message: 'Internal server error.',
    });
}
