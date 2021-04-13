import { mount } from '@vue/test-utils'
import App from '../../src/App'
import HelloWorld from '../../src/components/HelloWorld/HelloWorld'

describe('App', () => {
    it('has name', () => {
        expect(App.name).toBe("App")
    })
})

describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('is a Vue instance', () => {
      expect(wrapper.findComponent(HelloWorld)).toBeTruthy()
    })
})