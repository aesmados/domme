<template>
  <div class="container">
    <md-field>
      <label>Type here!</label>
      <md-input v-model="type"></md-input>      
    </md-field>        
    <div>
    <b-tabs content-class="mt-3" class="tab-row">
      <b-tab class="tab-item" title="First" active>
        <div class="event-box ">
          <h1 class="event-title">
              Проведение собраний
          </h1>
          <p>Организуйте собрание собственников за 15 минут</p>
          <div class="event-steps-row">
              <div class="step">
                  <div class="num">
                      1 
                  </div>
                  <div class="title">
                      Заявка
                  </div>
                  <div class="text">
                      Оставьте заявку, и наш специалист оперативно свяжется с Вами, уточнит детали собрания
                  </div>
                  <div class="hidden-block">
                      <div class="title">
                          Заявка
                      </div>
                      <div class="text">
                          Вы получите подробную пошаговую инструкцию для проведения онлайн или офлайн собрания
                      </div>
                  </div>
              </div>
              <div class="step">
                  <div class="num">
                      2 
                  </div>
                  <div class="title">
                      Подготовка документов
                  </div>
                  <div class="text">
                      Юрист готовит полный пакет документов с уже внесенными данными
                  </div>
                  <div class="hidden-block">
                      <div class="title">
                          Подготовка документов
                      </div>
                      <div class="text">
                          Все документы готовят квалифицированные юристы,
  которые имеют опыт работы в органах Прокуратуры и Жилищной инспекции. Каждый заказ – индивидуальная работа юриста с учетом особенностей дома, вопросов собрания.
                      </div>
                      <a href="">Список нужных документов</a>
                  </div>
              </div>
              <div class="step">
                  <div class="num">
                      3
                  </div>
                  <div class="title">
                      Проведение собрания
                  </div>
                  <div class="text">
                      Мы помогаем в проведении собрания, подсчете голосов и составляем протокол собрания
                  </div>
                  <div class="hidden-block">
                      <div class="title">
                          Заявка
                      </div>
                      <div class="text">
                        – Составим реестр всех собственников <br>
                      – Сформулируем верную повестку вопросов <br>
                      – Подготовим полный пакет документов с именными листами решений <br>
                      – Поквартирный обход собственников жилья и пощаговая инструкция для онлайн
                      </div>
                  </div>
              </div>
              <div class="step">
                  <div class="num">
                      4
                  </div>
                  <div class="title">                    
                      Передача документов
                  </div>
                  <div class="text">
                      Сопровождение и помощь в передаче пакета в УК или в жилищную инспекцию
                  </div>
                  <div class="hidden-block">
                      <div class="title">
                          Передача документов
                      </div>
                      <div class="text">
                          Мы провели уже более 700 общих собраний, документы по всем были приняты Жилищной инспекцией.
  С нами Вы получите готовое решение избежите проблем с передачей документов в Жилищную инспекцию!
                      </div>
                  </div>
              </div>
          </div>
          <div class="btn-row">
              <button class="btn-event" @click="toggleShowGetMeeting">Провести собрание</button>
              <button class="btn-consult" @click="toggleShowGetConsult">Получить консультацию</button>
          </div>
      </div>
      
      </b-tab>
      <b-tab class="tab-item" title="Second">
        <div class="event-box ">
            <h1 class="event-title">
                Онлайн и оффлайн голосования
            </h1>
            <p>Жители получают ссылку на web-голосование и голосуют с помощью ЭЦП .
    По результатам собрания автоматически формируется протокол и решение.
    Протокол собрания доступен всем жильцам и инициатором.</p>
          
            <div class="btn-row">
                <button class="btn-event">Заказать услугу</button>
                <button class="btn-consult">Пошаговая инструкция</button>
            </div>
              <div class="faq-block">
                <div class="title">Часто задаваемые вопросы</div>
                <div class="faq-item">
                    <div class="faq-head" @click="showFaq1 = !showFaq1">
                        <div class="left">
                        Как получить ссылку на голосование?
                        </div>
                        <div class="right">
                            <div class="plus" :class="{ rotate: showFaq1}"></div>
                        </div>
                    </div>
                    <div class="body" v-if="showFaq1">
                        Нажмите кнопку «Заказать услугу» и заполните форму с контактными данными. Когда голосование начнется вам придет ссылка на него по sms и электронной почте.
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-head" @click="showFaq2 = !showFaq2">
                        <div class="left">
                        Могу я проголосовать с помощью бланка?
                        </div>
                        <div class="right">
                            <div class="plus" :class="{ rotate: showFaq2}"></div>
                        </div>
                    </div>
                    <div class="body" v-if="showFaq2">
                        Да, вы можете проголосовать с помощью бланка. Ваш голос будет учтен в электронном голосовании.
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-head" @click="showFaq3 = !showFaq3">
                        <div class="left">
                      Как получить ЭЦП?
                        </div>
                        <div class="right">
                            <div class="plus" :class="{ rotate: showFaq3}"></div>
                        </div>
                    </div>
                    <div class="body" v-if="showFaq3">
                        На сайте «электронного правительства» есть подробная инструкция по удаленному получению ЭЦП. Ссылка на инструкцию
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-head" @click="showFaq4 = !showFaq4">
                        <div class="left">
                        Вы можете воспользоваться моей ЭЦП?
                        </div>
                        <div class="right">
                            <div class="plus" :class="{ rotate: showFaq4}"></div>
                        </div>
                    </div>
                    <div class="body" v-if="showFaq4">
                      Нет, мы используем самый безопасный способ ЭЦП. Пароль от вашей подписи не передаётся на наш сервер. Вы вводите пароль в окне NCALayer. <br>

    Мы всегда показываем полный текст подписываемо вами документа. И у нас нет никакой технической возможности его изменить или переподписать без вашей ЭЦП.
                    </div>
                </div>
                
            </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
  </div>
</template>

<script>
export default {
  name: 'TabContent'
}
</script>
<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}
.md-input{
  height: 44px;
  border: 1px solid grey;
  padding: 10px 20px 0;
}
.md-field::before,
.md-field::after {
  display: none;
}
.md-field label{
  left: 20px;
}
.md-field.md-focused label, .md-field.md-has-value label {
  pointer-events: auto;
  top: 16px;
  opacity: 1;
  font-size: 12px;
  padding: 0 20px;
  left: 0;
}
</style>