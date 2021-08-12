import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | club-meeting-create', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:club-meeting-create');
    assert.ok(route);
  });
});
