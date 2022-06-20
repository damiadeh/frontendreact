import { MouseEventHandler } from "react";
import { FieldDataDto, FormDataDto } from "../dtos";

export interface TableProps{
    tableData: Object[];
    headingColumns: string[],
    onRowClick: Function;
}

export interface FormProps{
    data: FormDataDto;
    cancel:MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface InputFieldProps {
    detail: FieldDataDto;
    value: any;
}