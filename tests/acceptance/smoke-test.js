import { module, test } from 'qunit';
import { visit, click, fillIn, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | smoke', function(hooks) {
  setupApplicationTest(hooks);

  test('smoke-test', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'current url is "/"');

    await fillIn('form .input-group input', 'water');
    await click('form .input-group button');

    assert.equal(currentURL(), '/items?q=water', 'current url is ""');
    assert.equal(findAll('table tbody tr').length, 10);
  });
});