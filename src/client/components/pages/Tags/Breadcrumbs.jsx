import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'

export default ({ breadcrumbs, clickHandler, ...other }) =>
  <Breadcrumb {...other}>
    {
      breadcrumbs.map(item =>
        <React.Fragment key={item.id}>
          <Breadcrumb.Section
            active={item.isVisible}
            onClick={() => clickHandler(item.id)}>
            {item.title}
          </Breadcrumb.Section>
          { !item.isVisible && <Breadcrumb.Divider icon='right angle' /> }
        </React.Fragment>
      )
    }
  </Breadcrumb>
