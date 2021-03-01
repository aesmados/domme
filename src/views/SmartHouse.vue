<template>
  <div class="content">
      <div class="smart-house-wrap">
          <h2 class="order-title">
            Умный дом
          </h2>
          <div class="smart-house-row">
              <div class="smart-item" @click="toggleShowOrderService">
                  <div class="text">
                      Камеры наблюдения
                  </div>
                  <img src="@/assets/images/sh-img1.png" alt="">
              </div>
              <div class="smart-item" @click="toggleShowOrderService">
                  <div class="text">
                      Видео
домофоны
                  </div>
                  <img src="@/assets/images/sh-img2.png" alt="">
              </div>
              <div class="smart-item" @click="toggleShowOrderService">
                  <div class="text">
                      Ворота
и шлагбаумы
                  </div>
                  <img src="@/assets/images/sh-img3.png" alt="">
              </div>
              <div class="smart-item" @click="toggleShowOrderService">
                  <div class="text">
                     Умные
счетчики
                  </div>
                  <img src="@/assets/images/sh-img4.png" alt="">
              </div>
              <div class="smart-item" @click="toggleShowOrderService">
                  <div class="text">
                      Установка
умного дома
                  </div>
                  <img src="@/assets/images/sh-img5.png" alt="">
              </div>
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