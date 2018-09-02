import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import IndexPage from '~/pages/index'
import store from '~/store/index'
import cloneDeep from 'lodash.clonedeep'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('pages/index.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = null
    wrapper = mount(IndexPage, {
      store: new Vuex.Store(cloneDeep(store)),
      localVue
    })
  })

  test('カウンターをクリックした時に、カウント値が 1 加算される', () => {
    expect(wrapper.vm.count).toBe(0)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
