import { mount } from '@vue/test-utils'
import App from '../../src/App'
import MapActivity from '../../src/components/MapActivity/MapActivity'

describe('App', () => {
    it('has name', () => {
        expect(App.name).toBe("WeatherLab360")
    })
})

describe('Mounted App', () => {
    const wrapper = mount(App);
  
    test('is a Vue instance', () => {
      expect(wrapper.findComponent(MapActivity)).toBeTruthy()
    })
})