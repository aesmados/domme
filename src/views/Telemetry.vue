<template>
  <div class="content">
      <div class="telemetry-wrap">
          <div class="left">
              <h2 class="order-title">Управление и мониторинг <br> инженерными оборудованиями</h2>
          <p>Платформа «domme» может получать данные с вашей системы телеметрии
(сбор показаний общедомовых и квартирных приборов учета ЖКХ). </p>

<p>Интеграция с любыми системами телеметрии и предоставление удобного инструмента для обработки и мониторинга показаний.</p>
<button class="order-service" @click="toggleShowOrderService">Заказать услугу</button>
          </div>
          <div class="right">
              <img src="@/assets/images/telemetry.jpg" alt="">
          </div>
      </div>
      <div v-if="showOrderService">
        <OrderService @close="toggleShowOrderService">
        </OrderService>
    </div>
  </div>
  
</template>

<script>
import OrderService from '@/components/modals/OrderService.vue'
export default {
    components: { OrderService },
    data() {
        return {
            showOrderService: false
        }
    },
    methods: {
        toggleShowOrderService() {
            this.showOrderService = !this.showOrderService
        }
    }
}
</script>

<style>

</style>