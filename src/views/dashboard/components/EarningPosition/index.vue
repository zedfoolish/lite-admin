<template>
  <div class="earning-position hover-shadow" :style="{ height: height + 'px' }">
    <div class="earning-position__header">
      <slot name="header">
        <span style="color: #eee">基金</span>
        <app-icon size="18" color="#eee" icon="el-icon-trend-charts" />
      </slot>
    </div>
    <div class="earning-position__body">
      <p class="funds-totalAmount-title">
        总金额(元)
        <app-icon
          color="#eee"
          icon="el-icon-view"
          style="margin-left: 4px;cursor: pointer"
          @click="showTotalAmount = !showTotalAmount"
        />
      </p>
      <p
        class="funds-totalAmount"
        v-text="showTotalAmount ? '18,679.05' : '***'"
      />
      <div class="funds-details">
        <div style="display: flex; flex-flow: column nowrap">
          <span class="earn-details__title">昨日收益(元)</span>
          <span class="earn-details__money">-795.71</span>
        </div>
        <div style="display: flex; flex-flow: column nowrap">
          <span class="earn-details__title">持有收益(元)</span>
          <span class="earn-details__money">-666.45</span>
        </div>
        <div style="display: flex; flex-flow: column nowrap">
          <span class="earn-details__title">累计收益(元)</span>
          <span class="earn-details__money">-666.45</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 卡片话仿支付宝基金收入页面
import { ref } from 'vue'

export default {
  name: 'EarningPosition',
  props: {
    // icon: { type: String, default: 'el-icon-view' }, // 卡片图标类 目前仅使用 <i>标签
    // color: { type: String, default: '#1577FE' }, //主题背景颜色
    // title: { type: String, default: '基金' }, // 卡片标题
    // unit: { type: String, default: '元' }, // 金钱单位
    height: { type: Number },
    totalAmount: { type: Number, default: 10000 }, // 买入金额
    accumulated: { type: Number }, // 累计收益
    yesterday: { type: Number }, // 昨日收益
    holding: { type: Number }, // 持有收益
  },
  setup() {
    const showTotalAmount = ref(true)
    return { showTotalAmount }
  },
}
</script>

<style lang="scss" scoped>
$theme-color: #1577fe;
$theme-text-color: #69a8ef;
$card-height: 160px;

.earning-position {
  height: $card-height;
  padding: 10px;
  background-color: $theme-color;
  border-radius: 8px;
}

.earning-position__header {
  display: flex;
  justify-content: space-between;
}

.funds-totalAmount-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: $theme-text-color;
  text-align: center;
}

.funds-totalAmount {
  margin: 10px;
  font-size: 1.5rem;
  color: #eee;
  text-align: center;
}

.funds-details {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  > div {
    display: flex;
    flex-flow: column nowrap;
    color: $theme-text-color;
  }

  .earn-details__money {
    font-weight: bold;
    color: #eee;
    text-align: center;
  }
}
</style>
