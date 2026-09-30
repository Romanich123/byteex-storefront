<script setup lang="ts">
import type { PageContent } from "~/types/content";

defineProps<Pick<PageContent, "faqs" | "ctaLabel">>();
const openFaq = ref<number | null>(0);
</script>

<template>
  <section class="faq wrap" aria-labelledby="faq-title">
    <div>
      <h2 id="faq-title">Frequently asked questions.</h2>
      <div class="faq-list">
        <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
          <h3>
            <button
              :id="`question-${i}`"
              :aria-expanded="openFaq === i"
              :aria-controls="`answer-${i}`"
              @click="openFaq = openFaq === i ? null : i"
            >
              {{ faq.question }}
              <span aria-hidden="true">{{ openFaq === i ? "−" : "+" }}</span>
            </button>
          </h3>
          <div
            v-show="openFaq === i"
            :id="`answer-${i}`"
            role="region"
            :aria-labelledby="`question-${i}`"
          >
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <img
      class="faq-art"
      src="/images/faq-collage.webp"
      alt="Loungewear made for your everyday"
      width="441"
      height="652"
      loading="lazy"
    />
    <ShopCta class="mobile-only" :label="ctaLabel" rating />
  </section>
</template>
