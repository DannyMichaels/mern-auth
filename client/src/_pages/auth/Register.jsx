import { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    errors: {},
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    };
    props.registerUser(newUser, props.history);

    console.log({ newUser });
  };
  const { errors } = formData;

  useEffect(() => {
    if (props.errors) {
      setFormData((prevState) => ({
        ...prevState,
        errors: props.errors,
      }));
    }
  }, [props.errors]);

  useEffect(() => {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (props.auth.isAuthenticated) {
      props.history.push('/dashboard');
    }
  }, [props.auth.isAuthenticated, props.history]);

  return (
    <div className="container">
      <div className="row">
        <div className="col s8 offset-s2">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to home
          </Link>
          <div className="col s12" style={{ paddingLeft: '11.250px' }}>
            <h4>
              <b>Register</b> below
            </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={formData.name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames('', {
                  invalid: errors.name,
                })}
              />
              <label htmlFor="name">Name</label>
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={formData.email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames('', {
                  invalid: errors.email,
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={formData.password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames('', {
                  invalid: errors.password,
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleChange}
                value={formData.passwordConfirm}
                error={errors.passwordConfirm}
                id="passwordConfirm"
                type="password"
                className={classnames('', {
                  invalid: errors.passwordConfirm,
                })}
              />
              <label htmlFor="password2">Confirm Password</label>
              <span className="red-text">{errors.passwordConfirm}</span>
            </div>
            <div className="col s12" style={{ paddingLeft: '11.250px' }}>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired,
// };

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
