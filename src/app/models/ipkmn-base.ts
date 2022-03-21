export interface IPkmnBase {
    id : number;
    name : string;
    types : IType[];
    front_default : string;
    back_default : string;
}

export interface IType{
    id: number;
    name : string
}
