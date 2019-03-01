const state = {
    funds: 10000,
    portfolioStocks: [],
};

const mutations = {
    buyStock(state, { stockId, quantity, stockPrice }) {
        const myStock = state.portfolioStocks.find(stock => stock.id === stockId);
        if (myStock) {
            myStock.quantity += quantity;
        } else {
            state.portfolioStocks.push({
                id: stockId,
                quantity,
            });
        }

        state.funds -= stockPrice * quantity;
    },
    sellStock(state, { stockId, quantity, stockPrice }) {
        const myStock = state.portfolioStocks.find(stock => stock.id === stockId);

        if (myStock) {
            if (myStock.quantity > quantity) {
                myStock.quantity -= quantity;
            } else {
                state.portfolioStocks.splice(state.portfolioStocks.indexOf(myStock), 1);
            }

            state.funds += quantity * stockPrice;
        }
    },
};

const actions = {
    buyStock({ commit }, order) {
        commit('buyStock', order);
    },
    sellStock({ commit }, order) {
        commit('sellStock', order);
    },
};

const getters = {
    stockPortfolio(state, getters) {
        return state.portfolioStocks.map((portfolioStock) => {
            const marketStock = getters.stocks.find(stock => stock.id === portfolioStock.id);
            return {
                id: portfolioStock.id,
                quantity: portfolioStock.quantity,
                name: marketStock.name,
                price: marketStock.price,
            };
        });
    },
    funds(state) {
        return state.funds;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
