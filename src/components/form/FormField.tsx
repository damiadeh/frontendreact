import { useEffect, useState } from 'react'
import { FieldData } from '../../interfaces/dtos'
import { getFormValueKey, getTableDataValue } from '../../utils/helpers';
import InputField from './InputField';

const FormField = ({ structure, value }: FieldData) => {
    const [inputValue, setInputValue] = useState<any>("");
    const [valueKey, setValueKey] = useState<string>("");

    useEffect(() => {
        let objKey = getFormValueKey(structure.name);
        setValueKey(objKey)
        let formValue = getTableDataValue(value[objKey])
        setInputValue(formValue)
    }, [structure, value])

    return (
        <div className='form-box'>
            <InputField detail={structure} value={inputValue} title={valueKey} />
        </div>
    )
}

export default FormField