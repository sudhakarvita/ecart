export interface CartI {
    id?:any;
    totalPrice:number;
    totalQuantity:number;
    cartProducts:CartProducts[];
}

export interface CartProducts{
    id:any;
    title: string;
    price: number;
    quantity:number;
    total:number;
}
