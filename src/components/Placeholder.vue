<template>
  <div class="placeholder-loader">
    <div
      class="loader-item"
      v-for="i in 8"
      :key="i"
      :style="`grid-row-end: span ${getSpanValue()};`">
      <div class="details-overlay">
        <div class="details">
          <div class="name" />
          <div class="location" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Placeholder',
  methods: {
    getSpanValue() {
      let value = Math.floor(Math.random() * 8);
      for (let i = 4; i > value;) {
        value = Math.floor(Math.random() *  8);
      }
      return value;
    }
  }
}
</script>

<style lang="scss">
  .placeholder-loader {
    margin-top: 70px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    display: grid;
    grid-row-gap: 50px;
    grid-auto-rows: 50px;
    grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
    column-gap: 50px;

    .loader-item {
      background-color: $grayF5;
      border-radius: 5px;
      width: 100%;
      height: 100%;
      -webkit-animation: 1.5s linear infinite;
      animation: loader-animation 1.5s linear infinite;

      .details-overlay {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .details {
          padding: 20px;

          .name {
            background-color: $grayE6;
            width: 200px;
            padding: 10px;
          }

          .location {
            background-color: $grayE6;
            width: 100px;
            padding: 10px;
            margin-top: 5px;
          }
        }
      }
    }
  }

  @keyframes loader-animation {
    0% {
      background-color: $grayF5;
    }
    30% {
      background-color: $grayEE;
    }
    70% {
      background-color: $grayDD;
    }
    100% {
      background-color: $grayE6;
    }
  }
</style>