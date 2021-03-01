<template>
  <div class="content">
      <div class="calendar-wrap">
          <div class="top-row">
              <div class="month-slider">
                  Сентябрь 2021 
                                 
              </div>
              <div class="total-month">
                  Сумма за месяц: 400.000 тг
              </div>
              <div class="tab-row">
                  <div class="tab-item"  @click="activetab='1'" :class="[ activetab === '1' ? 'active' : '' ]">
                Месяц
                </div>
                <div class="tab-item" @click="activetab='2'" :class="[ activetab === '2' ? 'active' : '' ]">
                    Год
                </div>  
              </div>
              <div class="add-event" @click="toggleCreateEvent">
                  Добавить событие</div>  
          </div>
          <div v-if="activetab === '1'">
              <div class="month-table">
                  <div class="week">
                      <div class="day">
                          <div class="num">30</div>
                      </div>
                      <div class="day">
                          <div class="num">31</div>
                      </div>
                      <div class="day">
                          <div class="num">1</div>
                      </div>
                      <div class="day">
                          <div class="num">2</div>
                      </div>
                      <div class="day">
                          <div class="num">3</div>
                      </div>
                      <div class="day">
                          <div class="num">4</div>
                      </div>
                      <div class="day">
                          <div class="num">5</div>
                      </div>
                  </div>
                  <div class="week">
                      <div class="day">
                          <div class="num">6</div>
                      </div>
                      <div class="day event blue">
                          <div class="top-line"></div>
                          <div class="num">7</div>    
                          <div class="sum">
                              200.000 тг
                          </div>                      
                          <div class="event-name">
                              Название события в две строчки...
                          </div>
                      </div>
                      <div class="day">
                          <div class="num">8</div>
                      </div>
                      <div class="day event yellow">
                          <div class="num">9</div>
                          <div class="top-line"></div>                             
                          <div class="sum">
                              200.000 тг
                          </div>                      
                          <div class="event-name">
                              Название события в две строчки...
                          </div>
                      </div>
                      <div class="day event yellow">
                          <div class="top-line"></div>   
                          <div class="num">10</div>
                      </div>
                      <div class="day">
                          <div class="num">11</div>
                      </div>
                      <div class="day">
                          <div class="num">12</div>
                      </div>
                  </div>
                  <div class="week">
                      <div class="day">
                          <div class="num">13</div>
                      </div>
                      <div class="day">
                          <div class="num">14</div>
                      </div>
                      <div class="day">
                          <div class="num">15</div>
                      </div>
                      <div class="day">
                          <div class="num">16</div>
                      </div>
                      <div class="day">
                          <div class="num">17</div>
                      </div>
                      <div class="day">
                          <div class="num">18</div>
                      </div>
                      <div class="day">
                          <div class="num">19</div>
                      </div>
                  </div>
                  <div class="week">
                      <div class="day">
                          <div class="num">6</div>
                      </div>
                      <div class="day">
                          <div class="num">7</div>
                      </div>
                      <div class="day">
                          <div class="num">8</div>
                      </div>
                      <div class="day">
                          <div class="num">9</div>
                      </div>
                      <div class="day">
                          <div class="num">10</div>
                      </div>
                      <div class="day">
                          <div class="num">11</div>
                      </div>
                      <div class="day">
                          <div class="num">12</div>
                      </div>
                  </div>
              </div>
          </div>
          <div v-if="activetab === '2'">
              <div class="year-row">
                  <div class="month">
                      <div class="name">Январь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Февраль</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Март</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Апрель</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Май</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Июнь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Июль</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Август</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Сентябрь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Октябрь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Ноябрь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
                  <div class="month">
                      <div class="name">Декабрь</div>
                      <div class="events">30.333.321 T (3 события)</div>
                  </div>
              </div>
          </div>
      </div>
      <div v-if="showEvent">
          <CreateEvent @close="toggleCreateEvent">
          </CreateEvent>
      </div>
  </div>
</template>

<script>
import CreateEvent from '@/components/modals/CreateEvent.vue'
export default {
    
    components: {
        CreateEvent, 
    },
    data() {
        return {
        activetab: '1',
        showEvent: false,
        
    }
    },
    methods: {
        toggleCreateEvent() {
            this.showEvent = !this.showEvent
        }
    }
}
</script>

<style>

</style>