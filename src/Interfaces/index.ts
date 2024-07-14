import {TProductName} from "../Types"

export interface IProduct {
    id: string;
    title: string;
    price: string;
    imgURL: string;
    description: string;
    color: string[];
    category: ICategory;
  }


export interface IInputList {
    id:string,
    lable:string,
    name: TProductName,
    type:string,
}

export interface ICategory {
    id?: string 
    name: string
    imgURL:string
}