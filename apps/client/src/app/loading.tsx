import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2>Đang tải, vui lòng chờ...</h2>
    </div>
  );
};

export default Loading;