import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import { NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

const Logout = (props) => {

  Logout.propTypes = {
    logout: PropTypes.func.isRequired
  }

  return (
    <Fragment>
      <NavLink onClick={props.logout} href="#">
        Logout
      </NavLink>
    </Fragment>
  )
}

export default connect(null, { logout })(Logout);
