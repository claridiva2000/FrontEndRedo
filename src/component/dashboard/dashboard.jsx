import React, {useEffect}from 'react';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';


const Dashboard = ({getCurrentProfile, auth, profile}) => {
  useEffect(()=>{
    getCurrentProfile()
  }, [])
  return (
    <section>

      <div>
        <div>
          <h1>ChefPortfolio</h1>
          <p>Welcome ,Chef Ramsey!</p>
          <div>
            <a href="">Register</a>
            <a href="">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
};



Dashboard.propTypes ={
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,


})

export default connect(mapStateToProps, {getCurrentProfile })(Dashboard) ;
