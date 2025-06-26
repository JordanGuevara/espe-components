import { newE2EPage } from '@stencil/core/testing';

describe('wc-component02', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-component02></wc-component02>');

    const element = await page.find('wc-component02');
    expect(element).toHaveClass('hydrated');
  });
});
