<template>
  <div class="content">

    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-panel>
        <van-panel v-for="(item,index) in values" :key="index" :title="item.building+' '+item.room" :desc="'规模 '+item.size+'人'"
          :status="item.media+'多媒体'" @click="showPop()">
        </van-panel>
      </van-panel>
    </van-pull-refresh>
    <van-popup v-model="show" closeable position="bottom">
      <van-card v-for="(item,index) in values" :key="index" id="more" desc="2019/12/12" title="占用人:小明">
        <div slot="price">
          <van-row>
            <van-col>
              <div class="moreDetail">联系电话：123456</div>
            </van-col>
          </van-row>
        </div>
        <div slot="tags">
          <van-tag plain type="primary">08:00</van-tag>-
          <van-tag plain type="primary">10:00</van-tag>
        </div>
        <div slot="footer">
          <van-row>
            <van-col>
              <div class="moreDetail">用于开展TickNet工作室例会</div>
            </van-col>
          </van-row>

        </div>
      </van-card>
    </van-popup>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        show: false,
        values: [{
          building: '逸夫楼',
          room: '310',
          size: '20',
          media: '支持'
        }, {
          building: '逸夫楼',
          room: '310',
          size: '20',
          media: '支持'
        }, {
          building: '逸夫楼',
          room: '310',
          size: '20',
          media: '支持'
        }, {
          building: '逸夫楼',
          room: '310',
          size: '20',
          media: '不支持'
        }, {
          building: '逸夫楼',
          room: '310',
          size: '20',
          media: '不支持'
        }],
        details: [{

        }]
      }
    },
    methods: {
      showPop() {
        this.show = true
      },
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

<style scoped="scoped">
  .content {
    width: 100%;
    height: 100%;
  }

  .van-popup {
    width: 100%;
    height: 50%;
    padding-top: 40px;
    padding-bottom: 20px;
  }


  .moreDetail {
    color: #969799;
    font-size: 12px;
    line-height: 15px;
    margin-top: -10px;
  }
</style>
