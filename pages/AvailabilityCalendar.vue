<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <UButton 
        icon="i-heroicons-chevron-left" 
        variant="ghost" 
        @click="previousMonth"
      />
      <h3 class="text-xl font-semibold">
        {{ currentMonthYear }}
      </h3>
      <UButton 
        icon="i-heroicons-chevron-right" 
        variant="ghost" 
        @click="nextMonth"
      />
    </div>
    
    <div class="calendar-grid">
      <div class="weekdays">
        <div v-for="day in weekdays" :key="day" class="weekday">
          {{ day }}
        </div>
      </div>
      
      <div class="days-grid">
        <div
          v-for="day in calendarDays"
          :key="`${day.date}-${day.month}`"
          :class="getDayClasses(day)"
          @click="toggleDayAvailability(day)"
        >
          <span class="day-number">{{ day.day }}</span>
          <div v-if="day.isCurrentMonth && day.isAvailable" class="availability-indicator available">
            <UIcon name="i-heroicons-check" class="w-3 h-3" />
          </div>
          <div v-else-if="day.isCurrentMonth && !day.isAvailable" class="availability-indicator unavailable">
            <UIcon name="i-heroicons-x-mark" class="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="legend">
      <div class="legend-item">
        <div class="legend-color available"></div>
        <span>Disponível</span>
      </div>
      <div class="legend-item">
        <div class="legend-color unavailable"></div>
        <span>Indisponível</span>
      </div>
      <div class="legend-item">
        <div class="legend-color neutral"></div>
        <span>Não definido</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const currentDate = ref(new Date())
const availabilityData = ref({})

const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const currentMonthYear = computed(() => {
  return currentDate.value.toLocaleDateString('pt-BR', { 
    month: 'long', 
    year: 'numeric' 
  })
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())
  
  const days = []
  const currentDateObj = new Date(startDate)
  
  for (let i = 0; i < 42; i++) {
    const dateKey = currentDateObj.toISOString().split('T')[0]
    days.push({
      day: currentDateObj.getDate(),
      date: dateKey,
      month: currentDateObj.getMonth(),
      year: currentDateObj.getFullYear(),
      isCurrentMonth: currentDateObj.getMonth() === month,
      isToday: currentDateObj.toDateString() === new Date().toDateString(),
      isAvailable: availabilityData.value[dateKey]
    })
    currentDateObj.setDate(currentDateObj.getDate() + 1)
  }
  
  return days
})

const previousMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const toggleDayAvailability = (day) => {
  if (!day.isCurrentMonth) return
  
  const dateKey = day.date
  if (availabilityData.value[dateKey] === undefined) {
    availabilityData.value[dateKey] = true
  } else if (availabilityData.value[dateKey] === true) {
    availabilityData.value[dateKey] = false
  } else {
    delete availabilityData.value[dateKey]
  }
}

const getDayClasses = (day) => {
  const classes = ['calendar-day']
  
  if (!day.isCurrentMonth) {
    classes.push('other-month')
  } else {
    classes.push('current-month')
    if (day.isToday) {
      classes.push('today')
    }
    if (day.isAvailable === true) {
      classes.push('available')
    } else if (day.isAvailable === false) {
      classes.push('unavailable')
    }
  }
  
  return classes
}

// Carregar dados salvos (simulação)
onMounted(() => {
  // Aqui você pode carregar dados de disponibilidade de uma API
  // Por enquanto, vamos definir alguns dias como exemplo
  const today = new Date()
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  
  availabilityData.value[today.toISOString().split('T')[0]] = true
  availabilityData.value[nextWeek.toISOString().split('T')[0]] = false
})
</script>

<style scoped>
.calendar-container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.calendar-grid {
  width: 100%;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  margin-bottom: 1rem;
}

.weekday {
  text-align: center;
  font-weight: 600;
  color: #6b7280;
  padding: 0.5rem;
  font-size: 0.875rem;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background-color: #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.calendar-day {
  background: white;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
}

.calendar-day:hover {
  background-color: #f3f4f6;
}

.calendar-day.other-month {
  color: #d1d5db;
  cursor: not-allowed;
}

.calendar-day.other-month:hover {
  background-color: white;
}

.calendar-day.today {
  background-color: #dbeafe;
  font-weight: 600;
}

.calendar-day.available {
  background-color: #dcfce7;
  color: #166534;
}

.calendar-day.unavailable {
  background-color: #fee2e2;
  color: #991b1b;
}

.day-number {
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.availability-indicator {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.availability-indicator.available {
  background-color: #22c55e;
  color: white;
}

.availability-indicator.unavailable {
  background-color: #ef4444;
  color: white;
}

.legend {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.legend-color.available {
  background-color: #22c55e;
}

.legend-color.unavailable {
  background-color: #ef4444;
}

.legend-color.neutral {
  background-color: #e5e7eb;
}

@media (max-width: 640px) {
  .calendar-container {
    padding: 1rem;
  }
  
  .calendar-day {
    min-height: 50px;
  }
  
  .legend {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
}
</style>

