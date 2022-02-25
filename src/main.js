import Vue from 'vue'
Vue.config.productionTip = false
import ImagePreview from './packages'
new Vue({
  render: h =>
    h('div', { attrs: { id: 'app' } }, [
      h(
        'button',
        {
          on: {
            click: () => {
              ImagePreview(
                [
                  'https://tva1.sinaimg.cn/large/008i3skNgy1gz8i4tglttj308207z749.jpg',
                  'https://tva1.sinaimg.cn/large/e6c9d24egy1gzoxqj04zaj21hn0u075f.jpg',
                  'https://tva1.sinaimg.cn/large/e6c9d24egy1gznfncan66j20zc0u0772.jpg',
                  'https://tva1.sinaimg.cn/large/e6c9d24egy1gzpuhh1kk1j20u00u0q44.jpg',
                  'https://tva1.sinaimg.cn/large/e6c9d24egy1gznfnbmsh0j21e90u0jvo.jpg'
                ],
                { index: 2 }
              )
            }
          }
        },
        '预览'
      )
    ])
}).$mount('#app')
