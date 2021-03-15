import React from 'react';

const BodyContainer = (props: ReactChild) => {
  const { children } = props;
  return (
    <div
      className="flex items-center justify-center
      w-full min-h-screen bg-app-background"
    >
      { children }
    </div>
  );
};

export default BodyContainer;
