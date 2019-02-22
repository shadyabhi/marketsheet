<template>
  <div class="ui one column row">

    <!-- Spinner -->
    <div
      v-if="saleItems.length == 0"
      class="ui row spinner"
    >
      <div class="ui center aligned grid">
        <atom-spinner
          :animation-duration="1000"
          :size="100"
          color="#1d61ff"
        />
      </div>
    </div>
    <div v-else>
      <h4 class="ui horizontal divider header">
        <i class="tag icon"></i>
        Unsold Items
      </h4>
      <!-- List of items -->
      <div class="ui fluid link cards">
        <item-card
          v-for="item in unsoldItems"
          v-on:showModal="onShowModal"
          v-bind:item="item"
          v-bind:key="item.id"
        > </item-card>
      </div>

      <br>
      <br>
      <h4 class="ui horizontal divider header">
        <i class="tag icon"></i>
        Sold Items
      </h4>

      <!-- Sold Items -->
      <div class="ui fluid link cards">
        <item-card
          v-for="item in soldItems"
          v-on:showModal="onShowModal"
          v-bind:item="item"
          v-bind:key="item.id"
          v-bind:class="{ greyed: item.sold }"
        > </item-card>
      </div>
    </div>
  </div>
</template>


<script>
import ItemCard from "../components/ItemCard.vue";
import { AtomSpinner } from "epic-spinners";

export default {
  name: "Home",
  components: { ItemCard, AtomSpinner },
  data() {
    return {
      itemModal: null,
      unsoldItems: {},
      soldItems: {}
    };
  },
  mounted: function() {
    this.$store.dispatch("loadItems");

    $(".accordion").accordion({});
  },
  methods: {
    onShowModal(value) {
      this.itemModal = value;
    }
  },
  watch: {
    saleItems: function(val) {
      var sold = {};
      var unsold = {};
      for (var key in this.saleItems) {
        if (this.saleItems[key]["sold"] == true) {
          sold[key] = this.saleItems[key];
        } else {
          unsold[key] = this.saleItems[key];
        }
      }
      this.soldItems = sold;
      this.unsoldItems = unsold;
    }
  },
  computed: {
    saleItems() {
      return this.$store.state.items;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui.link.cards {
  /* margin: 20px; */
  margin-top: 2em;
  display: flex;
  justify-content: center;
}
.centered {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.segment {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
