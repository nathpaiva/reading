import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const EditPost = ({inputs, saveButton, cancelEditButton}) => {
  return (
    <div>
      <ul>
        <li>
          {inputs.map((values, idx) => {
            if (values.type === 'textarea') {
              return (<textarea key={`input-${idx}`} cols="30" required rows="10"
              name={values.name} ref={values.inputRef} defaultValue={values.defaultValue} />)
            }

            return (<input key={`input-${idx}`} type={values.type}
            name={values.name} ref={values.inputRef} defaultValue={values.defaultValue} />)
          })}
        </li>
      </ul>
      <Button variant="contained" onClick={() => saveButton()}>Save</Button>
      <Button variant="contained" onClick={() => cancelEditButton()} color="secondary">Cancel</Button>
    </div>
  )
};

EditPost.propTypes = {
  inputs: PropTypes.array.isRequired,
  saveButton: PropTypes.func.isRequired,
  cancelEditButton: PropTypes.func.isRequired,
};

export default EditPost;
