<template>
  <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Каталог товаров</h1>
  </div>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
    <div class="col product-card" v-for="product in products" :key="product.id">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{{ product.name }}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">{{product.price}}&#8381;</h1>
          <p>{{ product.description }}</p>
          <button type="button" class="w-100 btn btn-lg btn-outline-primary">Добавить в корзину</button>
        </div>
      </div>
    </div>
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
