<template>
  <div class="content">
      <div class="row">
            <div class="tab-row">
                <div class="tab-item active">
                    Все
                </div>
                <div class="tab-item">
                   Отчеты
                </div>
                <div class="tab-item">
                    Объявления
                </div>
                <div class="tab-item">
                    Опросы
                </div>
            </div>
      </div>
      <div class="grey-bg">
          <div class="news-row">
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Отчет
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Опрос
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Объявление
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Отчет
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Опрос
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
              <div class="news-item">
                  <div class="bell">
                      <img src="@/assets/images/bell.svg" alt="">
                  </div>
                  <div class="title">
                      Медведь напал на 5-й подъезд. Копья или вилы
                  </div>
                  <div class="flex-row">
                        <div class="news-type">
                            Объявление
                        </div>
                        <div class="date">
                            12.07.20 в 12:44
                        </div>
                  </div>
              </div>
          </div>
      </div>
      <div v-show="showCreateNews">
          <div class="chess-side-modal dn">
            <div class="side-modal-wrap">                
                <div class="close" @click="toggleShowResident">
                    &#10005;
                </div>
                <h2 class="title">Создать</h2>
                <div class="tab-row">                
                    <div class="tab-item active">
                        Отчеты
                    </div>
                    <div class="tab-item">
                        Объявления
                    </div>
                    <div class="tab-item">
                        Опросы
                    </div>
                </div>
                <form class="create-news">
                    <div>
                        <input type="text" placeholder="Заголовок (пример: Отчет за 10 Января)">
                        <textarea placeholder="Описание"></textarea>
                        <div class="add-photo">
                            <input type="file" id="add-photo">
                            <label for="add-photo"><img src="@/assets/images/camera.svg" alt=""> Добавить фото</label>
                        </div>
                        <div class="switch-box">
                            Отправить уведомление жителям
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                            
                        </div>
                    </div>
                    <button class="create-btn">Создать</button>
                </form>
            </div>          
          </div>
          <div class="chess-side-modal news-info">
            <div class="side-modal-wrap">                
                <div class="back-btn-news">
                    <img src="@/assets/images/back.svg" alt="">
                    Назад к созданию
                </div>
                <h2 class="title">Медведь напал на 5-й подъезд. Копья или вилы</h2>
                <div class="flex-row">
                    <div class="news-type">
                        Объявление
                    </div>
                    <div class="date">
                        12.07.20 в 12:44
                    </div>
                </div>
                <div class="text">
                    <p>Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры. Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры. </p>

                    <p>Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры. Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры.</p>

                    <p>Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры. Ваш запрос будет отправлен на модерацию, чтобы утвердиться, что вы владелец квартиры.</p>
                </div>
            </div>          
          </div>
      </div>
  </div>
</template>

<script>
export default {
 data() {
     return {
         showCreateNews: true
     }
 }
}
</script>

<style>

</style>