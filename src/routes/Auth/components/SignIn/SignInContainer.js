import { connect } from "react-redux";
import SignIn from "./SignIn";
import { signIn } from "../../../../redux/actions/auth";

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
