<template>
  <div id="nav">      
      <router-link class="nav-item" to="/" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6H21" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H21" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 18H21" stroke="#5B6CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 6H3.01" stroke="#5B6CFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H3.01" stroke="#5B6CFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H3.01" stroke="#5B6CFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Заявки
      </router-link> 
      <router-link class="nav-item" to="/users">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Люди
      </router-link>      
      <router-link class="nav-item" to="/chess">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3H3V10H10V3Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 3H14V10H21V3Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 14H14V21H21V14Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 14H3V21H10V14Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Шахматка
      </router-link>      
      <router-link class="nav-item" to="/finance">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 1V23" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       Финансы
      </router-link>      
      <router-link class="nav-item" to="/news">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 9H21" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 21V9" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       Лента
      </router-link>      
      <router-link class="nav-item" to="/events">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 12H22" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
        События
      </router-link>      
      <router-link class="nav-item" to="/telemetry">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69752 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69752 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.26953 6.96L11.9995 12.01L20.7295 6.96" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 22.08V12" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
       Телеметрия
      </router-link>      
      <router-link class="nav-item" to="/smarthouse">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg>
        Умный дом
      </router-link>      
      <router-link class="nav-item" to="/calendar">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 2V6" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 2V6" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 10H21" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg> 
       Календарь
      </router-link>      
      <router-link class="nav-item" to="/monitoring">
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 21H16" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 17V21" stroke="#2A2E52" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
       </svg> 
       Мониторинг
      </router-link>      
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  width: 176px;
  padding: 23px 0;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #F0F0F3;
}
#nav .nav-item {
  display: flex;  
  align-items: center;
  padding-left: 32px;
  border-left: 3px solid transparent;
  height: 36px;
  color: #7F8297;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-decoration: none;
  position: relative;
}
#nav .nav-item svg {
  margin-right: 10px;
}
#nav .nav-item svg path{    
  stroke: #7F8297;
}
#nav .nav-item:hover {
  transition: all .3s ease-in-out;
  border-left: 3px solid #BEC4FF;
}
#nav a {
  font-weight: bold;
  color: #7F8297;
}

#nav a.router-link-exact-active {
  color: #5B6CFF;
  border-left: 3px solid #5B6CFF;
}
#nav a.router-link-exact-active path {
  stroke: #5B6CFF;
}
</style>