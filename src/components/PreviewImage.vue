<template>
  <div class="preview">
    <div class="close" @click="handleClose">x</div>
    <div class="preview-inner">
      <div class="preview-details">
        <div class="image">
          <img :src="previewData.urls.raw" alt="">
        </div>
        <div class="details">
          <h1>{{previewData.user.name}}</h1>
          <p>{{previewData.user.location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewImage',
  props: {
    previewData: Object,
    handleClose: Function
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;

    .close {
      position: absolute;
      right: 50px;
      top: 20px;
      font-size: 30px;
      color: $white;
      cursor: pointer;
    }

    .preview-inner {
      height: 100%;
      padding: 80px;
      padding-top: 50px;
      display: flex;
      justify-content: center;

      .preview-details {
        .image {
          height: 70vh;

          img {
            height: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
        }

        .details {
          background-color: $white;
          padding: 20px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;

          h1 {
            color: $dark-blue;
            font-size: 22px;
          }

          p {
            color: $light-blue2;
          }
        }
      }
    }
  }
</style>