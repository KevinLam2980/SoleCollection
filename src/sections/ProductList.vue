<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Our Products List</h1>
      <div class="row">
        <div class="col-md-4" v-for="(product, index) in products" :key="index">
          <div class="card product-item">
            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images" :key="index">
                <img
                  v-if="!image.includes('video')"
                  :src="image"
                  class="card-img-top"
                  alt="..."
                  width="250px"
                  height="100%"
                />
                <video
                  v-else-if="image.includes('video')"
                  class="card-img-top"
                  autoplay="autoplay"
                  loop
                  muted
                >
                  <source :src="image" />
                  Your browser does not support the video tag.
                </video>
              </slide>
            </carousel>

            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5 class="card-title">{{ product.name }}</h5>
                <h5 class="card-priceS">{{ product.price | currency }}</h5>
              </div>

              <AddToCart
                :image="getImage(product.images)"
                :p-id="product.id"
                :price="product.price"
                :name="product.name"
              >
              </AddToCart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "ProductsList",
  props: {
    msg: String,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    },
  },
  firestore() {
    return {
      products: db.collection("products"),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
img,
video {
  width: 100%;
  height: 300px;
  object-fit: cover;
}
.card-body {
  height: 150px;
}
.card {
  margin-bottom: 10px;
}
</style>
