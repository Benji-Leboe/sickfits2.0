import PropTypes from 'prop-types';

export default function Page({ children }) {
  return (
    <div>
      <h1>I AM PAGE</h1>
      <h2>{children}</h2>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
