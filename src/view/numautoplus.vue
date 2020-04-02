// 数字动画增加
<template>
  <div>
    <div class="num">{{currTotal}}</div>
    <div>
      <a-button type="primary" class="btn" @click="reset">重来一次</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "number_auto_plus",
  data() {
    return {
      total: 60002,
      currTotal: 0,
      time: 3000,
      timeClr: null,
      lastTimeClr: null
    };
  },
  mounted() {
    this.autoPlus(this.total);
  },
  methods: {
    autoPlus(total) {
      // 留5在最后一秒完成，其他的前面三秒完成

      this.timeClr = setInterval(() => {
        this.currTotal = parseInt(
          this.currTotal + (this.total - 100) / (this.time / 30)
        );
        if (
          this.currTotal >=
          this.total - 100 - 2 * parseInt((this.total - 100) / (this.time / 30))
        ) {
          clearInterval(this.timeClr);
          this.lastAuto();
        }
      }, 30);
    },
    lastAuto() {
      this.currTotal = this.total - 5;

      this.lastTimeClr = setInterval(() => {
        this.currTotal += 1;
        if (this.currTotal >= this.total) {
          clearInterval(this.lastTimeClr);
        }
      }, 200);
    },
    reset() {
      if (this.timeClr) {
        clearInterval(this.timeClr);
      }
      if (this.lastTimeClr) {
        clearInterval(this.lastTimeClr);
      }
      this.currTotal = 0;
      this.autoPlus(this.total);
    }
  }
};
</script>

<style lang="scss" scoped>
.num {
  display: inline-block;
  background: #000;
  color: #fff;
  width: 200px;
  line-height: 40px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 20px;
}
.btn {
  margin-left: 56px;
}
</style>