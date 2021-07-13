<template>
  <div class="carousel">
    <div class="wrapper">
      <carousel-item
          v-for="(item) in carousel_data"
          :key="item.id"
          :item_data="item"
          :style="`transform: ${transformItem}`"
      />
      <div class="carousel-pagination">
        <div class="pagination"
             v-for="(item, index) in carousel_data"
             :key="item.id"
             :class="{active: item === carousel_data[activeItem]}"
             @click="changeSlide(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";

export default {
  name: "CarouselSlider",
  components: {
    CarouselItem
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      transformItem: '',
      activeItem: 0
    }
  },
  methods: {
    changeSlide (clickItem) {
      this.transformItem = `translateX(${clickItem * -362}px)`
      this.activeItem = clickItem
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    overflow: hidden;
    max-width: 1045px;
    position: relative;
    height: 264px;

    .carousel-item-slide {
      transition: 2s;
    }
  }
  .carousel-pagination {
    position: absolute;
    bottom: 0;
    display: flex;

    .pagination {
      width: 12px;
      height: 12px;
      border: 1.6px solid #0063DD;
      display: flex;
      padding-left: 0;
      list-style: none;
      margin-right: 8px;
      border-radius: 50%;

      &.active {
        background: #0063DD;
        width: 39px;
        border-radius: 32px;
      }
    }
  }
</style>