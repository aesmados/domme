<template>
  <div class="backdrop" @click.self="closeModal">
      <div class="modal-sm create-event">
          <h2 class="order-title">
              Создать событие
          </h2>
          <div class="close" @click="closeModal">
                  &#10005;
          </div>
          <md-field>
            <label>Заголовок</label>
            <md-input v-model="name"></md-input>      
          </md-field>
          <div class="pick-color">
              Выберите цвет
              <div class="color-row">
                  <div class="item blue active" :class="active = !active"></div>
                  <div class="item yellow" :class="active = !active"></div>
                  <div class="item red"></div>
                  <div class="item purple"></div>
                  <div class="item green"></div>
              </div>
          </div>
          <div class="title">
              Список предметов и услуг
          </div>
          <div class="list-items">
              <div class="item">
                  <div class="left">
                      Проверка прибора
                  </div>
                  <div class="right">
                      30.000 KZT
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                      Проверка прибора 2
                  </div>
                  <div class="right">
                      30.000 KZT
                  </div>
              </div>
          </div>
          <div class="add-list-item">
              <div class="name">
                  <input type="text" placeholder="Название">
              </div>
              <div class="sum">
                  <input type="text" placeholder="Сумма">
                  <input type="text" placeholder="KZT">
              </div>
              <div class="add-btn">
                  +
              </div>
          </div>
          <div class="total-cost">
              <div class="sum">60.000 KZT</div>
              Итого
          </div>
          <div class="flex-row jc-sb">
              <div class="start-date">
                  Начало
                  <div class="start-input-row">
                      <input type="text" placeholder="ДД">
                      <input type="text" placeholder="ММ">
                      <input type="text" placeholder="ГГГГ">
                      <div class="sep1"></div>
                      <div class="sep2"></div>
                  </div>
              </div>
              <div class="end-date">
                  Конец
                  <div class="start-input-row">
                      <input type="text" placeholder="ДД">
                      <input type="text" placeholder="ММ">
                      <input type="text" placeholder="ГГГГ">
                      <div class="sep1"></div>
                      <div class="sep2"></div>
                  </div>
              </div>
          </div>
          <button class="save-btn">Сохранить</button>
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