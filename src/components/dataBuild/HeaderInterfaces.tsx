import { Dispatch, SetStateAction } from "react";

export interface IFilterProps {
    textoInput:string;
    setTextoInput: Dispatch<SetStateAction<string>>;
    setCheckedButton:Dispatch<SetStateAction<string>>
}

export interface IHeaderProps {
    textoInput:string;
    setTextoInput: Dispatch<SetStateAction<string>>;
    checkedButton: string;
    setCheckedButton:Dispatch<SetStateAction<string>>
}