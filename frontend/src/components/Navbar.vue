<template>
  <div class="ui row navbar">
    <div
      class="ui fixed inverted menu"
      id='header'
    >
      <div class="ui container">
        <div class="ui secondary menu">
          <router-link
            class="item"
            v-bind:to="{name: 'Home'}"
          ><i class="ui home icon"></i>Home</router-link>
          <router-link
            class="item"
            v-bind:to="{name: 'Contact'}"
          ><i class="ui address book icon"></i>Contact US</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
