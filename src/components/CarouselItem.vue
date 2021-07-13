<template>
  <div class="carousel-item-slide">
    <div class="item__title">{{item_data.title}}</div>
    <div class="item__sub-title">{{item_data.subTitle}}</div>
    <div class="item__text">{{item_data.text}}</div>
  </div>
</template>

<script>
export default {
  name: "Carousel-item",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
  .carousel-item-slide {
    display: block;
    min-width: 362px;
    height: 215px;
    padding: 40px 30px;
    box-shadow: 0px 4px 20px rgba(0, 70, 156, 0.08);
    border-radius: 5px;
    background: #FFFFFF;
    margin-right: 30px;

    .item {
      &__title {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
      }

      &__sub-title {
        color: #999999;
      }

      &__text {
        color: #999999;
      }
    }
  }
</style>