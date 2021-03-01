<template>
  <div class="login">
    <div class="login-row build-info">
      <h5>Введите данные ЖК</h5>
      <form class="login-form">
          <md-field>
            <label>Название ЖК</label>
            <md-input v-model="name"></md-input>      
          </md-field>
          <md-field>
            <md-select v-model="city" name="city" id="city" placeholder="Город">
                <md-option value="almaty">Алматы</md-option>
                <md-option value="nursultan">Нұрсұлтан</md-option>
                <md-option value="shymkent">Шымкент</md-option>
                <md-option value="aktau">Ақтау</md-option>
            </md-select>
          </md-field>          
          <md-field>
            <label>Адрес (ул. Гагарина, 124)</label>
            <md-input v-model="phone"></md-input>      
          </md-field>        
        <div class="block-count">
          <div class="counter">
            <div @click="counter--" class="decrease">
              -
            </div>
            <div class="num">
              {{ counter }}
            </div>
            <div @click="counter++" class="increase">
              +
            </div>
          </div>
          <p>Количество блоков</p>
        </div>
        <div class="save-btn">
          Сохранить
        </div>
      </form>
    </div>
    <div class="login-footer">
      <div class="rights">
        Domme. All rights reserved
      </div>
      <div class="contacts">
        <a href="">+7 771 701 72 79</a>
        <a href="mailto:ssn@domme.kz">ssn@domme.kz</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {      
      counter: 0
      
    }
  }
}
</script>

<style>

</style>