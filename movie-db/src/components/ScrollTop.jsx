import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  const { pathname } = useLocation(); // Correct property name is 'pathname'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency is 'pathname'

  return null;
};

export default ScrollTop;
