import { fireEvent as tlFireEvent, screen as tlScreen } from '@testing-library/dom';
import { settled } from '@ember/test-helpers';

export const fireEvent = new Proxy(tlFireEvent, {
  get(...args) {
    let value = Reflect.get(...args);

    if (typeof value === 'function') {
      return async (...tlArgs) => {
        await value(...tlArgs);
        await settled();
      };
    }

    return value;
  },
});

export const screen = new Proxy(tlScreen, {
  get(...args) {
    let value = Reflect.get(...args);

    if (typeof value === 'function') {
      return async (...tlArgs) => {
        await value(...tlArgs);
        await settled();
      };
    }

    return value;
  },
});
