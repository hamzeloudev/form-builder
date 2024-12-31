import React from 'react';

const FieldSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="h-10 bg-gray-200 rounded"></div>
    </div>
  );
};

export default FieldSkeleton;
