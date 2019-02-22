import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    items: []
  },
  actions: {
    loadItems({ commit }) {
      axios
        .get('/api/items')
        .then(r => r.data['data'])
        .then(items => {
          var saleItems = {}
          for (var i = 0; i < items.length; i++) {
            var item = {}
            item['id'] = items[i]['id']
            item['name'] = items[i]['fields']['Item']
            item['model'] = items[i]['fields']['Model']
            item['description'] = items[i]['fields']['Description']
            item['original_price'] = items[i]['fields']['Original Price']
            item['sale_price'] = items[i]['fields']['Sale Price']
            item['age'] = items[i]['fields']['Age']
            item['purpose'] = items[i]['fields']['Purpose']
            item['sold'] = items[i]['fields']['Sold']
            item['product_link'] = items[i]['fields']['Product Link']

            var pics = items[i]['fields']['Current Pics']
            item['pics'] = []
            if (pics != null) {
              for (var j = 0; j < pics.length; j++) {
                var pic = {}
                pic['name'] = pics[j]['filename']
                pic['image_url'] = pics[j]['url']
                pic['thumbnail_url'] = pics[j]['thumbnails']['large']['url']
                item['pics'].push(pic)
              }
            }
            saleItems[item['id']] = item
          }

          commit('SET_ITEMS', saleItems)
        })
    }
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items
    }
  }
})
