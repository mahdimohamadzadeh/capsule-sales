// export const state = () => ({
//   products: [],
// })

// export const actions = {
//   async getProducts({
//     commit
//   }) {
//     const data = (await this.$axios.get('')).data
//     commit('SET_PRODUCTS', data)
//   }
// }
// export const getters = {
//   allLargesCards: (state) => {
//     return state.largeCards
//   },
//   allSmallsCard: (state) => {
//     return state.smallCards
//   },
//   getProductById: (state) => (id) => {
//     function getAllCards() {
//       let large = Array(largeCardSections)[0].filter(section => section)
//       let small = state.smallCards
//       console.log(large);
//       // let cardsLarge;
//       // let cardsSmall;
//       // for (let i = 0; i < large.length; i++) {
//       //   cardsLarge = large[i];
//       // }
//       // for (let i = 0; i < small.length; i++) {
//       //   cardsSmall = small[i];
//       // }
//       // let cards = cardsSmall.cards.concat(cardsLarge.cards)
//       // const arrayMix = []
//       // arrayMix.push(cards)

//     }
//     // let cards = getAllCards()[0]
//     // let cardByID = cards.filter(function (card) {
//     //   return card.id == id
//     // })
//     return getAllCards()
//   }
// }
// export const mutations = {
//   SET_PRODUCTS(state, data) {
//     console.table(data);
//     state.products = data.attributes
//   }
// }
