export interface IGetOneResult {
    id: number;
    name: string;
    types: ITypeSlotResult[];
    sprites: ISpritesResult;
}
interface ITypeSlotResult {
    slot: number;
    type: ITypeResult;
}

export interface ITypeResult {
    name: string;
    url: string;
}

export interface ITypeDamageResult extends ITypeResult{
    damage_relations : IDamageRelationsResult;
}

interface IDamageRelationsResult{
    double_damage_from : ITypeResult[],
    double_damage_to : ITypeResult[],
    half_damage_from : ITypeResult[],
    half_damage_to : ITypeResult[],
    no_damage_from : ITypeResult[],
    no_damage_to : ITypeResult[],
}

interface ISpritesResult {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}
