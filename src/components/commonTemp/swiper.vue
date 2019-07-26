<template>
  <div>
    <div class="swiper-container">
      <p class="like_look">最近最爱期待</p>
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    this.carouselInit();
  },
  methods: {
    carouselInit() {
      this.$nextTick(() => {
        // setTimeout(() => {
        new Swiper(".swiper-container", {
          pagination: ".swiper-pagination",
          freeMode: true,
          slidesPerView: 4,
          slidesOffsetBefore: 12,
          slidesOffsetAfter: 50
        });
        // }, 1000);
      });
    }
  }
};
</script>
<style scoped lang="scss">
.swiper-container {
  // width: 100%;
  // height: r(160);
  margin-top: r(104);
  .like_look {
    margin-bottom: r(10);
    margin-left: r(12);
    margin-top: r(2);
    text-align: left;
    font-size: r(14);
  }

  .swiper-wrapper {
    margin-bottom: r(12);
    .carousel {
      width: r(85) !important;
      margin-right: r(14);
      position: relative;
      .imgList {
        width: 100%;
        height: r(115);
      }
      h5 {
        margin: r(8) 0 r(3) 0;
        font-size: r(14);
        color: #222;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .date {
        font-size: r(12);
        color: #999;
        text-align: left;
        line-height: r(20);
      }
      span {
        position: absolute;
        left: 0;
        bottom: r(50);
        color: #faaf00;
        font-size: r(12);
        font-weight: 600;
      }
      em {
        position: absolute;
        left: 0;
        top: 0;
        width: r(28);
        height: r(28);
        background: rgba(61, 63, 71, 0.6);
        padding-top: r(9);
        box-sizing: border-box;
        .like_btn {
          width: r(10);
          height: r(10);
        }
      }
    }
  }
}
</style>