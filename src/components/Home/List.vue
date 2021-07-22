<template>
  <div>
      
    <div class="">
      <b-list-group>
        <div v-for="(item, item_key) in list" :key="item_key">
          <b-list-group-item 
            v-on:click="view_item(item)"
            class="rounded mb-3 bg-light animate__animated animate__fadeIn"
            button>

            <div v-if="item.status === 'bougth'" class="row text-muted">
              <div class="col-10">
                <p class="mb-1"><strong>{{ item.name }}</strong></p>
              </div>
              <div class="col-2 text-right">
                <i class="fal fa-cart-arrow-down"></i>
              </div>
            </div>

            <div v-if="item.status === 'active'">
              <p class="mb-1"><strong>{{ item.name }}</strong></p>
            </div>

            <p class="mb-0 small text-muted">Ultima modificacion: {{ item.created_at }}</p>

          </b-list-group-item>
        </div>
      </b-list-group>
    </div>

    <b-modal 
      :id="'wish-' + item.id"
      modal-header="false"
      centered
      hide-header
      hide-footer>

      <home-wish :wish="item" @close_item="close_item" />

    </b-modal>

  </div>
</template>

<script>
export default {
  props: [ 'list', 'status' ],
  components: {
    HomeWish: () => import('@/components/Home/Wish.vue')
  },
  data() {
    return {
      item: ''
    }
  },
  methods: {
    view_item(item) {
      this.item = item
      setTimeout(() => {
        this.$bvModal.show('wish-' + item.id )
      }, 200);
    },
    close_item() {
      this.$bvModal.hide('wish-' + this.item.id)
    }
  },
  mounted() {
    this.item = {
      title: ''
    }
  },
}
</script>