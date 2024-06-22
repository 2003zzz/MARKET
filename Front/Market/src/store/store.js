import Vuex from 'vuex'
import sneakers1 from '../assets/image/sneakers/sneakers-1.jpg'
import sneakers2 from '../assets/image/sneakers/sneakers-2.jpg'
import sneakers3 from '../assets/image/sneakers/sneakers-3.jpg'
import sneakers4 from '../assets/image/sneakers/sneakers-4.jpg'
import sneakers6 from '../assets/image/sneakers/sneakers-6.jpg'
import sneakers7 from '../assets/image/sneakers/sneakers-7.jpg'
import sneakers8 from '../assets/image/sneakers/sneakers-8.jpg'
import sneakers9 from '../assets/image/sneakers/sneakers-9.jpg'
import sneakers10 from '../assets/image/sneakers/sneakers-10.jpg'
import sneakers12 from '../assets/image/sneakers/sneakers-12.jpg'

const store = new Vuex.Store({
  state: {
    CardList: [
      {
        id: 0,
        title: 'Nike Air Max 270',
        price: 1212,
        content: 'Experience ultimate comfort with Nike Air Max 270. Featuring a large Air unit for cushioning.',
        img: sneakers1
      },
      {
        id: 1,
        title: 'Adidas Ultraboost 21',
        content: 'Boost your run with Adidas Ultraboost 21. Unmatched energy return and style.',
        price: 2323,
        img: sneakers2
      },
      {
        id: 3,
        title: 'Puma RS-X',
        content: 'Step up your game with Puma RS-X. Bold design and superior comfort.',
        price: 213,
        img: sneakers6
      },
      {
        id: 4,
        title: 'New Balance 990v5',
        content: 'Classic style meets modern performance in the New Balance 990v5.',
        price: 2323,
        img: sneakers3
      },
      {
        id: 5,
        title: 'ASICS Gel-Kayano 27',
        content: 'dfdf',
        price: 2323,
        img: sneakers4
      },
      {
        id: 6,
        title: 'Reebok Nano X',
        content: 'Run with confidence in ASICS Gel-Kayano 27. Support and cushioning for long distances.',
        price: 100,
        img: sneakers7
      },
      {
        id: 7,
        title: 'Under Armour ',
        content: 'Perfect for any workout, the Reebok Nano X provides flexibility and durability.',
        price: 100,
        img: sneakers8
      },
      {
        id: 8,
        title: 'Saucony Endorphin',
        content: 'Under Armour HOVR Phantom delivers a zero gravity feel and energy return.',
        price: 1990,
        img: sneakers9
      },
      {
        id: 9,
        title: 'Brooks Ghost',
        content: 'Race-ready with the Saucony Endorphin Pro. Speedroll technology for maximum propulsion.',
        price: 100,
        img: sneakers10
      },
      {
        id: 10,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers2
      },
      {
        id: 11,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers12
      },
      {
        id: 12,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers8
      },
      //сгенерировать еще 20 карточек
      {
        id: 13,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers9
      },
      {
        id: 14,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers2
      },
      {
        id: 15,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers4
      },
      {
        id: 16,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers10
      },
      {
        id: 17,
        title: 'Hoka One One',
        content: 'Smooth and responsive, the Brooks Ghost 13 is perfect for long runs.',
        price: 100,
        img: sneakers1
      }
    ],
    DrawerList: [],
    DrawerSum: 0
  },
  getters: {
    //найти карточку по id
    getCardById: (state) => (id) => {
      console.log(state.CardList.find((item) => item.id === id))
      return state.CardList.find((item) => item.id === id)
    },
     // посчитать сумму по карточкам
    getSum(state) {
      console.log(state.DrawerList.reduce((acc, item) => (acc += item.price), 0))
      return state.DrawerList.reduce((acc, item) => (acc += item.price), 0)
    }
  },
  mutations: {
    addCard(state, card) {
      const { id, title,  price, img } = card
      state.DrawerList.unshift({ id, title,  price, img })
      state.DrawerSum = state.DrawerList.reduce((acc, item) => (acc += item.price), 0)
    },
    removeCard(state, id) {
      state.DrawerList = state.DrawerList.filter((item) => item.id !== id)
      state.DrawerSum = state.DrawerList.reduce((acc, item) => (acc += item.price), 0)
    },
  },
  actions: {
    addCard({ commit }, card) {
      commit('addCard', card)
    },
    removeCard({ commit }, card) {
      commit('removeCard', card)
    }
  }
})

export default store
