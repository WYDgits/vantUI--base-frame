<template>
  <div class="container" style="margin-top: 5%;">
    <van-cell-group>
      <van-field left-icon="wap-home-o" label="教学楼" :value="building" @click="showPop('building')" placeholder="请选择"></van-field>
      <van-field left-icon="shop-o" label="会议室" :value="meetingRoom" @click="showPop('meetingRoom')" placeholder="请选择"></van-field>
      <van-field left-icon="notes-o" clearable label="占用日期" :value="date" @click="showPop('date')" placeholder="请选择"></van-field>

      <van-field left-icon="play-circle-o" v-if="date != ''" disabled label="开始时间" @click="showPop('startTime')" :value="startTime"
        placeholder="请选择"></van-field>
      <van-field left-icon="pause-circle-o" v-if="endTimeShow" disabled label="结束时间" @click="showPop('endTime')" :value="endTime"
        placeholder="请选择"></van-field>

      <van-field left-icon="friends-o" v-model="meetingSize" clearable type="number" label="人数" placeholder="请输入人数"
        bind:click-icon="onClickIcon"></van-field>
      <van-field left-icon="manager-o" v-model="applicant" clearable label="申请人姓名" placeholder="请输入姓名" bind:click-icon="onClickIcon"></van-field>
      <van-field left-icon="phone-o" v-model="phone" clearable type="number" label="联系方式" placeholder="请输入手机号码"
        bind:click-icon="onClickIcon"></van-field>
      <van-field left-icon="comment-o" v-model="reason" type="textarea" label="占用理由" placeholder="例如:TickNet工作室例会"
        bind:click-icon="onClickIcon"></van-field>
      <van-row type="flex" justify="center">
        <van-col offset="5" span="12">
          <van-button style="letter-spacing:1px" type="info" size="normal">提交申请</van-button>
        </van-col>
      </van-row>


    </van-cell-group>
    <van-popup v-model="show" position="bottom" custom-style="height: 20%">
      <van-picker v-if="popPicker == 'building'" show-toolbar title="选择教学楼" :columns="buildings" @confirm="confirm($event)"
        @cancel="close()"></van-picker>
      <van-picker v-else-if="popPicker == 'meetingRoom'" show-toolbar title="选择会议室" :columns="meetingRooms" @confirm="confirm($event)"
        @cancel="close()"></van-picker>

      <van-datetime-picker v-else-if="popPicker == 'startTime'" type="time" :filter="filter" show-toolbar title="选择时间"
        :min-hour="minHour" :max-hour="maxHour" @confirm="confirm($event)" @cancel="close()"></van-datetime-picker>
      <van-datetime-picker v-else-if="popPicker == 'endTime'" type="time" :filter="filter" show-toolbar title="选择时间"
        :min-hour="minHour" :max-hour="maxHour" @confirm="confirm($event)" @cancel="close()"></van-datetime-picker>

      <van-datetime-picker v-else type="date" title="选择时期" :value="currentDate" :min-date="minDate" :max-date="maxDate"
        :formatter="formatter" @confirm="confirm($event)" @cancel="close()" />
    </van-popup>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        popPicker: '',
        endTimeShow: false,
        currentDate: new Date(),
        minDate: new Date(),
        maxDate: new Date(new Date().getTime() + 3600 * 24 * 7 * 1000),
        minHour: 8,
        maxHour: 21,
        buildings: ['逸夫楼'], //, '工科楼', '理科楼', '文科楼'
        meetingRooms: [103, 108, 310],
        meetingRoom: '',
        date: '',
        startTime: '',
        endTime: '',
        building: '',
        meetingSize: '',
        applicant: '',
        phone: '',
        reason: ''
      }
    },
    mounted() {

    },
    computed: {},
    watch: {
      startTime: {
        handler(newName, oldName) {
          if (newName != oldName && oldName != '') {
            this.endTime = ''
          } else {
            this.endTimeShow = true
          }
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      showPop(event, item) {
        console.log("需要弹出的是：" + event)
        this.popPicker = event
        this.show = true
      },
      confirm(event) {
        console.log(this.popPicker)
        // return;
        switch (this.popPicker) {
          case 'building':
            this.building = event
            break;
          case 'meetingRoom':
            this.meetingRoom = event
            break;
          case 'startTime':
            this.startTime = event
            break;
          case 'endTime':
            if (event <= this.startTime) {
              this.$toast('请选择合法时间');
              break;
            }
            this.endTime = event
            break;
          case 'date':
            var date = event;
            var m = date.getMonth() + 1;
            var d = date.getDate();
            if (m >= 1 && m <= 9) {
              m = "0" + m;
            }
            if (d >= 0 && d <= 9) {
              d = "0" + d;
            }
            var timer = date.getFullYear() + "-" + m + "-" + d
            this.date = timer
            break;
        }
        this.popPicker = ""
        this.show = false
      },
      confirmTime(event) {
        console.log(event)
      },
      close() {
        this.show = false
      },
      formatter(type, value) {
        if (type === "year") {
          return `${value}年`;
        } else if (type === "month") {
          return `${value}月`;
        } else if (type === "day") {
          return `${value}日`;
        } else {
          return `${value}日`;
        }
        return value;
      },
      filter(type, value) {
        if (type === 'minute') {
          return value.filter(option => option % 15 === 0)
        }
        return value;
      }
    }
  }
</script>

<style scoped="scoped">
  .container {
    font-weight: 500;
    /* margin: 10px; */
  }

  .van-cell:not(:last-child)::after {
    border-bottom: 0;
  }

  [class*=van-hairline]::after {
    border: 0;
  }
</style>
