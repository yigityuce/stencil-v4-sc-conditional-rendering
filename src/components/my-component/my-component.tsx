import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {
  @State() headerVisible = true;
  @State() contentVisible = true;

  render() {
    return (
      <Host>
        {this.headerVisible ? <slot name="header" /> : null}
        {this.contentVisible ? <slot /> : null}

        <button onClick={() => (this.headerVisible = !this.headerVisible)}>
          Toggle header visibility (to {this.headerVisible ? 'hidden' : 'visible'})
          </button>
        <button onClick={() => (this.contentVisible = !this.contentVisible)}>
          Toggle content visibility (to {this.contentVisible ? 'hidden' : 'visible'})
        </button>
      </Host>
    );
  }
}
