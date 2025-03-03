import { getLocalStorageItem, setLocalStorageItem } from '@/utils/storage'

const userData = getLocalStorageItem('userData')

if (!userData) {
  setLocalStorageItem('userData', {
    username: 'admin',
    password: 'admin'
  })
}
