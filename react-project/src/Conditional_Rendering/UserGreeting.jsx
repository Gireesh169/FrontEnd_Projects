import PropTypes from "prop-types";



function UserGreeting(props) {
   const welcome=<h2>Welcome back, {props.username}!</h2>;
   const pleaseLogin=<h2>Please log in to continue.</h2>;
   return (
    
       props.isLoggedIn ? welcome : pleaseLogin
     
   );
    
}
UserGreeting.propTypes={
    isLoggedIn:PropTypes.bool.isRequired,
    username:PropTypes.string
};
UserGreeting.defaultProps={
    username:"Guest",
    isLoggedIn:false
};
export default UserGreeting;