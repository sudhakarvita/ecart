import { Address } from "./address";

export interface User {
    id?:string;
    fname:string,
    lname:string,
    fullName:string,
    gender:string;
    email:string;
    mobile:number;
    password:string;
    roleType:string;
    address: Address;
    check:boolean;

}
