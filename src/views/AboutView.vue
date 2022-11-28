<template>
  <div class="about" v-for="product in products" :key="product.id">
    <h2>{{ product.id }} {{ product.name }}</h2>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    axios
      .get('https://jurapro.bhuser.ru/api-samohod/products')
      .then((response) => {
        this.products = response.data.content
      })
  }
}

</script>
