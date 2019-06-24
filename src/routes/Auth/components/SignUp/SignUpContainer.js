import { connect } from 'react-redux';
import SignUp from './SignUp';
import { signUp } from '../../../../redux/actions/auth';

const mapStateToProps = state => ({ })

const mapDispatchToProps = {
    signUp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);