<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm">
          <h2 class="order-title">
              Новая заявка
          </h2>
          <div class="close" @click="closeModal">
                  &#10005;
          </div>
          <div class="tab-row">
              <div class="tab-item active">
                Жалоба
              </div>
              <div class="tab-item">
                  Запрос
              </div>
              <div class="tab-item">
                  Предложение
              </div>
              <div class="tab-item">
                  Поломка
              </div>
          </div>
          <div class="location-type-row">
              <div class="location-type active">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 22V12H15V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="name">Квартира</div>  
              </div>
              <div class="location-type">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 17L15 12L10 7" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 12H3" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  <div class="name">Подъезд</div>
              </div>
              <div class="location-type">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.41421L3 1.41421L5 3.41421V21H1L1 3.41421Z" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 3.41421L11 1.41421L13 3.41421V21H9L9 3.41421Z" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 3.41421L19 1.41421L21 3.41421V21H17L17 3.41421Z" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5 12H9" stroke="#5B6CFF" stroke-width="2"/>
                    <path d="M5 17H9" stroke="#5B6CFF" stroke-width="2"/>
                    <path d="M13 12H17" stroke="#5B6CFF" stroke-width="2"/>
                    <path d="M13 17H17" stroke="#5B6CFF" stroke-width="2"/>
                    </svg>
                  <div class="name">Двор</div>
              </div>
              <div class="location-type">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9999 0C9.62657 0 7.30649 0.703788 5.3331 2.02236C3.35971 3.34094 1.82164 5.21509 0.91339 7.4078C0.0051384 9.60051 -0.232502 12.0133 0.230521 14.3411C0.693544 16.6689 1.83643 18.8071 3.51466 20.4853C5.19289 22.1635 7.33109 23.3064 9.65886 23.7694C11.9866 24.2324 14.3994 23.9948 16.5921 23.0866C18.7849 22.1783 20.659 20.6402 21.9776 18.6668C23.2962 16.6935 23.9999 14.3734 23.9999 12C23.9964 8.8185 22.7309 5.76833 20.4813 3.51867C18.2316 1.269 15.1814 0.00357316 11.9999 0V0ZM11.9999 22C10.0221 22 8.08873 21.4135 6.44424 20.3147C4.79975 19.2159 3.51803 17.6541 2.76115 15.8268C2.00427 13.9996 1.80624 11.9889 2.19209 10.0491C2.57794 8.10929 3.53035 6.32746 4.92888 4.92893C6.3274 3.53041 8.10923 2.578 10.049 2.19215C11.9889 1.8063 13.9995 2.00433 15.8268 2.7612C17.654 3.51808 19.2158 4.79981 20.3146 6.4443C21.4135 8.08879 21.9999 10.0222 21.9999 12C21.9969 14.6512 20.9424 17.193 19.0677 19.0677C17.193 20.9425 14.6512 21.997 11.9999 22Z" fill="#5B6CFF"/>
                    <path d="M13.5 7H10C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V18H11V14H13.5C14.4282 14 15.3185 13.6312 15.9749 12.9749C16.6312 12.3185 17 11.4283 17 10.5C17 9.57174 16.6312 8.6815 15.9749 8.02512C15.3185 7.36875 14.4282 7 13.5 7ZM13.5 12H11V9H13.5C13.8978 9 14.2793 9.15803 14.5606 9.43934C14.842 9.72064 15 10.1022 15 10.5C15 10.8978 14.842 11.2793 14.5606 11.5607C14.2793 11.842 13.8978 12 13.5 12Z" fill="#5B6CFF"/>
                    </svg>
                  <div class="name">Паркинг</div>
              </div>
              <div class="location-type">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V23" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <div class="name">Коммерция</div>
              </div>
              <div class="location-type">
                  <svg width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="2" fill="#5B6CFF"/>
                    <circle cx="10" cy="2" r="2" fill="#5B6CFF"/>
                    <circle cx="18" cy="2" r="2" fill="#5B6CFF"/>
                  </svg>

                  <div class="name">Другое</div>
              </div>
          </div>
          <div class="pick-executor" @click="togglePickExecutor">
              <input type="text" placeholder="Выберите исполнителя" >
          </div>
          <div class="pick-executor">
              <input type="text" placeholder="Выберите отправителя" @click="togglePickSender">
          </div>
          <h4 class="order-title-sm">
              Описание
          </h4>
          <div class="leave-comment">
              <textarea placeholder="Введите ваш комментарий">

              </textarea>
          </div>
          <div class="order-switch"> Важная заявка <label class="switch"><input type="checkbox" checked=""><span class="slider"></span></label></div>
          <div class="save-btn">
              Создать заявку
          </div>
      
  </div>
  <div v-if="showPickExecutor">
            <PickExecutor @close="togglePickExecutor">
            </PickExecutor>
  </div> 
  <div v-if="showPickSender">
            <PickSender @close="togglePickSender">
            </PickSender>
  </div> 
  </div>
</template>

<script>
import PickExecutor from '@/components/modals/PickExecutor.vue'
import PickSender from '@/components/modals/PickSender.vue'
export default {
    components: {
                PickExecutor, PickSender
            },
    data() {
        return {
            showPickExecutor: false,
            showPickSender: false
        }
    },    
    methods: {
        closeModal() {
            this.$emit('close')
        },
        togglePickExecutor() {
            this.showPickExecutor = !this.showPickExecutor
        },
        togglePickSender() {
            this.showPickSender = !this.showPickSender
        }
    }
}
</script>

<style>

</style>