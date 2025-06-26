import { newE2EPage } from '@stencil/core/testing';

describe('wc-components', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-components></wc-components>');

    const element = await page.find('wc-components');
    expect(element).toHaveClass('hydrated');
  });
});
