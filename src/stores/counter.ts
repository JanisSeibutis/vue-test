import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', () => {
  interface IShopItem {
    name: string
    description: string
    price: number
    id: number
  }
  const shopItems = ref<IShopItem[]>([])

  const nextId = () => {
    const highestId = Math.max(...shopItems.value.map(item => item.id))
    const id = highestId + 1
    return id
  }

  shopItems.value = [
    {
      name: 'item1',
      description: 'Looks like item1',
      price: 10,
      id: 0,
    },
    {
      name: 'item2',
      description: 'Looks like item2',
      price: 10,
      id: 1,
    },
  ]

  nextId()

  return { shopItems, nextId }
})
