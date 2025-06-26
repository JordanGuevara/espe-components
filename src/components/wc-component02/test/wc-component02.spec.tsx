import { newSpecPage } from '@stencil/core/testing';
import { WcComponent02 } from '../wc-component02';

describe('wc-component02', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponent02],
      html: `<wc-component02></wc-component02>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-component02>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-component02>
    `);
  });
});
