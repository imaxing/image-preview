export default {
  install(Vue, opts = {}) {
    const { name = 'imagePreview' } = opts
    Vue.prototype[name] = (images = [], options = {}) => {
      if (images.length <= 0) return
      const ImagePreviewConstructor = Vue.extend(require('./image-preview').default)
      const instance = new ImagePreviewConstructor({
        data: {
          images,
          destroy: () => {
            options.onClose && options.onClose(instance)
            document.body.style.overflow = ''
            instance.$el.remove()
          },
          ...options
        }
      })
      instance.$mount()
      document.body.appendChild(instance.$el)

      return instance
    }
  }
}
