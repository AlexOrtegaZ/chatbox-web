import { connect } from 'react-redux';
import SignUp from './SignUp';
import { signUp, validateUser } from '../../../../redux/actions/auth';

const mapStateToProps = state => ({ user: state.auth.user })

const mapDispatchToProps = {
    signUp,
    validateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);