<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <UIcon name="i-heroicons-building-office-2" class="w-8 h-8 text-blue-600" />
            <h1 class="text-2xl font-bold text-gray-900">Solar - Festas e Eventos</h1>
          </div>
          <div class="hidden md:flex items-center space-x-6">
            <a href="#galeria" class="text-gray-600 hover:text-blue-600 transition-colors">Galeria</a>
            <a href="#disponibilidade" class="text-gray-600 hover:text-blue-600 transition-colors">Disponibilidade</a>
            <a href="#contato" class="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
            <UButton color="blue" variant="solid">Fazer Reserva</UButton>
          </div>
          <UButton
            icon="i-heroicons-bars-3"
            variant="ghost"
            class="md:hidden"
            @click="toggleMobileMenu"
          />
        </nav>

        <!-- Mobile Menu -->
        <div v-if="showMobileMenu" class="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div class="flex flex-col space-y-3 pt-4">
            <a href="#galeria" class="text-gray-600 hover:text-blue-600 transition-colors">Galeria</a>
            <a href="#disponibilidade" class="text-gray-600 hover:text-blue-600 transition-colors">Disponibilidade</a>
            <a href="#contato" class="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
            <UButton color="blue" variant="solid" class="w-full">Fazer Reserva</UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-5xl md:text-6xl font-bold mb-6">
          O Espaço Perfeito para
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Seu Evento
          </span>
        </h2>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Transforme momentos especiais em memórias inesquecíveis em nossa casa de festas elegante e versátil
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton size="xl" color="white" variant="solid" @click="scrollToSection('disponibilidade')">
            <UIcon name="i-heroicons-calendar-days" class="w-5 h-5 mr-2" />
            Ver Disponibilidade
          </UButton>
          <UButton size="xl" variant="outline" color="white" @click="scrollToSection('galeria')">
            <UIcon name="i-heroicons-photo" class="w-5 h-5 mr-2" />
            Ver Galeria
          </UButton>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4">Por que escolher nossa casa?</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Oferecemos tudo que você precisa para tornar seu evento único e memorável
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-home-modern" class="w-8 h-8 text-blue-600" />
            </div>
            <h4 class="text-xl font-semibold mb-2">Espaços Versáteis</h4>
            <p class="text-gray-600">Ambientes adaptáveis para diferentes tipos de eventos e celebrações</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-green-600" />
            </div>
            <h4 class="text-xl font-semibold mb-2">Decoração Personalizada</h4>
            <p class="text-gray-600">Ambientação única e personalizada para cada tipo de celebração</p>
          </div>

          <div class="text-center p-6">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UIcon name="i-heroicons-users" class="w-8 h-8 text-purple-600" />
            </div>
            <h4 class="text-xl font-semibold mb-2">Atendimento Completo</h4>
            <p class="text-gray-600">Equipe especializada para cuidar de todos os detalhes do seu evento</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="galeria" class="gallery-section">
      <PhotoCarousel />
    </section>

    <!-- Availability Section -->
    <section id="disponibilidade" class="calendar-section bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold mb-4">Verifique Nossa Disponibilidade</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Clique nas datas para marcar como disponível (verde) ou indisponível (vermelho).
            Use o calendário para planejar seu evento.
          </p>
        </div>

        <AvailabilityCalendar />

        <div class="text-center mt-8">
          <UButton size="lg" color="blue" variant="solid">
            <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
            Entrar em Contato
          </UButton>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-16 bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-3xl font-bold mb-6">Entre em Contato</h3>
            <p class="text-gray-300 mb-8">
              Estamos prontos para ajudar você a planejar o evento dos seus sonhos.
              Entre em contato conosco para mais informações e orçamentos.
            </p>

            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-blue-400" />
                <span>(67) 99221-0409</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-blue-400" />
                <span>erica2008rs@hotmail.com</span>
              </div>
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-blue-400" />
                <span>Rua Alfredo Borma, 951 - Campo Grande, MS</span>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 p-8 rounded-lg">
            <h4 class="text-xl font-semibold mb-6">Solicite um Orçamento</h4>
            <form class="space-y-4">
              <UInput placeholder="Seu nome" />
              <UInput placeholder="Seu email" type="email" />
              <UInput placeholder="Seu telefone" />
              <UTextarea placeholder="Conte-nos sobre seu evento..." rows="4" />
              <UButton color="blue" variant="solid" class="w-full">
                Enviar Solicitação
              </UButton>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-950 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <div class="flex items-center justify-center space-x-2 mb-4">
          <UIcon name="i-heroicons-building-office-2" class="w-6 h-6 text-blue-400" />
          <span class="text-lg font-semibold">Casa de Festas Elegante</span>
        </div>
        <p class="text-gray-400">
          © 2025 Casa de Festas Elegante. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import AvailabilityCalendar from './AvailabilityCalendar.vue'
import PhotoCarousel from './PhotoCarousel.vue'
import { ref } from 'vue'

const showMobileMenu = ref(false)
const toast = useToast()

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  showMobileMenu.value = false
}


// Meta tags para SEO
useHead({
  title: 'Casa de Festas Elegante - Espaço para Eventos Especiais',
  meta: [
    { name: 'description', content: 'Reserve nossa casa de festas para seu evento especial. Espaços elegantes e versáteis para casamentos, aniversários e celebrações em São Paulo.' },
    { name: 'keywords', content: 'casa de festas, eventos, casamentos, aniversários, São Paulo, salão de festas' },
    { property: 'og:title', content: 'Casa de Festas Elegante - Espaço para Eventos Especiais' },
    { property: 'og:description', content: 'Transforme momentos especiais em memórias inesquecíveis em nossa casa de festas elegante e versátil' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
  background-size: cover;
}

.hero-section > * {
  position: relative;
  z-index: 1;
}

.calendar-section {
  padding: 4rem 0;
}

.gallery-section {
  padding: 4rem 0;
  background-color: #f8fafc;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0;
  }

  .hero-section h2 {
    font-size: 2.5rem;
  }

  .hero-section p {
    font-size: 1.125rem;
  }
}
</style>

