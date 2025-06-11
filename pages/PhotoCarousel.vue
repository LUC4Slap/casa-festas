<template>
  <div class="gallery-container">
    <div class="gallery-header">
      <h2 class="text-3xl font-bold text-center mb-2">Nossa Casa de Festas</h2>
      <p class="text-gray-600 text-center mb-8">
        Conheça nossos espaços elegantes e versáteis para o seu evento especial
      </p>
    </div>

    <div class="carousel-container">
      <div class="carousel-wrapper" ref="carouselWrapper">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="carousel-slide"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="carousel-image"
              @load="onImageLoad"
            />
            <div class="image-overlay">
              <h3 class="overlay-title">{{ image.title }}</h3>
              <p class="overlay-description">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles de navegação -->
      <UButton
        icon="i-heroicons-chevron-left"
        variant="solid"
        color="white"
        class="carousel-btn carousel-btn-prev"
        @click="previousSlide"
        :disabled="currentSlide === 0"
      />

      <UButton
        icon="i-heroicons-chevron-right"
        variant="solid"
        color="white"
        class="carousel-btn carousel-btn-next"
        @click="nextSlide"
        :disabled="currentSlide === images.length - 1"
      />

      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          :class="['indicator', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        />
      </div>
    </div>

    <!-- Thumbnails -->
    <div class="thumbnails-container">
      <div class="thumbnails-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          :class="['thumbnail', { active: currentSlide === index }]"
          @click="goToSlide(index)"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="thumbnail-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const carouselWrapper = ref(null)
const autoplayInterval = ref(null)

const images = [
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Salão principal decorado para casamento',
    title: 'Salão Principal',
    description: 'Espaço amplo e elegante para cerimônias e recepções'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Mesa decorada para evento especial',
    title: 'Decoração Personalizada',
    description: 'Ambientação única para cada tipo de celebração'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Área gourmet moderna',
    title: 'Área Gourmet',
    description: 'Espaço moderno para eventos mais intimistas'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Salão com vista panorâmica',
    title: 'Vista Panorâmica',
    description: 'Ambiente sofisticado com vista deslumbrante'
  },
  {
    src: 'https://picsum.photos/200/300',
    alt: 'Área externa para eventos',
    title: 'Área Externa',
    description: 'Jardim e terraço para eventos ao ar livre'
  }
]

const nextSlide = () => {
  if (currentSlide.value < images.length - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    if (currentSlide.value < images.length - 1) {
      nextSlide()
    } else {
      currentSlide.value = 0
    }
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
    autoplayInterval.value = null
  }
}

const onImageLoad = () => {
  // Callback quando imagem carrega
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.gallery-header {
  margin-bottom: 3rem;
}

.carousel-container {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  margin-bottom: 2rem;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 500%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  position: relative;
  width: 20%;
  height: 100%;
  flex-shrink: 0;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 2rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.carousel-slide:hover .image-overlay {
  transform: translateY(0);
}

.overlay-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.overlay-description {
  font-size: 1rem;
  opacity: 0.9;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.carousel-btn-prev {
  left: 1rem;
}

.carousel-btn-next {
  right: 1rem;
}

.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: white;
}

.thumbnails-container {
  margin-top: 1.5rem;
}

.thumbnails-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #3b82f6;
  transform: scale(1.05);
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 300px;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-btn-prev {
    left: 0.5rem;
  }

  .carousel-btn-next {
    right: 0.5rem;
  }

  .image-overlay {
    padding: 1rem;
  }

  .overlay-title {
    font-size: 1.25rem;
  }

  .overlay-description {
    font-size: 0.875rem;
  }

  .thumbnails-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 250px;
  }

  .gallery-container {
    padding: 1rem 0.5rem;
  }
}
</style>

