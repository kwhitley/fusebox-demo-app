import React from 'react'
import PropTypes from 'prop-types'
import Button from '@arundo/ads-react/Button'
import Grid from '@arundo/ads-react/Grid'
import Segment from '@arundo/ads-react/Segment'
import Header from '@arundo/ads-react/Header'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import Dependencies from './Dependencies'
import ErrorMessage from '../../messages/ErrorMessage'
import api from '../../../state/api'

// this page simulates an API request that may or may not fail en-route

const Package = ({ pkg, deps, devDeps, timesLoaded, loadPackageInfo }) =>
  <div className="package-loader">
    <Button fluid disabled={pkg.isLoading} onClick={loadPackageInfo} loading={pkg.isLoading}>
      { deps.length ? `Reload Package (loaded ${timesLoaded} times)` : 'Load Package' }
    </Button>
    { deps.length > 0 && <Dependencies deps={deps} devDeps={devDeps} /> }
    { pkg.error && <ErrorMessage message={pkg.error} /> }

    <Header size="large">Header</Header>
    <Grid columns="equal" divided inverted stackable>
      <Grid.Row divided>
        <Grid.Column width={4}>
          <Segment vertical>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod vehicula nisl eu imperdiet. Etiam ultricies massa odio, sed laoreet sem lacinia vitae. Nunc tristique arcu non diam pretium, at ornare risus mattis. Curabitur sit amet diam porta, tristique nulla vitae, aliquet sem. Sed sit amet leo sit amet arcu pulvinar fermentum. Integer lacinia pulvinar velit nec euismod. Phasellus rhoncus leo vel commodo fermentum. Pellentesque sed varius augue. Maecenas nec ultricies tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec bibendum nunc est, in fringilla tortor laoreet non. Morbi convallis venenatis purus vitae vulputate.
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment vertical>
            Praesent arcu ante, vestibulum vel congue eu, porta vitae purus. Phasellus pretium porttitor lorem. Sed at eros ullamcorper, elementum leo at, gravida urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam commodo libero non lacus viverra tristique. Fusce vitae neque non mauris volutpat gravida. Sed aliquam risus eu orci tincidunt ultrices. Pellentesque viverra, enim fringilla pulvinar fermentum, eros elit rhoncus est, nec euismod lectus turpis sed justo.
          </Segment>
        </Grid.Column>
        <Grid.Column width={3}>
          <Segment vertical size="tiny">
            <blockquote>Phasellus a quam tortor. Morbi placerat auctor lacus quis sagittis.</blockquote>
            Nulla vitae ipsum lobortis, ornare est ut, consectetur urna. Nam eu metus aliquet, pretium lacus convallis, facilisis tortor. Phasellus non laoreet arcu. Suspendisse sem enim, consectetur id feugiat non, blandit sit amet metus. Duis mattis purus efficitur, sollicitudin orci at, feugiat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed quam dolor, rutrum in elit eu, pharetra volutpat odio. Vestibulum quis ultrices erat. Etiam egestas, mi id iaculis varius, nibh nisl volutpat urna, nec consequat nunc massa id arcu. Suspendisse gravida quis diam laoreet volutpat. Praesent consequat leo leo, ut pellentesque velit luctus ut. Aenean massa magna, egestas id semper ac, placerat at ex.
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>

Package.propTypes = {
  pkg: PropTypes.object.isRequired,
  deps: PropTypes.array,
  devDeps: PropTypes.array,
  timesLoaded: PropTypes.number.isRequired,
  loadPackageInfo: PropTypes.func.isRequired,
}

Package.defaultProps = {
  deps: [],
  devDeps: []
}

const mapStateToProps = state => ({
  pkg: api.getPackage(state),
  deps: api.getDependenciesAsArray(state),
  devDeps: api.getDevDependenciesAsArray(state),
  timesLoaded: api.getTimesLoaded(state),
})

export const ConnectedPackage = connect(mapStateToProps, {
  loadPackageInfo: api.actions.loadPackageInfo
})(fromImmutable(Package))

export default Package
