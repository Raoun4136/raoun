import React from 'react';
import { createRoot } from 'react-dom/client';

const Playground = () => {
  return <></>;
};

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(<Playground />);
}
