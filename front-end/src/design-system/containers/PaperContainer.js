import React from 'react';

const PaperContainer = (props: ReactChild) => {
  const { children } = props;
  return (
    <div
      className="w-full rounded-md overflow-hidden bg-white"
    >
      <div className="w-full h-2 bg-primary-dark" />
      <div className="w-full h-10 bg-primary" />
      <div className="w-full p-2">
        { children }
      </div>
    </div>
  );
};

export default PaperContainer;
