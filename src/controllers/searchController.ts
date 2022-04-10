import { Request, Response } from "express";
import { Pet } from '../models/Pet';
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let queryString: string = req.query.q as string;
    let listPets = Pet.getPetByName(queryString);
    
    if(!queryString){
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        menu: createMenuObject(''),
        listPets
    });
}