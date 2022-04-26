# testing-library-ember

## Install

```
npm install --save-dev testing-library-ember
# or
yarn add --dev testing-library-ember
# or
pnpm add --save-dev testing-library-ember
```

Also, be sure to install `@testing-library/dom` and `@ember/test-helpers` (as they are peer dependencies)

## Compatibility

- `@testing-library/dom` v8+
- `ember-source` v3+
- `@ember/test-helpers` v2+

## Usage

For all synchronous queries, use [`@testing-library/dom`](https://testing-library.com/docs/dom-testing-library/install).

This library is only needed for the async behaviors of testing-library, such as `fireEvent.click` and `screen.findbyText`.

For example:

```js
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

import { screen } from '@testing-library/dom';
import { fireEvent } from 'ember-testing-library';


module(`Demo`, function(hooks) {
  setupRenderingTest(hooks);

  test('demo ember + testing-library', async function(assert) {
    await render(hbs`...`);
    let button = screen.getByRole('button', {name: 'Click Me'})

    await fireEvent.click(button);

    assert.strictEqual(screen.getByText('Output'), 'the new output');
  });
});
```

See the tests in test-app for examples


