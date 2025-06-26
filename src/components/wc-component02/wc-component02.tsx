import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-component02',
  styleUrl: 'wc-component02.css',
  shadow: true,
})

export class WcComponent02 {
  @Prop() name: string
  @Prop() lastname: string
  render() {
    return (
      // <Host>
      //   <slot></slot>
      // </Host>
      <div>
        <div>
        <span>{this.name}</span>
      </div>
      <div>
        <span>{this.lastname}</span>
      </div>
      </div>
      
    );
  }
}
