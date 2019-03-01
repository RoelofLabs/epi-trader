import Vue from 'vue';

const loadData = ({ commit }) => {
    Vue.http.get('data.json')
        .then(response => response.json())
        .then((data) => {
            if (data) {
                const { stocks, funds, stockPortfolio } = data;

                commit.dispatch('setStocks', stocks);
                commit.dispatch('setPortfolio', { funds, stockPortfolio });
            }
        });
};

export default {
    loadData,
};
