<script>
import { h } from 'vue'
import { useRouter } from 'vue-router'

/**
 * 参考 vbenAdmin
 * 当前页面不能被缓存
 * https://v3.cn.vuejs.org/guide/render-function.html
 */
export default {
  name: 'Redirect',
  setup() {
    const { currentRoute, replace } = useRouter()
    const { params:{path}, query } = currentRoute.value
    const _path = '/' + (Array.isArray(path) ? path.join('/') : path)
    replace({ path: _path, query })
    return () => h('div')
  },
}
</script>
