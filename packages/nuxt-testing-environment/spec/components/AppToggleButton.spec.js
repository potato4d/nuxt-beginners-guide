import AppToggleButton from '~/components/AppToggleButton.vue'
import { mount } from '@vue/test-utils'

describe('AppToggleButton.vue', () => {
  let wrapper

  beforeEach(() => {
    // 一度 wrapper を null にして適切に GC されるようにする
    wrapper = null

    // wrapper に Vue コンポーネントのマウント結果を代入し使い回す
    wrapper = mount(AppToggleButton)
  })

  test('デフォルト状態で off であるか', () => {
    // find によって this.$el 内から探索された p 要素をデータソースとしてアサーションを行う
    expect(wrapper.find('p').text()).toBe('off')
  })

  test('ボタンを押すことによって on となるか', () => {
    // find によって this.$el 内から探索された button 要素に対して click イベントを手動で発火させる
    wrapper.find('button').trigger('click')

    // 手動で発火させた場合でも、 Vue.js の @click は呼ばれるはずであるため、 on となるはず
    expect(wrapper.find('p').text()).toBe('on')
  })
})
