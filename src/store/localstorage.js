import LZString from 'lz-string'

const enableCompress = false

localStorage.setItem('enableCompress', enableCompress)

const storage = {
  get (name) {
    if (enableCompress) {
      return localStorage.getItem(name) ? JSON.parse(LZString.decompressFromUTF16(localStorage.getItem(name))) : null
    } else {
      return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : null
    }
  },
  set (name, value) {
    if (enableCompress) {
      localStorage.setItem(name, LZString.compressToUTF16(JSON.stringify(value)))
    } else {
      localStorage.setItem(name, JSON.stringify(value))
    }
  }
}

export default storage
