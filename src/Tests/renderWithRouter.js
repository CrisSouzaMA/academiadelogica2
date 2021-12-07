import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(component) {
  const inexRouter = createMemoryHistory();

  const returnFromRender = render(
    <Router history={ inexRouter }>
      { component }
    </Router>,
  );
  return { history: inexRouter, ...returnFromRender };
}

export default renderWithRouter;