import { RevolvingDot } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RevolvingDot />
    </LoaderWrapper>
  );
};
