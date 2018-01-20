import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
   return (
       <div classname="form-group">
          <label htmlFor={name}>{label}</label>
          <div classname="field">
            <select
              className="form-control"
              name={name}
              value={value}
              onChange={onChange}
              classname="form-control">
              <option>{defaultOption}</option>
              {
                options.map( option => {
                return <option key={option.value} value={option.value}>{option.text}</option>;
              })
              }
            </select>
            {error && <div classname="alert alert-danger">{error}</div>}
          </div>
       </div>
    );
};

SelectInput.propTypes = {
  name :  PropTypes.string.isRequired,
  lable : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  defaultOption : PropTypes.string,
  value : PropTypes.string,
  error : PropTypes.string,
  options : PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;