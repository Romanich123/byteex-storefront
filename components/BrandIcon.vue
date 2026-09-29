<script setup lang="ts">
defineProps<{ name: string }>()
</script>
<template>
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <template v-if="name === 'cloud'"><path d="M10 29h21a7 7 0 0 0 1-14 10 10 0 0 0-19-2 8 8 0 0 0-3 16Z"/></template>
    <template v-else-if="name === 'waves'"><path v-for="y in [11,20,29]" :key="y" :d="`M5 ${y} Q12 ${y-7} 20 ${y} T35 ${y}`"/></template>
    <template v-else-if="name === 'leaf'"><path d="M9 5c20 3 27 17 17 25C14 35 7 22 9 5Z M12 12l20 23 M18 19v-7 M22 24l7-2"/></template>
    <template v-else-if="name === 'water'"><path d="M20 3S7 18 7 26a13 13 0 0 0 26 0C33 18 20 3 20 3Z M13 25c0 5 3 8 7 8"/></template>
    <template v-else-if="name === 'bolt'"><path d="m23 3-15 21h11l-2 13 15-22H21Z"/></template>
    <template v-else-if="name === 'truck'"><path d="M3 10h22v21H12 M25 17h7l6 7v7h-4 M25 31h1 M3 16h9 M1 22h9"/><circle cx="16" cy="31" r="4"/><circle cx="30" cy="31" r="4"/></template>
    <template v-else-if="name === 'cart'"><path d="M3 5h5l5 22h10 M10 11h25l-4 11 M21 32c-1-8 7-13 15-12-1 11-6 16-15 12Zm0 0 9-7"/><circle cx="15" cy="33" r="2"/></template>
    <template v-else><path d="M21 2v36 M16 10a11 11 0 0 0 0 21 M14 5l-2-3 M7 11l-3-2 M6 20H2 M7 29l-3 2 M14 35l-2 3 M29 8a11 11 0 1 0 9 18A12 12 0 0 1 29 8Z"/></template>
  </svg>
</template>
