import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackVirtualPageView } from './analytics';

let lastPagePath = '';

export function usePageView() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lastPagePath === pathname) return;
    lastPagePath = pathname;
    queueMicrotask(() => trackVirtualPageView(pathname, document.title));
  }, [pathname]);
}
