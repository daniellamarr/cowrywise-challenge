<template>
  <router-view/>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: $font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.landing-bg {
  background-color: $light-blue;
  padding: 80px;
  padding-left: 120px;
  padding-right: 120px;
  height: 100px;

  @include mobile {
    padding: 30px;
    height: 70px;
  }

  @include tablet {
    padding: 50px;
  }
}

.image-list {
  margin-top: 70px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  display: grid;
  grid-row-gap: 50px;
  grid-auto-rows: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
  column-gap: 50px;

  @include mobile {
    padding-left: 0;
    padding-right: 0;
    margin-top: 30px;
  }
}

.notFound {
  font-size: 20px;
  text-align: center;
  margin-top: 100px;

  @include mobile {
    font-size: 13px;
  }
}
</style>
