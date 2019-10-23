import { useEffect } from 'react';

export default (stateUpdater, stateValue, def) => {
  const updateWith = def !== undefined ? def : stateValue;

  return useEffect(() => {
    stateUpdater(updateWith);
  }, [stateUpdater, stateValue, updateWith]);
};
