<script setup lang="ts">
import { useShopStore } from '../stores/shopStore'
const shopStore = useShopStore()

defineProps({
  name: String,
  description: String,
  price: Number,
  id: Number,
})
</script>

<template>
  <div>
    <span>{{ name }}</span>
    <span>{{ description }}</span>
    <span>{{ price }}</span>
  </div>
</template>
