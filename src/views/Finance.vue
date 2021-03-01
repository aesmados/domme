<template>
  <div class="content">
      <div class="row">
        <div class="tab-row">
            <div class="tab-item"  @click="activetab='1'" :class="[ activetab === '1' ? 'active' : '' ]">
                Финансовый поток
            </div>
            <div class="tab-item" @click="activetab='2'" :class="[ activetab === '2' ? 'active' : '' ]">
                Финансовые отчеты
            </div>  
            <div class="tab-item" @click="activetab='3'" :class="[ activetab === '3' ? 'active' : '' ]">
                Тарифы
            </div> 
            <div class="flex-row">
                
            </div>        
        </div>
    </div>
    <div v-if="activetab ==='1'" class="finance">
        <div class="finance-box">
            <div class="finance-row">
            <div class="finance-item">
                <div class="left">
                    Остаток на текущем счете
                </div>
                <div class="right">
                    2.444.955 T
                </div>
            </div>
            <div class="finance-item">
                <div class="left">
                    Остаток на сберегательном счете
                </div>
                <div class="right">
                    0 T
                </div>
            </div>
            <div class="finance-item">
                <div class="left">
                    Остаток на сберегательном счете
                </div>
                <div class="right">
                    0 T
                </div>
            </div>
            <div class="finance-item">
                <div class="left">
                    Остаток на сберегательном счете
                </div>
                <div class="right">
                    0 T
                </div>
            </div>           
            </div>
        </div>
        <div class="row">
            <div class="report-date">
                <md-datepicker v-model="selectedDate" />
            </div>
            <div class="btn-row">
                <button class="save-changes">Сохранить изменения</button>
                <button class="close-current-month">Закрыть текущий месяц</button>
            </div>
        </div>
        <div class="finance-box">
            <div class="finance-row">
                <div class="io-item">
                    <div class="name">
                        Текущие расходы
                    </div>
                    <div class="flex-row ai-fe">
                        <div class="sum">
                            476.162 Т
                        </div>                        
                        <div class="percent green">
                            3,321% 
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1.402L5 14.3447M5 14.3447L9 10.5207M5 14.3447L0.999999 10.5207" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                                Расходы по управлению объектом кондоминиума, в том числе:
                            </div>
                            <div class="right">
                                60.666.642 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">
                            <div class="field">
                                <div class="left">
                                    <textarea>
                                        Оплата труда за ведение бухгалтерского учета, статистической и налоговой отчетности|
                                    </textarea>
                                </div>
                                <div class="right">
                                    <input type="text" value="30.333.321 T">
                                </div>
                            </div>
                            <div class="field">
                                <div class="left">
                                    <textarea>
                                        Оплата труда за управление объектом кондоминиума
                                    </textarea>
                                </div>
                                <div class="right">
                                    <input type="text" value="30.333.321 T">
                                </div>
                            </div>
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                               Расходы по содержанию общего имущества объекта кондоминиума, в том числе
                            </div>
                            <div class="right">
                                30.333.321 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                               Оплата услуг по договорам субъектам сервисной деятельности, в том числе
                            </div>
                            <div class="right">
                                0 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>
                    <div class="add-outcome">
                        Добавить расход
                    </div>
                </div>
                <div class="io-item">
                    <div class="name">
                        Текущие доходы
                    </div>
                    <div class="flex-row ai-fe">
                        <div class="sum">
                            471.040 Т
                        </div>                        
                        <div class="percent red">
                            3,321% 
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1.402L5 14.3447M5 14.3447L9 10.5207M5 14.3447L0.999999 10.5207" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                                Ежемесячные взносы на управление
и содержание (РСЖ)
                            </div>
                            <div class="right">
                                0 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                               Сберегательный счет
(для накопления  на кап. ремонт)
                            </div>
                            <div class="right">
                                0 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>                    
                    <div class="add-income">
                        Добавить доход
                    </div>
                    <div class="name">
                        Другие доходы
                    </div>
                    <div class="flex-row ai-fe">
                        <div class="sum">
                            3.000.000 Т
                        </div>                        
                        <div class="percent red">
                            3,321% 
                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1.402L5 14.3447M5 14.3447L9 10.5207M5 14.3447L0.999999 10.5207" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                                Ежемесячные взносы на управление
и содержание (РСЖ)
                            </div>
                            <div class="right">
                                0 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>
                    <div class="accardeon">
                        <div class="head" @click="showBody =! showBody">
                            <div class="left">
                               Сберегательный счет
(для накопления  на кап. ремонт)
                            </div>
                            <div class="right">
                                0 T
                                <img src="@/assets/images/arrow-down.svg" alt="">
                            </div>
                        </div>
                        <div class="body" v-if="showBody">                            
                            <div class="add-field">
                                + Добавить поле
                            </div>
                        </div>
                    </div>                    
                    <div class="add-income">
                        Добавить доход
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="activetab === '2'" class="finance-box ">
                
        
    </div> 
  </div>
</template>

<script>
export default {
data() {
    return {
        activetab: '1',
        showBody: false
    }
}
}
</script>

<style>

</style>