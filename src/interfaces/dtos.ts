import dataItems from "../datasource/items.json";
import formData from "../datasource/form.json"
export interface TableData {
    id:number;
    type:SelectOption;
    number: string;
    summary: string;
    isPrivate: SwitchDisplay;
    status: SelectOption;
    service: SelectOption | null;
    author: SelectOption;
    created: string;
    updated: string;
    nextReviewOn: any;
}

export interface SelectOption {
    id: number;
    name: any;
    prefix?: string;
}

export type ItemsData = typeof dataItems;
export type FormDataDto = typeof formData;

export interface FieldData{
    structure:FieldDataDto;
    value: any;
}

export interface FieldDataDto {
    name: string;
    displayName: string;
    type: string;
    "x-options": Option[]
}

export interface Option{ value: number; text: string; }

export interface SwitchDisplay {
    switchValue: any;
    displays: any
}