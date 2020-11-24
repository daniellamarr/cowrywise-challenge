<template>
  <div class="input-field" v-if="page === 'home'">
    <form @submit.prevent="handleSubmit(query)">
      <div class="icon">
        <img src="../icons/search.svg" alt="">
      </div>
      <input type="text" placeholder="Search for photo" v-model="query">
    </form>
  </div>
  <div class="search-text" v-else>
    <h1 v-if="searchLoading">Searching for <span>"{{searchQuery}}"</span></h1>
    <h1 v-else>Search Results for <span>"{{searchQuery}}"</span></h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      query: ''
    }
  },
  props: {
    searchQuery: String,
    page: String,
    handleSubmit: Function,
    searchLoading: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .input-field {
    background-color: $white;
    padding: 10px;
    padding-left: 20px;
    border-radius: 5px;

    form {
      display: flex;
      align-items: center;

      .icon {
        margin-top: 7px;
      }

      input {
        background-color: transparent;
        width: 100%;
        border: none;
        padding-left: 20px;
        font-size: 17px;
        font-weight: 500;
        font-family: $font-family;

        &:focus {
          outline: 0;
        }
      }
    }
  }

  .search-text {
    h1 {
      color: $dark-blue;

      span {
        color: $light-blue2;
      }
    }
  }
</style>