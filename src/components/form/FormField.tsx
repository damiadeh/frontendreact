import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { FieldData, Option } from '../../interfaces/dtos'
import { getFormValueKey, getTableDataValue } from '../../utils/helpers';
import InputField from './InputField';

const FormField = ({ structure, value }: FieldData) => {
    const [inputValue, setInputValue] = useState<any>("");
    
    useEffect(() => {
        let objKey =  getFormValueKey(structure.name);
        let formValue = getTableDataValue(value[objKey])
        setInputValue(formValue)
    }, [value])

    return (
        <div className='form-box'>
            <InputField detail={structure} value={inputValue} />
        </div>
    )
}

FormField.propTypes = {}

export default FormField