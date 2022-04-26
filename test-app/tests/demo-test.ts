import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// typed-ember team has not published types for this
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { setComponentTemplate } from '@ember/component';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';

import { screen } from '@testing-library/dom';
import { fireEvent } from 'testing-library-ember';

module('Demo', function (hooks) {
  setupRenderingTest(hooks);

  test('with component', async function (assert) {
    class MyComponent extends Component {
      @tracked value = 0;

      increment = () => this.value++;
    }

    setComponentTemplate(
      hbs`
        <output>{{this.value}}</output>
        <button type="button" {{on 'click' this.increment}}>add</button>
      `,
      MyComponent
    );

    this.setProperties({ MyComponent });

    await render(hbs`<this.MyComponent />`);

    assert.dom('output').hasText('0');

    let button = await screen.findByText('add');

    assert.dom(button).exists();

    await fireEvent.click(button);

    assert.dom(screen.getByText('1')).exists();
  });
});
