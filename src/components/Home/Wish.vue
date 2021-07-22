<template>
  <div>

    <div class="text-center">
      <b-button v-on:click="close()" variant="white">
        <span class="text-muted">
          <i class="fal fa-times"></i>
        </span>
      </b-button>
    </div>

    <div class="text-center py-3">

      <div v-if="wish.status ==='bougth'" class="text-success">
        <p class="mb-0"><i class="fad fa-cart-arrow-down"></i></p>
        <p>Comprado</p>
      </div>

      <h5>{{ wish.name }}</h5>
      <p class="mb-2">{{ wish.description }}</p>
      <p class="text-muted small">Ultima modificacion: {{ wish.modified_at }}</p>

      <img :src="wish.photo" :alt="wish.name" class="rounded pt-3 pb-4">

    </div>

    <div class="row d-flex justify-content-center">
      
      <div v-if="wish.status !== 'bougth'" class="col-4">
        <b-button 
          variant="white" class="text-muted text-center" 
          block>
          <p><i class="fas fa-edit"></i></p>
          <p class="mb-0">Editar</p>
        </b-button>
      </div>

      <div v-if="wish.status !== 'bougth'" class="col-4">
        <b-button  v-on:click="update('bougth')"
          variant="white" class="text-muted text-center" block>
          <p><i class="fas fa-cart-arrow-down"></i></p>
          <p class="mb-0">Comprado</p>
        </b-button>
      </div>

      <div class="col-4">
        <b-button v-on:click="update('deleted')"
          variant="white" class="text-muted text-center" 
          block>
          <p><i class="fas fa-trash"></i></p>
          <p class="mb-0">Eliminar</p>
        </b-button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: [ 'wish' ],
  methods: {
    update( /* status */ ) {
      
    },
    close() {
      this.$emit('close_item')
    }
  },
}
</script>