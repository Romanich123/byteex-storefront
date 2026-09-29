<script setup lang="ts">
import { fallbackPage, type PageContent } from './data/page'
const { data } = await useFetch('/api/page')
const page = computed(() => (data.value?.page || fallbackPage) as PageContent)
const activeStep = ref(0)
const activeReview = ref(0)
const activeLogo = ref(0)
const openFaq = ref<number | null>(0)
const logos = [ ['eco-stylist','Eco-Stylist'], ['canadian-living','Canadian Living'], ['jillian-harris','Jillian Harris'], ['eco-hub','The Eco Hub'], ['trendhunter','Trendhunter'] ]
function cycle(kind: 'step' | 'review', direction: number) {
  const state = kind === 'step' ? activeStep : activeReview
  const count = kind === 'step' ? page.value.steps.length : page.value.reviews.length
  state.value = (state.value + direction + count) % count
}
</script>
<template>
  <div>
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="announcement"><span class="desktop-only">CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) &nbsp; · &nbsp; </span>{{ page.announcement }}<span class="desktop-only"> &nbsp; · &nbsp; easy 45 day return window.</span></div>
    <header class="header wrap"><a href="#" aria-label="Byteex home"><img src="/images/logo.png" alt="BYTEEX" width="200" height="36"></a></header>
    <main id="main">
      <section class="hero wrap" aria-labelledby="hero-title">
        <h1 id="hero-title">{{ page.title }}</h1>
        <div class="hero-art" aria-label="Everyday loungewear collection"><img v-for="(src,i) in page.heroImages" :key="src" :src="src" :alt="['Soft grey lounge set', 'Comfortable white robe', 'Relaxing in everyday essentials'][i] || 'Byteex loungewear'" :class="`hero-photo photo-${i}`" :fetchpriority="i === 1 ? 'high' : 'auto'" width="430" height="650"></div>
        <ul class="hero-benefits"><li v-for="(text,i) in page.heroBenefits" :key="text"><span class="icon-disc"><BrandIcon :name="['sun','cart','waves'][i] || 'leaf'"/></span><span>{{ text }}</span></li></ul>
        <ShopCta class="hero-cta" :label="page.ctaLabel"/>
        <div class="hero-review"><div class="review-person"><img src="/images/avatar.webp" alt="" width="39" height="39"><div><span class="review-name">Jane, S.</span><span class="stars" aria-label="5 out of 5 stars">★★★★★</span><span class="review-count">One of 500+ 5 Star Reviews Online</span></div></div><p>{{ page.reviews[0]?.text }}</p></div>
      </section>
      <section class="press" aria-label="As seen in"><div class="wrap"><p>as seen in</p><div class="press-logos"><img v-for="(logo,i) in logos" :key="logo[0]" :class="{ 'mobile-hidden': i < activeLogo || i > activeLogo + 2 }" :src="`/images/${logo[0]}.webp`" :alt="logo[1]" width="190" height="52" loading="lazy"></div><div class="dots mobile-only"><button v-for="i in 3" :key="i" :class="{ active: activeLogo === i - 1 }" :aria-label="`Show press logos ${i}`" :aria-pressed="activeLogo === i - 1" @click="activeLogo = i - 1"/></div></div></section>
      <section class="benefits wrap" aria-labelledby="benefits-title">
        <h2 id="benefits-title">{{ page.benefitsTitle }}</h2>
        <ProductGallery :items="page.gallery"/>
        <div class="benefit-list"><article v-for="item in page.benefits" :key="item.title" class="benefit"><span class="icon-disc"><BrandIcon :name="item.icon"/></span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></article></div>
        <ShopCta class="mobile-only" :label="page.ctaLabel" rating/>
      </section>
      <section class="story"><div class="wrap story-grid"><h2>{{ page.storyTitle }}</h2><img class="story-art" :src="page.storyImage" alt="Comfortable mornings, in your own rhythm" width="558" height="664" loading="lazy"><div class="story-copy"><p v-for="paragraph in page.story" :key="paragraph">{{ paragraph }}</p><ShopCta class="desktop-only" :label="page.ctaLabel"/></div></div></section>
      <section class="steps wrap" aria-labelledby="steps-title"><h2 id="steps-title">Comfort made easy</h2><div class="steps-carousel"><button class="chevron mobile-only" aria-label="Previous step" @click="cycle('step',-1)">‹</button><div class="step-cards"><article v-for="(step,i) in page.steps" :key="step.title" class="step-card" :class="{ 'is-active': activeStep === i }"><BrandIcon :name="step.icon"/><h3>{{ step.title }}</h3><p>{{ step.text }}</p></article></div><button class="chevron mobile-only" aria-label="Next step" @click="cycle('step',1)">›</button></div><ShopCta :label="page.ctaLabel" rating/></section>
      <section class="community" aria-labelledby="community-title"><div class="section-intro"><h2 id="community-title">What are our fans saying?</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.</p></div><picture><source media="(max-width: 700px)" srcset="/images/community-mobile.webp"><img class="community-grid" src="/images/community-desktop.webp" alt="Our community enjoying their everyday loungewear" width="1465" height="263" loading="lazy"></picture>
        <div class="reviews wrap"><button class="chevron" aria-label="Previous review" @click="cycle('review',-1)">‹</button><div class="review-cards"><article v-for="(review,i) in page.reviews" :key="i" class="review-card" :class="{ 'is-active': activeReview === i }"><div class="review-person"><span class="review-avatar"/><div><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><span>{{ review.name }}</span></div></div><p>{{ review.text }}</p></article></div><button class="chevron" aria-label="Next review" @click="cycle('review',1)">›</button></div>
        <div class="dots"><button v-for="(_,i) in page.reviews" :key="i" :class="{ active: activeReview === i }" :aria-label="`Show review ${i+1}`" :aria-pressed="activeReview === i" @click="activeReview = i"/></div><ShopCta :label="page.ctaLabel" rating/>
      </section>
      <section class="faq wrap" aria-labelledby="faq-title"><div><h2 id="faq-title">Frequently asked questions.</h2><div class="faq-list"><div v-for="(faq,i) in page.faqs" :key="i" class="faq-item"><h3><button :id="`question-${i}`" :aria-expanded="openFaq === i" :aria-controls="`answer-${i}`" @click="openFaq = openFaq === i ? null : i">{{ faq.question }}<span aria-hidden="true">{{ openFaq === i ? '−' : '+' }}</span></button></h3><div v-show="openFaq === i" :id="`answer-${i}`" role="region" :aria-labelledby="`question-${i}`"><p>{{ faq.answer }}</p></div></div></div></div><img class="faq-art" src="/images/faq-collage.webp" alt="Loungewear made for your everyday" width="441" height="652" loading="lazy"><ShopCta class="mobile-only" :label="page.ctaLabel" rating/></section>
      <section class="impact"><h2>Our total green impact</h2><div class="impact-items"><div v-for="item in page.impact" :key="item.label"><BrandIcon :name="item.icon"/><strong>{{ item.value }}</strong><span>{{ item.label }}</span></div></div></section>
      <section class="closing"><h2>{{ page.finalTitle }}</h2><p>{{ page.finalText }}</p><img class="closing-art" :src="page.finalImage" alt="Find your favourite lounge set" width="640" height="389" loading="lazy"><ShopCta :label="page.ctaLabel" rating/><div class="closing-promises desktop-only"><span><BrandIcon name="truck"/>FREE Shipping on<br>Orders over $200</span><span><BrandIcon name="cloud"/>Over 500+ 5 Star<br>Reviews Online</span><span><BrandIcon name="leaf"/>Made ethically<br>and responsibly.</span></div></section>
    </main>
  </div>
</template>
