import { connect } from 'react-redux';
import Auth from './Auth';
import { validateUser } from '../../redux/actions/auth';

const mapStateToProps = state => ({ user: state.auth.user })

const mapDispatchToProps = {
    validateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);