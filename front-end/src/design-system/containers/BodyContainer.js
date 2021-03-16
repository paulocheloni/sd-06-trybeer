import React from 'react';
import proptypes from 'prop-types';

const BodyContainer = (props) => {
  const { children } = props;
  return (
    <div>
      { children }
    </div>
  );
};

BodyContainer.propTypes = {
  children: proptypes.node.isRequired,
};

export default BodyContainer;
