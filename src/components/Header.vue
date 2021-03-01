<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="top">
        <div class="house">
            <div class="icon" @click="toggleList">
                <img src="@/assets/images/home.svg" alt="">
            </div>
            <div class="text">
                 <div class="house-name">
                    ЖК “Gagarin Park”
                </div>
                <div class="pick-other" @click="toggleList">
                    Выбрать другой
                </div>
            </div>
            <div v-show="houseList">
                <div class="house-list">
                <div class="house-item">
                    <div class="text">
                        <div class="house-name">
                            ЖК “Gagarin Park”
                        </div>
                        <div class="orders-count">
                            Новые заявки (45)
                        </div>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/house-arrow.svg" alt="">
                    </div>
                </div>
                <div class="house-item">
                    <div class="text">
                        <div class="house-name">
                            ЖК “Gagarin Park”
                        </div>
                        <div class="orders-count">
                            Новые заявки (45)
                        </div>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/house-arrow.svg" alt="">
                    </div>
                </div>
                <div class="house-item">
                    <div class="text">
                        <div class="house-name">
                            ЖК “Gagarin Park”
                        </div>
                        <div class="orders-count">
                            Новые заявки (45)
                        </div>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/house-arrow.svg" alt="">
                    </div>
                </div>
                <div class="house-item">
                    <div class="text">
                        <div class="house-name">
                            ЖК “Gagarin Park”
                        </div>
                        <div class="orders-count">
                            Новые заявки (45)
                        </div>
                    </div>
                    <div class="right">
                        <img src="@/assets/images/house-arrow.svg" alt="">
                    </div>
                </div>
                <div class="create-object">
                    + Создать объект
                </div>
            </div>
            </div>
        </div>
        <div class="right-corner">
            <div class="notifications">
                <img src="@/assets/images/bell.svg" alt="" @click="toggleMsgList">
                <div v-show="msgList">
                    <div class="messages-list">
                    <div class="message-item">
                        <div class="text">
                            <div class="title">
                                Новое сообщение
                            </div>
                            <div class="order-num">
                                Заявка №12
                            </div>
                        </div>
                        <div class="new">
                            New
                        </div>
                    </div>
                    <div class="message-item">
                        <div class="text">
                            <div class="title">
                                Новое сообщение
                            </div>
                            <div class="order-num">
                                Заявка №12
                            </div>
                        </div>                        
                    </div>
                    <div class="message-item">
                        <div class="text">
                            <div class="title">
                                Новое сообщение
                            </div>
                            <div class="order-num">
                                Заявка №12
                            </div>
                        </div>                        
                    </div>
                    <div class="message-item">
                        <div class="text">
                            <div class="title">
                                Новое сообщение
                            </div>
                            <div class="order-num">
                                Заявка №12
                            </div>
                        </div>                        
                    </div>
                </div>
                </div>
            </div>
            <div class="avatar">
                <img src="@/assets/images/avatar.jpg" alt="" @click="toggleLogout">
                <div v-show="logOut" class="log-out">
                    <div class="name">
                        Земский Андрей
                    </div>
                    <div class="phone">
                        +7 707 425-66-12
                    </div>
                    <div class="log-out-btn">
                        <img src="@/assets/images/log-out.svg" alt=""> Выйти из аккаунта
                    </div>
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
            houseList: false,
            msgList: false,
            logOut: false
        }
    },
    methods: {
        toggleList() {
            this.houseList = !this.houseList
        },
        toggleMsgList() {
            this.msgList = !this.msgList
        },
        toggleLogout() {
            this.logOut = !this.logOut
        }
    }
}
</script>

<style>

</style>