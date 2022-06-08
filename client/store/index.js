// import {
//   largeCardSections
// } from "../assets/data";
// import {
//   smallCardSections
// } from "../assets/data";

// export const state = () => ({
//   myRentals: [],
//   largeCards: [],
//   smallCards: []
// })

// export const actions = {
//   getLargeCardSections: ({
//     commit
//   }) => {
//     return largeCardSections.forEach(largecard => commit("SET_LARGE_DATA", largecard))
//   },
//   getSmallCardSections: ({
//     commit
//   }) => {
//     return smallCardSections.forEach(smallCard => commit("SET_SMALL_DATA", smallCard))
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
//   SET_LARGE_DATA(state, data) {
//     state.largeCards.push(data)
//   },
//   SET_SMALL_DATA(state, data) {
//     state.smallCards.push(data)
//   },
//   addItem(state, id) {
//     let item = state.products.find(product => product.id == id)
//     state.myRentals.push(item)
//   }
// }
