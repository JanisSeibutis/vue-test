<script setup lang="ts">
import { useShopStore } from '../stores/shopStore'
import shopItem from '@/components/shopItem.vue'

const shopStore = useShopStore()
</script>

<template>
  <main>
    <h1>Hem</h1>
    <div v-for="item in shopStore.shopItems">
      <shopItem
        :name="item.name"
        :description="item.description"
        :price="item.price"
      />
    </div>
  </main>
</template>

<style>
div {
  display: flex;
  flex-direction: column;
}
</style>
