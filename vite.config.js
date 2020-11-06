import { resolve } from 'path'

module.exports = {
  alias: {
    '/@/': resolve(__dirname, './src')
  },
  base: process.env.NODE_ENV === 'production' ? '/F2E_Filter/' : '/'
}
