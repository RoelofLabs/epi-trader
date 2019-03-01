<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import stocksData from '../../data/stocks-data';
import Stock from './Stock';

export default {
  data() {
    return {
      stocks: stocksData
    };
  },
  components: {
    appStock: Stock,
  }
};
</script>
