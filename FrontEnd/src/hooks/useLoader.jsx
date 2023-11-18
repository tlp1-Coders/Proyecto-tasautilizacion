
import { useState } from 'react';
import Loading from '../components/Loading';

const useLoader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    showLoader,
    hideLoader,
  };
};

export default useLoader;
