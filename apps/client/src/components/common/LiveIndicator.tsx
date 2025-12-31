import React from "react";

const LiveIndicator = () => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
      <h4 className="text-primary font-bold uppercase tracking-widest text-xs">
        Sao kê (Real-time)
      </h4>
    </div>
  );
};

export default LiveIndicator;
