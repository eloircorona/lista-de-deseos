<template>
  <div class="home">

    <div class="container py-3">
      <div class="row px-3">

        <b-button v-on:click="select('all')"
          variant="white" 
          class="col-4 animate__animated animate__fadeIn"
          :class="(status === 'all') ? '' : 'text-muted'">
          <p class="mb-2"><i class="fas fa-list"></i></p>
          <p class="mb-0">Todo</p>
        </b-button>

        <b-button v-on:click="select('buy')"
          variant="white" 
          class="col-4 animate__animated animate__fadeIn"
          :class="(status === 'buy') ? '' : 'text-muted'">
          <p class="mb-2"><i class="fas fa-cart-plus"></i></p>
          <p class="mb-0">Por comprar</p>
        </b-button>

        <b-button v-on:click="select('bougth')"
          variant="white" 
          class="col-4 animate__animated animate__fadeIn"
          :class="(status === 'bougth') ? '' : 'text-muted'">
          <p class="mb-2"><i class="fas fa-cart-arrow-down"></i></p>
          <p class="mb-0">Comprado</p>
        </b-button>

      </div>
    </div>

    <div class="container py-3">
      <home-list :list="list" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HomeList: () => import('@/components/Home/List.vue')
  },
  data() {
    return {
      list: '',
      status: ''
    }
  },
  methods: {
    select( option ) {
      this.status = option
      this.get_list()
    },
    get_list() {
      this.list = []

      setTimeout(() => {
        this.list = (this.status === 'all')
        ?
        [
          { id: 0, name: "Nombre del item de la lista", description: 'Es una description del item de la lista', created_at: '21/02/2021 08:50:00', modified_at: '21/02/2021 08:55:01', photo: 'https://placekitten.com/300/300', status: 'active' },
          { id: 1, name: "Nombre del item de la lista", description: 'Es una description del item de la lista', created_at: '21/02/2021 08:50:00', modified_at: '21/02/2021 08:55:01', photo: 'https://placekitten.com/300/300', status: 'bougth' },
        ]
        :
        (this.status === 'buy') 
        ?
        [
          { id: 0, name: "Nombre del item de la lista", description: 'Es una description del item de la lista', created_at: '21/02/2021 08:50:00', modified_at: '21/02/2021 08:55:01', photo: 'https://placekitten.com/300/300', status: 'active' }
        ]
        :
        [
          { id: 1, name: "Nombre del item de la lista", description: 'Es una description del item de la lista', created_at: '21/02/2021 08:50:00', modified_at: '21/02/2021 08:55:01', photo: 'https://placekitten.com/300/300', status: 'bougth' },
        ]
      }, 100);
    }
  },
  mounted() {
    this.status = 'all'
    this.list = []

    this.get_list()
  },
}
</script>
