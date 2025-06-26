import { newSpecPage } from '@stencil/core/testing';
import { WcComponents } from '../wc-components';

describe('wc-components', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponents],
      html: `<wc-components></wc-components>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-components>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-components>
    `);
  });
});
