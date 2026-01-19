
import React, { useEffect, useState } from 'react';

interface InbodyBarProps {
  percentage: number;
  colorClass: string;
}

const InbodyBar: React.FC<InbodyBarProps> = ({ percentage, colorClass }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="h-[10px] w-full bg-gray-100 rounded-full overflow-hidden relative" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100}>
      <div 
        className={`h-full absolute left-0 top-0 rounded-full transition-all duration-1000 ease-out ${colorClass}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default InbodyBar;
