<script setup lang="ts">
import type { PageContent } from "~/types/content";

const props = defineProps<Pick<PageContent, "reviews" | "ctaLabel">>();
const activeReview = ref(0);
function moveReview(direction: number) {
  if (!props.reviews.length) return;
  activeReview.value =
    (activeReview.value + direction + props.reviews.length) %
    props.reviews.length;
}
function reviewOrder(index: number) {
  return (
    (index - activeReview.value + props.reviews.length) % props.reviews.length
  );
}
</script>

<template>
  <section class="community" aria-labelledby="community-title">
    <div class="section-intro">
      <h2 id="community-title">What are our fans saying?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis
        sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus
        consequat. Fusce non nibh luctus.
      </p>
    </div>
    <picture>
      <source
        media="(max-width: 700px)"
        srcset="/images/community-mobile.webp"
      />
      <img
        class="community-grid"
        src="/images/community-desktop.webp"
        alt="Our community enjoying their everyday loungewear"
        width="1465"
        height="263"
        loading="lazy"
      />
    </picture>
    <div class="reviews wrap">
      <button
        class="chevron"
        aria-label="Previous review"
        @click="moveReview(-1)"
      >
        ‹
      </button>
      <div class="review-cards">
        <article
          v-for="(review, i) in reviews"
          :key="i"
          class="review-card"
          :class="{ 'is-active': activeReview === i }"
          :style="{
            order: reviewOrder(i),
          }"
        >
          <div class="review-person">
            <span class="review-avatar" />
            <div>
              <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <span>{{ review.name }}</span>
            </div>
          </div>
          <p>{{ review.text }}</p>
        </article>
      </div>
      <button class="chevron" aria-label="Next review" @click="moveReview(1)">
        ›
      </button>
    </div>
    <div class="dots">
      <button
        v-for="(_, i) in reviews"
        :key="i"
        :class="{ active: activeReview === i }"
        :aria-label="`Show review ${i + 1}`"
        :aria-pressed="activeReview === i"
        @click="activeReview = i"
      />
    </div>
    <ShopCta :label="ctaLabel" rating />
  </section>
</template>
