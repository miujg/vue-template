<template>
  <div class="user-wrapper">
    <div class="month">
      <div class="top">
        <span>11月 各科文化课及艺术专业</span> 
        <span>重庆</span>
      </div>
      <div class="bottom">
        <span>开通VIP</span>
        <span>开通后立享会员特权</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      goUser() {
        this.$router.push('/user')
      }
    },
    mounted() {
      axios({
        url: '/mjg/test'
      }).then((res) => {
        this.user = res.data.data
      })
    }
  }
</script>

<style lang="scss">
  @import '~styles/_func.scss';

  .user-wrapper {
    width: 100%;
    .month {
      width: 100%;
      height: px2rem(629);
      background: url("https://cdn.img.up678.com/u/11226045/2020/10/23/1603415489195270750.png");
      background-size: 100% 100%;
      padding: px2rem(34);
      padding-bottom: 0;
      position: relative;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          &:nth-child(2) {
            font-size: px2rem(24);
            color: #fff;
          }
          &:nth-child(1) {
            display: flex;
            align-items: center;
            padding-left: px2rem(34);
            width: px2rem(393);
            height: px2rem(50);
            background: #FFEF3C;
            border-radius: 0 px2rem(25) px2rem(25) 0;
            position: relative;
            left: px2rem(-34);
            color: #19A5A2;
            font-size: px2rem(28);
          }
        }
      }
      .bottom {
        bottom: px2rem(31);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: px2rem(480);
        padding: 0 px2rem(10);
        span {
          &:nth-child(1) {
            font-size: px2rem(28);
            color: #272727;
            font-weight: bold;
          }
          &:nth-child(2) {
            font-size: px2rem(24);
            color: #272727;
          }
        }
      }
    }

  }

</style>