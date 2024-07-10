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