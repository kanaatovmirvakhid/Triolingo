<template>
  <div>
    <input v-model="text" placeholder="Введите текст" />
    <button @click="submit">Отправить</button>
    {{ response }}
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const response = ref('')

async function submit () {
  try {
    response.value = await $fetch('/api/chat', {
      method: 'post',
      body: { text: text.value },
    })
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}
</script>