<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock" >

      <template v-slot:heading>
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }}
            <small>(Price: {{ stock.price }})</small>
          </h3>
        </div>
      </template>

      <template v-slot="{ insufficient, quantity, clickHandler }">
        <div class="pull-right">
            <button
              class="btn btn-success"
              :disabled="insufficient || quantity <= 0 || !Number.isInteger(quantity)"
              @click="clickHandler"
            >{{ insufficient ? 'Insufficient' : 'Buy' }}</button>
        </div>
      </template>

    </app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue';

export default {
    components: {
        appStock: Stock,
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        },
    },
};
</script>
