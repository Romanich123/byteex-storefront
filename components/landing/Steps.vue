<script setup lang="ts">
import type { PageContent } from "~/types/content";

const props = defineProps<Pick<PageContent, "steps" | "ctaLabel">>();
const activeStep = ref(0);
function moveStep(direction: number) {
  if (!props.steps.length) return;
  activeStep.value =
    (activeStep.value + direction + props.steps.length) % props.steps.length;
}
</script>

<template>
  <section class="steps wrap" aria-labelledby="steps-title">
    <h2 id="steps-title">Comfort made easy</h2>
    <div class="steps-carousel">
      <button
        class="chevron mobile-only"
        aria-label="Previous step"
        @click="moveStep(-1)"
      >
        ‹
      </button>
      <div class="step-cards">
        <article
          v-for="(step, i) in steps"
          :key="step.title"
          class="step-card"
          :class="{ 'is-active': activeStep === i }"
        >
          <BrandIcon :name="step.icon" />
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
      <button
        class="chevron mobile-only"
        aria-label="Next step"
        @click="moveStep(1)"
      >
        ›
      </button>
    </div>
    <ShopCta :label="ctaLabel" rating />
  </section>
</template>
