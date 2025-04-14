import { render } from '@testing-library/react';

import SharedUi from './SharedUI';

describe('SharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
