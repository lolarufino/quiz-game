import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';
import router from '../../src/router';

describe('Given a App component', () => {
    describe('When is rendered', () => {
        test('Should render a header component', () => {
            const wrapper = mount(App, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state: {
                        questions: [
                        ]
                      },
                    },
                  },
                },
              })
          
            expect(wrapper.html()).toContain('<h1 class="title">Quiz Game</h1>')
          })
    })
})