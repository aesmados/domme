<template>
  <div class="content">      
      <div class="row">
        <div class="tab-row flex-row">
            <div class="tab-item active">
                Все (184)
            </div>
            <div class="tab-item">
                Новые (32)
            </div>
            <div class="tab-item">
                Важные (32)
            </div>
            <div class="tab-item">
                В ожидании (32)
            </div>
            <div class="tab-item">
                В процессе (32)
            </div>
            <div class="tab-item">
                Просрочено (32)
            </div>
            <div class="tab-item">
                Решенные (32)
            </div>
            <div class="tab-item">
                Отклоненные (32)
            </div>     
        </div>
        <div class="create-btn" @click="toggleNewOrder">
            Создать заявку
        </div>
      </div>
      <div class="search-row">
            <div class="search">
                <input type="text" placeholder="Поиск...">
            </div>
            <div class="right">
                <div class="switch-box">
                    Только с сообщениями
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="filter" @click="toggleShowFilter">
                    Фильтр 
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.6" clip-path="url(#clip0)">
                        <path d="M3.33301 17.5V11.6666" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.33301 8.33333V2.5" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 17.5V10" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 6.66667V2.5" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.667 17.5V13.3334" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.667 10V2.5" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M0.833008 11.6666H5.83301" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.5 6.66663H12.5" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.167 13.3334H19.167" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
      </div>
      <div class="filter-row" v-show="showFilter">
          <div class="input-item">
              <label for="">Дата заявки</label> <br>
              <input type="text" placeholder="Выбрать">
              <div class="pick-date">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.6">
                    <path d="M16.625 3.5H4.375C3.4085 3.5 2.625 4.2835 2.625 5.25V17.5C2.625 18.4665 3.4085 19.25 4.375 19.25H16.625C17.5915 19.25 18.375 18.4665 18.375 17.5V5.25C18.375 4.2835 17.5915 3.5 16.625 3.5Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 1.75V5.25" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 1.75V5.25" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.625 8.75H18.375" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
              </div>
          </div>
          <div class="input-item">
              <label for="">Отправитель</label> <br>
              <input type="text" placeholder="Все">
          </div>
          <div class="input-item">
              <label for="">Тип заявки</label> <br>
              <input type="text" placeholder="Все">
          </div>
          <div class="input-item">
              <label for="">Локация</label> <br>
              <input type="text" placeholder="Все">
          </div>
          <div class="input-item">
              <label for="">Исполнитель</label> <br>
              <input type="text" placeholder="Все">
          </div>
          <div class="reset-filter">
              Сбросить фильтр
          </div>
      </div>
      <table class="table">          
              <tr>
                  <td></td>
                  <td>№</td>
                  <td>Локация</td>
                  <td>Статус</td>
                  <td>Тип</td>
                  <td>Описание</td>
                  <td>Исполнитель</td>
                  <td>Дата заявки</td>
                  <td>Дата завершения</td>
                  <td>Отправитель</td>
              </tr>
              <tr v-for="order in orders" :key="order.number">
                  <td>
                      <div class="notify-cell">
                        <div class="alert-circle blue" @click="toggleModal">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#7b7e97" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 6V9" stroke="#7b7e97" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 12H9.00833" stroke="#7b7e97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>                          
                        </div>
                        <div class="message circle-blue" @click="toggleDiscussion">
                            <img src="@/assets/images/mail.svg" alt="">                          
                        </div>
                      </div>                      
                  </td>
                  <td class="number">
                      {{ order.number }}
                  </td>
                  <td class="location">
                      {{ order.location }}
                  </td>
                  <td>
                     <div class="status">
                        {{ order.status }}
                     </div>
                  </td>
                  <td class="type">
                      {{ order.type }}
                  </td>
                  <td>
                      <div class="description">
                        <div @click="toggleOrderDescription(order)" :data="modalData">
                            {{ order.description }}
                        </div>
                        <div v-if="showOrderDescription">
                            <OrderDescription />
                        </div>
                      </div>                      
                  </td>
                  <td class="executor" @click="toggleShowExecutor">
                      {{ order.executor }}
                  </td>
                  <td class="order-date">
                      {{ order.orderDate }}
                  </td>
                  <td class="finish-date">
                      {{ order.finishDate }}
                  </td>
                  <td  @click="toggleShowSender">
                      <div class="sender">
                          {{ order.sender }}
                      </div>
                  </td>
              </tr>          
      </table>
      <div v-show="showDiscussion">
          <div class="side-modal">
          <div class="side-modal-wrap">
              <h3 class="side-title">
                Обсуждение
              </h3>
              <div class="close" @click="toggleDiscussion">
                  &#10005;
              </div>
              <div class="order-num">
                  Заявка №1234
              </div>
              <div class="chat-box">                  
                  <div class="message">
                      <div class="user-info">
                        <div class="chat-avatar">
                            <img src="@/assets/images/avatar-white.svg" alt="">
                        </div>
                        <div class="mid-text">
                            <div class="name">Земский Андрей</div>
                            <div class="user-status">Житель</div>
                        </div>
                        <div class="date">
                            12.02.20 в 14:45
                        </div>
                      </div>
                      <div class="text">
                          Как отмечает Соссюр, у нас есть некоторое чувство, которое наш язык выражает исчерпывающим образом, поэтому ритмический рисунок нивелирует коммунальный модернизм.
                      </div>
                  </div>
                  
                  <div class="message">
                      <div class="user-info">
                        <div class="chat-avatar">
                            <img src="@/assets/images/avatar-white.svg" alt="">
                        </div>
                        <div class="mid-text">
                            <div class="name">Земский Андрей</div>
                            <div class="user-status ruler">Управляющий</div>
                        </div>
                        <div class="date">
                            12.02.20 в 14:45
                        </div>
                      </div>
                      <div class="text">
                          Ну начнем с того, что это ваши проблемы...
                      </div>
                  </div>
                  <div class="new-message">
                      Новые сообщения
                  </div>
                  <div class="message">
                      <div class="user-info">
                        <div class="chat-avatar">
                            <img src="@/assets/images/avatar-white.svg" alt="">
                        </div>
                        <div class="mid-text">
                            <div class="name">Земский Андрей</div>
                            <div class="user-status">Житель</div>
                        </div>
                        <div class="date">
                            12.02.20 в 14:45
                        </div>
                      </div>
                      <div class="text">
                          Как отмечает Соссюр, у нас есть некоторое чувство, которое наш язык выражает исчерпывающим образом, поэтому ритмический рисунок нивелирует коммунальный модернизм.
                      </div>
                  </div>                  
              </div>
              
          </div>
          <div class="enter-message">
                      <input type="text" placeholder="Введите сообщение...">
                      <img src="@/assets/images/send.svg" alt="">
               </div>
          </div>
      </div>
      <div v-show="showSender">
          <div class="side-modal">
            <div class="side-modal-wrap">                
                <div class="hide" @click="toggleShowSender">
                    Скрыть <img src="@/assets/images/house-arrow.svg" alt="">
                </div>
                <div class="executor-info">
                    <div class="avatar">
                        <img src="@/assets/images/avatar-lg.svg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">
                            Земский Андрей
                        </div>
                        <div class="address-row">
                            <div class="address">
                                <div class="type"> Блок </div>
                                <div class="num"> 2 </div>
                            </div>
                            <div class="address">
                                <div class="type"> Подъезд </div>
                                <div class="num"> 5 </div>
                            </div>
                            <div class="address">
                                <div class="type"> Этаж </div>
                                <div class="num"> 12 </div>
                            </div>
                            <div class="address">
                                <div class="type"> Квартира </div>
                                <div class="num"> 124 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="executor-description">
                    <div class="item">
                        <div class="left">
                            E-mail
                        </div>
                        <div class="right">
                            kovrogangster@mail.ru
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Телефон
                        </div>
                        <div class="right">
                            +7 707 111-22-33
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Лицевой счет
                        </div>
                        <div class="right">
                            124576
                        </div>
                    </div>
                </div>
                <div class="debt-ammount">
                    <img src="@/assets/images/alert.svg" alt="">
                    <div class="text">
                        <div class="sum">
                            20.000 тг
                        </div>
                        <div class="info">
                            Накопленный долг
                        </div>
                    </div>
                </div>
                <div class="history">
                    <h6>История платежей</h6>
                    <div class="item">
                        <div class="left">
                            Август, 2020
                        </div>
                        <div class="right pos">
                             80.000 
                             <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4.81818L4.125 8L11 1" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>                        
                    </div>
                    <div class="item">
                        <div class="left">
                           Июль, 2020
                        </div>
                        <div class="right neg">
                            -10.000
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                            </g>
                            </svg>
                        </div>                        
                    </div>
                    <div class="item">
                        <div class="left">
                            Июль, 2020
                        </div>
                        <div class="right neg">
                           -10.000
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.4">
                            <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                            <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                            </g>
                            </svg>
                        </div>                        
                    </div>
                </div>
            </div>          
          </div>
      </div>
      <div v-show="showExecutor">
          <div class="side-modal">
            <div class="side-modal-wrap">                
                <div class="hide" @click="toggleShowExecutor">
                    Скрыть<img src="@/assets/images/house-arrow.svg" alt="">
                </div>
                <div class="executor-info sender-info">
                    <div class="avatar">
                        <img src="@/assets/images/avatar-lg.svg" alt="">
                    </div>
                    <div class="text">
                        <div class="name">
                            Земский Андрей
                        </div>
                        <div class="job">
                            Электрик
                        </div>
                    </div>
                </div>
                <div class="executor-description">
                    <div class="item">
                        <div class="left">
                            E-mail
                        </div>
                        <div class="right">
                            kovrogangster@mail.ru
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Телефон
                        </div>
                        <div class="right">
                            +7 707 111-22-33
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            ИИН
                        </div>
                        <div class="right">
                            9967345622
                        </div>
                    </div>
                    <div class="item">
                        <div class="left">
                            Номер УДВ
                        </div>
                        <div class="right">
                            №346486
                        </div>
                    </div>
                </div>
                <div class="doc-block">
                    <div class="image">
                        <img src="@/assets/images/file.svg" alt="">
                    </div>
                    <div class="text">
                        <div class="doc-name">
                            Трудовой договор
                        </div>
                        <div class="open">
                            Открыть
                        </div>
                    </div>
                </div>                
            </div>
            <div class="btn-wrap">
                <div class="remove-btn">
                    Снять с задачи
                </div>
            </div>          
          </div>
      </div>
      <div v-if="showModal">
          <Modal @close="toggleModal">              
          </Modal>
      </div> 
      <div v-if="createOrder">
          <CreateOrder @close="toggleNewOrder">
          </CreateOrder>
       </div>           
  </div>
</template>

<script>
import Modal from '@/components/modals/Modal.vue'
import CreateOrder from '@/components/modals/CreateOrder.vue'
import OrderDescription from '@/components/modals/OrderDescription.vue'

export default {    
    name: 'Orders',
     components: {
                Modal, CreateOrder, OrderDescription
            },
    data() {
        return {                   
            orders: [
                { number: 1231, location: 'Квартира', status: 'В ожидании', type: 'Жалоба', description: 'Открыть', executor: 'Назначить', orderDate: '03.10.20 в 18:00', finishDate: '--/--', sender: 'Медет Сисенгалиев'},
                { number: 1232, location: 'Подъезд', status: 'Решено', type: 'Предложение', description: 'Открыть', executor: 'Медет Сисенгалиев', orderDate: '03.10.20 в 18:00', finishDate: '03.10.20 в 18:00', sender: 'Медет Сисенгалиев'},
                { number: 1233, location: 'Двор', status: 'В процессе', type: 'Жалоба', description: 'Открыть', executor: 'Райымбек Таир', orderDate: '03.10.20 в 18:00', finishDate: '--/--', sender: 'Медет Сисенгалиев'},
                { number: 1234, location: 'Паркинг', status: 'В ожидании', type: 'Предложение', description: 'Открыть', executor: 'Назначить', orderDate: '03.10.20 в 18:00', finishDate: '--/--', sender: 'Медет Сисенгалиев'},
                { number: 1235, location: 'Коммерция', status: 'В ожидании', type: 'Жалоба', description: 'Открыть', executor: 'Назначить', orderDate: '03.10.20 в 18:00', finishDate: '--/--', sender: 'Медет Сисенгалиев'},
                { number: 1236, location: 'Двор', status: 'Отклонен', type: 'Жалоба', description: 'Открыть', executor: 'Медет Сисенгалиев', orderDate: '03.10.20 в 18:00', finishDate: ' 03.10.20 в 18:00', sender: 'Медет Сисенгалиев'},
                { number: 1237, location: 'Двор', status: 'Просрочено', type: 'Предложение', description: 'Открыть', executor: 'Андро Земский', orderDate: '03.10.20 в 18:00', finishDate: '--/--', sender: 'Медет Сисенгалиев'},
            ],
            showModal: false,
            createOrder: false,
            showPickExecutor: true,
            showFilter: false,
            showDiscussion: false,
            showExecutor: false,
            showSender: false,
            showOrderDescription: false,
            modalData: null
        }
    },
    methods: {
        toggleModal () {
        this.showModal = !this.showModal
        },
        toggleNewOrder () {
            this.createOrder = !this.createOrder
        },        
        toggleShowFilter() {
            this.showFilter = !this.showFilter
        },
        toggleDiscussion() {
            this.showDiscussion = !this.showDiscussion
        },
        toggleShowExecutor() {
            this.showExecutor = !this.showExecutor
        },
        toggleShowSender() {
            this.showSender = !this.showSender
        },
        toggleOrderDescription(data) {
            this.modalData = data
            this.showOrderDescription = !this.showOrderDescription
        }
    }
}
</script>

<style>

</style>