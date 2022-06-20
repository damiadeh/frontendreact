import { InputFieldProps } from '../../interfaces/props/TableProps'
import { Option } from '../../interfaces/dtos'

const InputField = ({ detail, value, title }: InputFieldProps) => {
  return (
    <div>
      {detail.type === "checkbox" && <>
        <input checked={value} type="checkbox" onChange={() => { }} />
        <label>{detail.displayName}</label>
      </>}
      {detail.type === "select" && <div>
        <label>{detail.displayName}</label>
        <select className='input-text' value={value} onChange={() => { }} title={`${title}-input`}>
          {detail["x-options"].map((option: Option, index: number) => <option key={index} value={option.value}>{option.text}</option>)}
        </select>
      </div>}
      {detail.type === "text" && <div>
        <label>{detail.displayName}</label>
        <input value={value} type="text" title={`${title}-input`} className='input-text' onChange={() => { }} />
      </div>}
    </div>
  )
}

InputField.propTypes = {}

export default InputField