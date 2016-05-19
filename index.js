import React from 'react';
import Foo from './foo';
import QUnit from 'steal-qunit';
import { shallow } from 'enzyme';

QUnit.module('<Foo />');

QUnit.test('works', function(assert) {
	const wrapper = shallow(<Foo />);
	assert.equal(wrapper.find('.item').length, 3, 'there should be 3 items');
});

