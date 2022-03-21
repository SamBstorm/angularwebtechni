import { ILogin } from "./ilogin";

export interface IUser extends ILogin{
    lastname : string;
    firstname : string;
    birthdate : Date;
}
