import React from 'react';

const EditPost = ({post, inputs}) => {
  return (
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
  )
};

export default EditPost;
