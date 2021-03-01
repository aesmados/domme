<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal">
          <div class="top-row">
                <h2 class="order-title">
                  Заявка №32
                </h2>
                <div class="modal-tab-row">
                  <div class="modal-tab-item status">
                      <div class="text">В ожидании</div>
                  </div>
                  <div class="modal-tab-item">
                      Квартира
                  </div>
                  <div class="modal-tab-item">
                      Жалоба
                  </div>
              </div>
              <div class="order-switch">
                  Важная заявка 
                  <label class="switch"><input type="checkbox" checked><span class="slider"></span></label>
              </div>
              <div class="close" @click="closeModal">
                  &#10005;
              </div>
          </div>
          <div class="slide-row">
              <div class="item">
                  <div class="item-top-row">
                    <div class="slide-status">
                        В процессе
                    </div>
                    <div class="date">
                        12.02.20 в 14:45
                    </div>
                  </div>
                  <div class="executor">
                      Изменил исполнитель
                  </div>  
              </div>
              <div class="item">
                  <div class="item-top-row">
                    <div class="slide-status">
                        В процессе
                    </div>
                    <div class="date">
                        12.02.20 в 14:45
                    </div>
                  </div>
                  <div class="executor">
                      Изменил исполнитель
                  </div>  
              </div>
              <div class="item">
                  <div class="item-top-row">
                    <div class="slide-status">
                        В процессе
                    </div>
                    <div class="date">
                        12.02.20 в 14:45
                    </div>
                  </div>
                  <div class="executor">
                      Изменил исполнитель
                  </div>  
              </div>              
          </div>
          <div class="flex-row">
              <div class="left">  
              <div class="box-wrap">
                  <div class="flex-row jc-sb">
                  <h4 class="order-title-sm">Подробности</h4> 
                    <div class="date-grey">
                        12.02.20 в 14:45
                    </div>
              </div>
              <div class="tenant-info">
                  <div class="avatar-img">
                      <img src="@/assets/images/avatar.png" alt="">
                  </div>
                  <div class="mid-text">
                      <div class="name">
                            Медет Сисенгалиев
                        </div>
                        <div class="address-row">
                            <div class="address">
                                <div class="type">
                                    Блок
                                </div>
                                <div class="num">
                                    12А
                                </div>
                            </div>
                            <div class="address">
                                <div class="type">
                                    Кв
                                </div>
                                <div class="num">
                                    134
                                </div>
                            </div>
                            <div class="phone">
                                +7 707 423-65-21
                            </div>
                        </div>
                  </div>                  
              </div>          
              <div class="description-text">
                <textarea>
                Оценка эффективности кампании последовательно оправдывает повседневный контент. Селекция бренда однообразно индуцирует медиабизнес. Рекламный клаттер, на первый взгляд, основан на анализе телесмотрения. Фактор коммуникации, пренебрегая деталями, искажает конвергентный BTL. Оценка эффективности кампании последовательно оправдывает повседневный контент. Селекция бренда однообразно индуцирует медиабизнес. Рекламный клаттер, на первый взгляд, основан на анализе телесмотрения. Фактор коммуникации, пренебрегая деталями, искажает конвергентный BTL.
                </textarea>
              </div>     
              <div class="show-attachment">
                  Показать вложения
                  <div class="photo">
                      3 фото 
                      <img src="@/assets/images/camera.svg" alt="">
                  </div>
              </div>
              </div>
              <div class="box-wrap">
                <h4 class="order-title-sm">
                    Исполнитель
                </h4>
              <div class="pick-executor">
                  <input type="text" value="Выберите исполнителя">
              </div>
              </div>             
              <div class="box-wrap">
                  <div class="flex-row jc-sb">
                      <div class="reset-btn">
                          Сбросить
                      </div>
                      <div class="save-btn">
                        Сохранить
                      </div>
                  </div>
              </div>
              
          </div>
          <div class="right">
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
              <div class="enter-message">
                      <input type="text" placeholder="Введите сообщение...">
                      <img src="@/assets/images/send.svg" alt="">
               </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {    
    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

<style>

</style>