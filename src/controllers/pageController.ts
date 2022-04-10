import { Request, Response } from "express";
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
    let listPets = Pet.getAllPets();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        listPets
    });
}

export const dogs = (req: Request, res: Response) => {
    let listPets = Pet.getTypePet('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Todos os cachorros',
            background: 'banner_dog.jpg'
        },
        listPets
    });
}

export const cats = (req: Request, res: Response) => {
    let listPets = Pet.getTypePet('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Todos os gatos',
            background: 'banner_cat.jpg'
        },
        listPets
    });
}

export const fishes = (req: Request, res: Response) => {
    let listPets = Pet.getTypePet('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Todos os peixes',
            background: 'banner_fish.jpg'
        },
        listPets
    });
}