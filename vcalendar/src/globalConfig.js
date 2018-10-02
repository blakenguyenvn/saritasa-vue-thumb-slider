let globalConfig = {}

globalConfig.calendar = {
  attributes: [
    {
      dot({ isHovered }) {
        if (isHovered) return ''
      }
    }
  ]
}

const install = function(Vue) {
  Vue.prototype.$globalConfig = globalConfig
}

export default {
  install
}