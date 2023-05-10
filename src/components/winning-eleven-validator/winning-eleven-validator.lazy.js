import React, { lazy, Suspense } from 'react';

const LazyWinningElevenValidator = lazy(() => import('./WinningElevenValidator'));

const WinningElevenValidator = props => (
  <Suspense fallback={null}>
    <LazyWinningElevenValidator {...props} />
  </Suspense>
);

export default WinningElevenValidator;
