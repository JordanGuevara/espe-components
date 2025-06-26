import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-component02',
  styleUrl: 'wc-component02.css',
  shadow: true,
})

export class WcComponent02 {
  @Prop()
  name: string
  render() {
    return (
      // <Host>
      //   <slot></slot>
      // </Host>
      <div>
        <span>{this.name}</span>
      </div>
    );
  }
}
