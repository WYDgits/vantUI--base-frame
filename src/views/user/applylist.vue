<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- <p>刷新次数: {{ count }}</p> -->
      <van-panel title="逸夫楼310" desc="2019/12/12 08:00-10:00 " status="已撤销" use-footer-slot>
        <div slot="footer">
          <div class="content">我们要开展TickNet工作室例会我们要开展要开展TickNet工作室例会</div>
          <van-row type="flex" justify="center">
            <van-col span="6" offset="19">
              <van-button size="small">撤销申请</van-button>
            </van-col>
          </van-row>
        </div>
      </van-panel>
      <van-panel title="逸夫楼310" desc="2019/12/12 08:00-10:00 " status="申请成功" use-footer-slot>
        <div slot="footer">
          <div class="content">我们要开展TickNet工作室例会我们要开展要开展TickNet工作室例会</div>
          <van-row type="flex" justify="center">
            <van-col span="6" offset="19">
              <van-button size="small">撤销申请</van-button>
            </van-col>
          </van-row>
        </div>
      </van-panel>
      <van-panel title="逸夫楼310" desc="2019/12/12 08:00-10:00 " status="待审批" use-footer-slot>
        <div slot="footer">
          <div class="content">我们要开展TickNet工作室例会我们要开展要开展TickNet工作室例会</div>
          <van-row type="flex" justify="center">
            <van-col span="6" offset="19">
              <van-button size="small">撤销申请</van-button>
            </van-col>
          </van-row>
        </div>
      </van-panel>
    </van-pull-refresh>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: this.$route.path,
        count: 0,
        isLoading: false
      }
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  }
</script>

<style>
  .van-cell:not(:last-child)::after {
    border-bottom: none;
  }

  .van-hairline--top::after {
    border-top-width: 0;
  }

  .content {
    color: #969799;
    font-size: 12px;
    line-height: 15px;
    margin-top: -10px;
  }
</style>
