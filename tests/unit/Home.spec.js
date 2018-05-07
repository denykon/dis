import { expect } from 'chai';
import { shallow } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallow(Home, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  })
});
