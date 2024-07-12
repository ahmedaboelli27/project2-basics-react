export interface IProduct {
    id?: string | undefined;
    imgURL: string ;
    title: string ;
    description: string ;
    price: string;
    color: string[];
    category: {
        name: string;
        imgURL: string;
    }
}

export interface IInputList {
    id:string,
    lable:string,
    name:'title' | 'description' | 'price' | 'imgURL',
    type:string,
}