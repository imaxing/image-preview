<script>
export default {
  name: 'ImagePreview',
  data: () => ({ images: [], index: 0, scale: 1, rotate: 0, animation: true, destroy: null, showIndex: true }),
  render(h) {
    const currentImage = this.images[this.index]
    const renderSvgIcon = ({ w = 20, height = 20, f = 'currentColor', ds, onClick }) => {
      return h(
        'svg',
        {
          on: { click: () => onClick && onClick() },
          class: 'svg-icon',
          attrs: { width: w, height, viewBox: '0 0 1024 1024', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' }
        },
        ds.map(d => h('path', { attrs: { fill: f, d } }))
      )
    }

    const ImageIcon = renderSvgIcon({
      f: '#FFAB00',
      w: 30,
      height: 30,
      ds: [
        'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z m513.9 437.1c-1.4 1.2-3.3 1.9-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9 0.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 0.3 0.3 0.7 0.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 0.3 0.3 0.7 0.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z'
      ]
    })

    const CloseIcon = renderSvgIcon({
      onClick: () => this.destroy && this.destroy(),
      ds: [
        'M806.4 172.8l-633.6 633.6c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l633.6-633.6c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0z',
        'M172.8 172.8c-12.8 12.8-12.8 32 0 44.8l633.6 633.6c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8L217.6 172.8c-12.8-12.8-32-12.8-44.8 0z'
      ]
    })

    const RotateRightIcon = renderSvgIcon({
      onClick: () => {
        this.rotate = this.rotate + 90
      },
      ds: [
        'M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z',
        'M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z'
      ]
    })

    const RotateLeftIcon = renderSvgIcon({
      onClick: () => {
        this.rotate = this.rotate - 90
      },
      w: 20,
      height: 30,
      ds: [
        'M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H188V494h440v326z',
        'M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-0.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7 0.4 12.6-6.1v-63.9c12.9 0.1 25.9 0.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8 11 40.7 14 82.7 8.9 124.8-0.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3z'
      ]
    })

    const ZoomInIcon = renderSvgIcon({
      onClick: () => (this.scale = parseFloat((this.scale + 0.2).toFixed(2))),
      ds: [
        'M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z',
        'M625.792 448H512v-112a32 32 0 0 0-64 0V448h-112a32 32 0 0 0 0 64H448v112a32 32 0 1 0 64 0V512h113.792a32 32 0 1 0 0-64z'
      ]
    })

    const ZoomOutIcon = renderSvgIcon({
      onClick: () => {
        if (this.scale != 0.2) {
          this.scale = parseFloat((this.scale - 0.2).toFixed(2))
        }
      },
      ds: [
        'M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z',
        'M625.792 448H336a32 32 0 0 0 0 64h289.792a32 32 0 1 0 0-64z'
      ]
    })

    const RefreshIcon = renderSvgIcon({
      onClick: () => {
        this.animation = false
        this.rotate = 0
        this.scale = 1
        const timer = setTimeout(() => {
          this.animation = true
          clearTimeout(timer)
        }, 500)
      },
      ds: [
        'M895.469672 511.745197c0-146.498562-82.099856-273.805016-202.78859-338.470805l22.072715-46.630017c-4.50664-12.609179-18.382673-19.176758-30.991852-14.670118l-92.436272 33.040511c-12.609179 4.50664-19.176758 18.382673-14.670117 30.991852l33.04051 92.436272c4.50664 12.609179 18.382673 19.176758 30.991852 14.670117l24.581861-51.929719c99.069343 54.335513 166.240185 159.596881 166.240185 280.561907 0 165.56685-125.817544 301.747415-287.057855 318.14692v0.022513c-17.730826 0-32.105209 14.374382-32.105208 32.105209 0 17.730826 14.374382 32.105209 32.105208 32.105208a32.234145 32.234145 0 0 0 6.135744-0.592494C744.270041 874.039593 895.469672 710.564381 895.469672 511.745197zM480.616222 129.23948c-0.041956 0-0.082888 0.00307-0.124843 0.00307v-0.00307l-0.047072 0.004093c-1.892093 0.010233-3.744277 0.189312-5.545297 0.5137-194.674794 18.529005-346.957083 182.459588-346.957083 381.987924 0 147.431817 83.146699 275.42798 205.097168 339.700819l-24.814152 52.419883c4.50664 12.609179 18.382673 19.176758 30.991852 14.670118l92.436272-33.040511c12.609179-4.50664 19.176758-18.382673 14.670118-30.991851l-33.040511-92.436273c-4.50664-12.609179-18.382673-19.176758-30.991851-14.670117l-21.853727 46.167482c-100.326986-53.964052-168.535461-159.920246-168.535461-281.81955 0-166.089759 126.616746-302.591643 288.588721-318.284044v-0.014326c0.041956 0 0.082888 0.00307 0.124843 0.00307 17.730826 0 32.105209-14.374382 32.105209-32.105209 0.001023-17.730826-14.373359-32.105209-32.104186-32.105208z'
      ]
    })

    const PrevIcon = renderSvgIcon({
      onClick: () => {
        if (this.index <= 0) {
          this.index = this.images.length
        }
        --this.index
        this.rotate = 0
        this.scale = 1
      },
      ds: [
        'M842.666667 864c-8.533333 0-14.933333-2.133333-21.333334-8.533333l-341.333333-309.333334c-6.4-6.4-10.666667-14.933333-10.666667-23.466666 0-8.533333 4.266667-17.066667 10.666667-23.466667l341.333333-309.333333c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133333 44.8L548.266667 522.666667l315.733333 285.866666c12.8 10.666667 14.933333 32 2.133333 44.8-6.4 6.4-14.933333 10.666667-23.466666 10.666667z',
        'M512 864c-8.533333 0-14.933333-2.133333-21.333333-8.533333L149.333333 546.133333c-6.4-6.4-10.666667-14.933333-10.666666-23.466666 0-8.533333 4.266667-17.066667 10.666666-23.466667L490.666667 189.866667c12.8-12.8 34.133333-10.666667 44.8 2.133333 12.8 12.8 10.666667 34.133333-2.133334 44.8L217.6 522.666667 533.333333 808.533333c12.8 12.8 14.933333 32 2.133334 44.8-6.4 6.4-14.933333 10.666667-23.466667 10.666667z'
      ]
    })

    const NextIcon = renderSvgIcon({
      onClick: () => {
        ++this.index
        if (this.index === this.images.length) {
          this.index = 0
        }
        this.rotate = 0
        this.scale = 1
      },
      ds: [
        'M544 522.666667c0-8.533333-4.266667-17.066667-10.666667-23.466667L192 189.866667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733334 285.866667L149.333333 808.533333c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666z',
        'M864 499.2l-341.333333-309.333333c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l315.733333 285.866667-315.733333 285.866666c-12.8 12.8-14.933333 32-2.133333 44.8 6.4 6.4 14.933333 10.666667 23.466666 10.666667 8.533333 0 14.933333-2.133333 21.333334-8.533333l341.333333-309.333334c6.4-6.4 10.666667-14.933333 10.666667-23.466666 0-8.533333-4.266667-17.066667-10.666667-23.466667z'
      ]
    })

    const TopTool = h('div', { class: 'top-tool' }, [
      h('span', { class: 'image-info' }, [ImageIcon, h('b', [currentImage])]),
      h('span', [CloseIcon])
    ])

    const BottomTool = h('div', { class: 'bottom-tool' }, [
      this.showIndex && this.images.length > 0 && h('b', { class: 'index' }, `${this.images.length}/${this.index + 1}`),
      h('div', { class: 'icons' }, [
        PrevIcon,
        ZoomInIcon,
        ZoomOutIcon,
        RotateLeftIcon,
        RotateRightIcon,
        RefreshIcon,
        NextIcon
      ])
    ])

    const CurrentImage = h('img', {
      class: 'current-image',
      style: {
        transform: `scale(${this.scale}) rotate(${this.rotate}deg)`,
        maxWidth: '100%',
        maxHeight: '100%',
        transition: this.animation
          ? `transform 0.3s ease-in-out, -webkit-transform 0.3s cubic-bezier(0, -0.04, 0.83, 1.46)`
          : 'none'
      },
      attrs: { src: currentImage }
    })

    return h('div', { class: 'image-preview' }, [TopTool, CurrentImage, BottomTool])
  }
}
</script>
<style scoped>
.image-preview {
  position: fixed;
  z-index: 20000;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  background: rgb(27, 38, 56);
  align-items: center;
  justify-content: center;
}
.image-preview img {
  border: none;
}
.svg-icon {
  cursor: pointer;
}

.bottom-tool,
.top-tool {
  position: absolute;
  left: 0px;
  width: 100%;
  /* opacity: 0; */
  transition: opacity 0.3s ease 0s;
  color: rgb(184, 199, 224);
  font-weight: 500;
  box-sizing: border-box;
  z-index: 521;
  display: flex;
  align-items: center;
}
.bottom-tool {
  bottom: 0px;
  height: 80px;
  background-image: linear-gradient(to top, rgb(14, 22, 36), rgba(14, 22, 36, 0));
  justify-content: center;
}
.bottom-tool .index {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
}
.top-tool {
  top: 0px;
  height: 60px;
  background-image: linear-gradient(rgb(14, 22, 36), rgba(14, 22, 36, 0));
  justify-content: space-between;
  padding: 0 15px;
}
.image-info {
  display: flex;
  align-items: center;
}
.image-info b {
  margin-left: 10px;
}
.icons {
  min-width: 100px;
  padding: 10px 20px;
  background-color: rgb(96, 98, 102, 0.4);
  border-color: #fff;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.icons svg {
  margin: 0 6px;
}

.image-preview:hover .bottom-tool,
.image-preview:hover .top-tool {
  opacity: 1;
}

.current-image {
  max-height: 100%;
  display: block;
  margin: 0 auto;
  object-fit: contain;
  user-select: none;
}

@media (max-width: 767px) {
  .image-info,
  .bottom-tool .index {
    display: none;
  }
  .top-tool {
    justify-content: flex-end;
  }
}
</style>
