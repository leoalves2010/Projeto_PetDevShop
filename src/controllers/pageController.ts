import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('../views/pages/page.mustache');
}

export const dogs = (req: Request, res: Response) => {

}

export const cats = (req: Request, res: Response) => {

}

export const fishes = (req: Request, res: Response) => {

}