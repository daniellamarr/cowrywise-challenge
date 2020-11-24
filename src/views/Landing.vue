<template>
  <div>
    <div class="landing-bg">
      <Header :page="'home'" :handleSubmit="searchViaKeyword" />
      <div class="image-list" v-if="!loading">
        <image-item
          v-for="item in items"
          :key="item.id"
          :item="item"
          :handlePreview="handlePreview" />
      </div>
      <placeholder v-else />
    </div>
  </div>
  <preview-image
    v-if="preview"
    :previewData="previewData"
    :handleClose="closePreview" />
</template>

<script>
import Header from '@/components/Header'
import PreviewImage from '@/components/PreviewImage'
import ImageItem from '@/components/ImageItem'
import Placeholder from '@/components/Placeholder'
import {searchPhotos} from '../api/unsplash'

export default {
  name: 'Landing',
  components: {
    Header,
    ImageItem,
    PreviewImage,
    Placeholder
  },
  data() {
    return {
      items: [],
      preview: false,
      previewData: {},
      loading: true
    }
  },
  methods: {
    getPhotos() {
      return searchPhotos('Africa')
        .then(response => {
          const {data} = response;
          data.results.map(datum => {
            datum.spanValue = this.getSpanValue()
          });
          this.items = data.results;
          this.loading = false;
        })
    },
    searchViaKeyword(query) {
      this.$router.push({
        name: 'Search',
        params: {
          query
        }
      });
    },
    getSpanValue() {
      let value = Math.floor(Math.random() * 8);
      for (let i = 4; i > value;) {
        value = Math.floor(Math.random() *  8);
      }
      return value;
    },
    handlePreview(previewItem) {
      this.preview = true
      this.previewData = previewItem
    },
    closePreview() {
      this.preview = false
      this.previewData = {}
    }
  },
  mounted() {
    this.getPhotos();
  }
}
</script>
