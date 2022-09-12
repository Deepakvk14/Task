import { useEffect } from 'react';
import  './skeleton.css';

const Skeleton = ({ type }) => {
  useEffect(() => {});
  return (
    <div className="skeleto">
      <div className={`thumbnil${type}`}> </div>
    </div>
  );
};

export default Skeleton;
