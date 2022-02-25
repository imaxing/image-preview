# 图片查看器

### 使用方式

```javascript
import Vue from 'vue'
import ImagePreview from '@iamgx/image-preview'

// 基础调用
ImagePreview(
  [
    'https://tva1.sinaimg.cn/large/008i3skNgy1gz8i4tglttj308207z749.jpg',
    'https://tva1.sinaimg.cn/large/e6c9d24egy1gzpuhh1kk1j20u00u0q44.jpg'
  ]
)


// 从指定位置开始
ImagePreview(
  [
    'https://tva1.sinaimg.cn/large/008i3skNgy1gz8i4tglttj308207z749.jpg',
    'https://tva1.sinaimg.cn/large/e6c9d24egy1gzpuhh1kk1j20u00u0q44.jpg'
  ],
  { index: 1 }
)
```

### live demo

[![Edit image-preview-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/image-preview-example-zekx32?fontsize=14&hidenavigation=1&theme=dark)

