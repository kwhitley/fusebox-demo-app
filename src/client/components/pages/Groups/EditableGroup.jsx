import React from 'react'
import PropTypes from 'prop-types'
import { withFormik, Field } from 'formik'
import { Input } from 'semantic-ui-react'
import classNames from 'classnames'

const EditableGroupForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  dirty
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        id={values.id}
        transparent
        className={classNames("editable-groupname", { dirty })}
        name="title"
        onChange={handleChange}
        placeholder="Group Name"
        value={values.title}
      />
    </form>
  )
}

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ title, id, editGroup }) => ({ title, id, editGroup }),
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    props.editGroup(props.id, { title: values.title })
  },
})(EditableGroupForm)


/*



<input
          className="ui input fluid"
          type="text"
          onChange={handleChange}
          onBlur={handleSubmit}
          value={values.title}
          name="title"
        />


*/
