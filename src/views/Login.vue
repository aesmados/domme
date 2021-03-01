<template>
  <div class="login">
    <div class="login-row">
      <img src="@/assets/images/main-logo.svg" alt="">
      <div class="slogan">
        Цифровой помощник в управлении кондоминиумом
      </div>
      <form class=login-form>
          <md-field>
            <label>Номер телефона</label>
            <md-input v-model="phone"></md-input>      
          </md-field> 
          <md-field>
            <label>Пароль</label>
            <md-input v-model="password" type="password"></md-input>      
          </md-field>  
                 
        <button class="enter-btn">
          Войти
        </button>
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
  data() {
      return {
          phone: '',
          password: ''
      }
  }
}
</script>

<style>

</style>