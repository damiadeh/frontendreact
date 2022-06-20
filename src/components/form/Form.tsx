import { useContext } from 'react'
import PropTypes from 'prop-types'
import { FieldDataDto } from '../../interfaces/dtos'
import { Container } from '@mui/material'
import FormField from './FormField'
import { FormProps } from '../../interfaces/props/TableProps'
import { StoreContext } from '../../context/store'

const Form = ({ data, cancel }: FormProps) => {
    const { state } = useContext(StoreContext);
    return (
        <Container>
            {data.forms.map((form: any, index: number) =>
                <div key={index}>
                    <h2>{form.displayName}</h2>
                    <hr />
                    <div>
                        {form.fieldsets.map((fieldset: any, index: number) => <div key={index}>
                            <h4 className='form-header'>{fieldset.displayName}</h4>
                            <div>
                                {fieldset.fields.map((field: FieldDataDto, index: number) => <FormField key={index} structure={field} value={state.selectedData} />)}
                            </div>
                        </div>)}
                    </div>
                </div>)}
            <button className='btn-close' onClick={cancel}>Close</button>
        </Container>
    )
}

Form.propTypes = {
    data: PropTypes.object.isRequired,
    cancel: PropTypes.func
}

export default Form