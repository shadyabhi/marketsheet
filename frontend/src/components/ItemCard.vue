<template>
  <div
    class="centered card"
    v-on:click="loadDetails"
  >

    <div class="image">
      <img
        v-if="item['pics'].length > 0"
        style="height:200px;overflow:auto;object-fit:cover;"
        :src="item['pics'][0]['thumbnail_url']"
      >
      <img
        v-else
        style="height:200px;overflow:auto;"
        src="http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png"
      >
    </div>
    <div class="content">
      <div class="header center aligned">
        {{ item['name'] }}</div>
      <br>
      <div class="ui horizontal divider">
        Details
      </div>
      <div class="description">
        <b>Model:</b> {{ item['model'] }}
      </div>
      <br>
      <div class="description">
        <b>Original Price:</b>
        ₹{{ item['original_price'] }}
      </div>
      <br>
      <div class="description">
        <b>Description:</b>
        {{ item['description'] }}
      </div>
      <br>
      <div class="description">
        <b>Tags:</b>
        {{ item['purpose'].join() }}
      </div>
    </div>
    <div class="extra content">
      <span class="ui green label left aligned">
        Sale: ₹{{ item['sale_price'] }}
      </span>

      <span class="ui grey label right floated">
        {{ item['age'] }} old
      </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "ItemCard",
  data() {
    return {
      item_id: this.$props["item"]["id"],
      item_modal: null
    };
  },
  methods: {
    loadDetails: function() {
      this.$router.push({
        path: "/item",
        query: { id: this.item_id }
      });
    }
  },
  props: ["item"]
};
</script>

<style>
div > b {
  font-size: 1.2em;
  text-align: justify;
  text-align-last: left;
  color: #db28289e;
  font-family: monospace;
}
</style>
