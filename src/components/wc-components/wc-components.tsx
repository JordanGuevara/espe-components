import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-components',
  styleUrl: 'wc-components.css',
  shadow: true,
})
export class WcComponents {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
