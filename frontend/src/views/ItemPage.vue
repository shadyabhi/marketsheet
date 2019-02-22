<template>
  <div
    v-if="isDataReady()"
    class="column"
  >
      <div class="ui raised text container segment column">
        <b>Selling Price: </b>
        <a class="ui grey huge label">₹ {{ saleItems[id]['sale_price'] }}</a>
        <br>
        <br>
        <b>Product Name: </b> {{ saleItems[id]['name'] }}
        <br>
        <b>Full Model Info: </b> {{ saleItems[id]['model'] }}
        <br>
        <b>Age: </b> {{ saleItems[id]['age'] }}
        <br>
        <br>
        <b>Product Link: </b> <a :href="saleItems[id]['product_link']">{{ saleItems[id]['product_link'] }}</a>
        <br>
        <br>
        <b>Description: </b>
        <br>
        {{ saleItems[id]['description'] }}
      </div>
      <br>

      <div class="ui raised text container">
        <br>
        <div
          v-for="image in images"
          v-bind:key="image['image_url']"
        >
          <b>{{ image['name'] }}</b>
          <img
            :src="image['image_url']"
            style="max-width:100%;max-height:100%;"
          />
          <br>
          <br>
          <br>
        </div>

      </div>
      <br>
    </div>

</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
import ItemCard from "../components/ItemCard.vue";
import "viewerjs/dist/viewer.css";

export default {
  name: "ItemPage",
  components: {
    ItemCard
  },
  // Keep query params in sync
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  computed: mapState({
    saleItems: state => state.items
  }),
  data: function() {
    return {
      images: []
    };
  },
  watch: {
    // whenever question changes, this function will run
    saleItems: function(newValue, oldValue) {
      this.images = newValue[this.id]["pics"];
    }
  },
  methods: {
    isDataReady: function() {
      if (
        this.saleItems != undefined &&
        this.id != undefined &&
        this.id in this.saleItems
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted: function() {
    this.$store.dispatch("loadItems");
  }
};
</script>
