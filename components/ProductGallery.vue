<script setup lang="ts">
const props = defineProps<{ items: { image: string; name: string }[] }>();
const selected = ref(0);
const active = computed(() => props.items[selected.value] || props.items[0]);
function move(direction: number) {
  selected.value =
    (selected.value + direction + props.items.length) % props.items.length;
}
</script>
<template>
  <div
    id="collection"
    class="gallery"
    role="region"
    aria-label="Loungewear collection"
    tabindex="0"
    @keydown.left.prevent="move(-1)"
    @keydown.right.prevent="move(1)"
  >
    <div class="gallery-stage">
      <button
        class="chevron previous"
        aria-label="Previous outfit"
        @click="move(-1)"
      >
        ‹
      </button>
      <img
        :src="active?.image"
        :alt="active?.name"
        width="450"
        height="650"
        loading="lazy"
        class="gallery-photo"
      />
      <button class="chevron next" aria-label="Next outfit" @click="move(1)">
        ›
      </button>
      <div class="gallery-thumbs">
        <button
          v-for="(item, i) in items"
          :key="item.image"
          :aria-label="`View ${item.name}`"
          :aria-pressed="selected === i"
          @click="selected = i"
        >
          <img
            :src="item.image"
            :alt="item.name"
            width="35"
            height="44"
            loading="lazy"
          />
        </button>
      </div>
    </div>
    <p aria-live="polite">{{ active?.name }}</p>
  </div>
</template>
