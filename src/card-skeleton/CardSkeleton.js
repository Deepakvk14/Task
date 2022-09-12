import Skeleton from './Skeleton';
import './skeleton.css';

const CardSkeleton = () => {
  return (
    <div className='skeleton_wrapper'>
      <Skeleton type="text" />
      <Skeleton type="text_lg" />
      <Skeleton type="text_md" />
      <Skeleton type="text_sm" />
      <div className='shimmer_wrapper'>
        <div className='shimmer'></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
