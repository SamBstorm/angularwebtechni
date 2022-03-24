export interface IGetAllResult {
    count : number;
    next : string;
    previous : string;
    results : IPokeUrl[]
}

interface IPokeUrl{
    name : string;
    url : string;
}
