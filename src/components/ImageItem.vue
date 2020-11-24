<template>
  <div
    class="item"
    :style="`background-image: url(${item.urls.regular}); grid-row-end: span ${item.spanValue}`"
    @click="handlePreview(item)">
    <div class="item-overlay">
      <div class="details">
        <h4>{{item.user.name}}</h4>
        <p>{{item.user.location}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    item: Object,
    handlePreview: Function
  },
}
</script>

<style lang="scss" scoped>
  .item {
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }

    .item-overlay {
      height: 100%;
      display: flex;
      border-radius: 5px;
      flex-direction: column;
      justify-content: flex-end;
      background-color: rgba(0, 0, 0, 0.3);
      cursor: pointer;

      .details {
        color: $white;
        padding: 20px;
      }
    }
  }
</style>