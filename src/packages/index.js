import Vue from 'vue'
import ImagePreview from './image-preview'

export default (images = [], options = {}) => {
  if (images.length <= 0) return
  const ImagePreviewConstructor = Vue.extend(ImagePreview)
  const instance = new ImagePreviewConstructor({
    data: {
      images,
      destroy: () => instance.$el.remove(),
      ...options
    }
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  return instance
}
