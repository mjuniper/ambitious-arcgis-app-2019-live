import { loadMap } from '../../../utils/map';
import { module, test } from 'qunit';

module('Unit | Utility | map', function(/* hooks */) {

  test('loadMap', function(assert) {
    // TODO: write a meaningful test of loadMap()
    let result = typeof loadMap === 'function';
    assert.ok(result);
  });
});
