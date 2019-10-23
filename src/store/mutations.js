import storage from './localstorage'

const mutation = {
  changeCity (state, city) {
    state.city = city
    storage.set('city', city)
  }
}

export default mutation
