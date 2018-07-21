import React from 'react';
import Button from '@material-ui/core/Button';

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

export default EditPost;
