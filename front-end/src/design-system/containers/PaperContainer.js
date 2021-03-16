import React from 'react';
import proptypes from 'prop-types';

const PaperContainer = (props) => {
  const { children } = props;

  return (
    <div>
      { children }
    </div>
  );
};
PaperContainer.propTypes = {
  children: proptypes.node.isRequired,
};
export default PaperContainer;
