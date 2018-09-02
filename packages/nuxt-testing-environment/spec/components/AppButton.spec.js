import { mount } from '@vue/test-utils'
import AppButton from '~/components/AppButton.vue'

describe('components/AppButton.vue', () => {
  test('match snapshot(unclicked)', () => {
    const wrapper = mount(AppButton)
    expect(wrapper.element).toMatchSnapshot()
  })
  test('match snapshot(clicked)', () => {
    const wrapper = mount(AppButton)
    wrapper.find('button').trigger('click')
    expect(wrapper.element).toMatchSnapshot()
  })
})
