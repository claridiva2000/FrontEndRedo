import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../messages/spinner';
import Chefcardlist from '../cardlist/chefcardlist';
import AddRecipe from '../addrecipe/AddRecipe'

const Dashboard = ({
  getCurrentProfile,
  auth,
  chef,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Dashboard</h1>
      <p>Welcome, Chef {chef.lastname}</p>
      <img src={chef.profilepic} alt="" />
      <p>Location: {chef.location}</p>
      <p>email: {chef.email}</p>
      <div>
        <AddRecipe/>
        <Chefcardlist name={chef.firstname} />
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  chef: state.profile.chef
  // recipes: state.profile.recipes
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
