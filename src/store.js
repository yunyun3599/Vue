import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            count: 0,
            cart: [{
                product_id: 1,
                product_name: "아이폰 거치대",
                category: "A"
            }]
        }
    },
    getters: {
        cartCount: (state) => {
            return state.cart.lenfth;
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addCart(state) {
            state.cart.push({
                product_id: 1,
                product_name: "아이폰 거치대",
                category: "A"
            })
        }
    }
})

export default store;