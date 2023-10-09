
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      if (loading) {
            return <span className="loading flex relative left-[900px]  loading-spinner loading-lg"></span>;
      }
      if (user) {
            return children;
      }

      return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.prototype = {
      children: PropTypes.node
};
