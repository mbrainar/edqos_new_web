import { test } from 'qunit';
import moduleForAcceptance from 'new-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list tags');

test('show tags as home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/policytags', 'should redirect automatically to policytags');
  });
});

test('show list of tags', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(find('.policy').length, 3, 'should see 3 policies while in fake data');
  });
});

test('show list of apps', function (assert) {
});

test('show 3 state for selected apps', function (assert) {
});

test('should link to information about the app', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});
