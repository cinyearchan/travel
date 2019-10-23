import storage from './localstorage'

const defaultCity = '上海'

const state = {
  city: storage.get('city') || defaultCity
}

export default state
