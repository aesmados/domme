<template>
  <div class="content">
    <div class="user-row">
      <div class="tab-row">
        <div class="tab-item" @click="activetab='1'" :class="[ activetab === '1' ? 'active' : '' ]">
          Лицевые счета
        </div>
        <div class="tab-item" @click="activetab='2'" :class="[ activetab === '2' ? 'active' : '' ]">
          Сотрудники
        </div>
        <div class="tab-item" @click="activetab='3'" :class="[ activetab === '3' ? 'active' : '' ]">
          Подрядчики
        </div>
      </div>
      <div class="search">
        <input type="text" placeholder="Поиск...">
      </div>
      <div class="switch-box">
          Только должники
          <label class="switch">
              <input type="checkbox">
              <span class="slider"></span>
          </label>
      </div>
      <div class="create-btn add-user" @click="toggleCreateUser">
        Добавить
      </div>
    </div>
    <div class="user-split" v-if="activetab === '1'">
      <div class="users-list">
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/company.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Застройка площадок</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div> 
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/company.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Застройка площадок</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/company.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Застройка площадок</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/company.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Застройка площадок</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
               
      </div>
      <div class="user-details">
        <div class="side-modal-wrap">                                
          <div class="executor-info">
              <div class="avatar">
                  <img src="@/assets/images/avatar-lg.svg" alt="">
              </div>
              <div class="text">
                  <div class="name">
                      Земский Андрей
                  </div>
                  <div class="job-status">
                      Электрик
                      </div>                  
              </div>
          </div>
          <div class="executor-description">
              <div class="item">
                  <div class="left">
                      E-mail
                  </div>
                  <div class="right">
                      kovrogangster@mail.ru
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                      Телефон
                  </div>
                  <div class="right">
                      +7 707 111-22-33
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     Юр. адрес
                  </div>
                  <div class="right">
                      1901 Thornridge Cir. Shiloh, Haw...
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     БИН
                  </div>
                  <div class="right">
                      34664567
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     Ф.И.О руководитля
                  </div>
                  <div class="right">
                      Сисенгалиев Медет
                  </div>
              </div>
          </div>
          <div class="doc-block">
                <div class="image">
                    <img src="@/assets/images/file.svg" alt="">
                </div>
                <div class="text">
                    <div class="doc-name">
                        Договор
                    </div>
                    <div class="open">
                        Открыть
                    </div>
                </div>
          </div>   
          
        </div> 
        <div class="btn-row">
            <div class="edit-btn">
              Редактировать
            </div>
            <div class="delete-btn" @click="toggleDeleteUser">
              Удалить
            </div>
          </div>
      </div>
    </div>
    <div class="user-split" v-if="activetab === '2'">
      <div class="users-list">
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
         <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
        <div class="user-item user-info">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="name">Медет Сисенгалиев</div>
              <div class="user-status">
                Должность
              </div>
          </div>          
        </div>
      </div>
      <div class="user-details">
        <div class="side-modal-wrap">                                
          <div class="executor-info">
              <div class="avatar">
                  <img src="@/assets/images/avatar-lg.svg" alt="">
              </div>
              <div class="text">
                  <div class="name">
                      Земский Андрей
                  </div>
                  <div class="job-status">
                      Электрик
                      </div>                  
              </div>
          </div>
          <div class="executor-description">
              <div class="item">
                  <div class="left">
                      E-mail
                  </div>
                  <div class="right">
                      kovrogangster@mail.ru
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                      Телефон
                  </div>
                  <div class="right">
                      +7 707 111-22-33
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     ИИН
                  </div>
                  <div class="right">
                      9967345622
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     Номер УДВ
                  </div>
                  <div class="right">
                      №346486
                  </div>
              </div>
          </div>
          <div class="doc-block">
                <div class="image">
                    <img src="@/assets/images/file.svg" alt="">
                </div>
                <div class="text">
                    <div class="doc-name">
                        Трудовой договор
                    </div>
                    <div class="open">
                        Открыть
                    </div>
                </div>
          </div>   
          <div class="worker-raiting">
              <div class="item">
                  <div class="left">
                      Средняя оценка УК
                  </div>
                  <div class="right">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                      Средняя оценка пользователей
                  </div>
                  <div class="right">
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M7 1.23569L7.84524 3.83673C8.113 4.66071 8.88085 5.21859 9.74725 5.21863L12.4822 5.21873L10.2696 6.82637C9.56873 7.33565 9.27543 8.23832 9.54313 9.06232L10.3882 11.6634L8.17551 10.056C7.47456 9.54673 6.52544 9.54673 5.82449 10.056L3.61183 11.6634L4.45687 9.06232C4.72457 8.23832 4.43127 7.33565 3.73036 6.82637L1.51782 5.21873L4.25275 5.21863C5.11914 5.21859 5.887 4.66072 6.15476 3.83673L7 1.23569Z" fill="#2A2E52" stroke="#2A2E52" stroke-width="2"/>
                    </svg>
                  </div>
              </div>
          </div>
        </div> 
        <div class="btn-row">
            <div class="edit-btn">
              Редактировать
            </div>
            <div class="delete-btn" @click="toggleDeleteUser">
              Удалить
            </div>
          </div>
      </div>
    </div>
    <div class="user-split" v-if="activetab === '3'">
      <div class="users-list">
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>
                                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white2.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item red">
          <div class="avatar">
              <img src="@/assets/images/avatar-white2.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>
                <div class="address debt">
                  <div class="type">Долг</div>
                  <div class="num">20.000</div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white2.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white2.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
        <div class="user-item">
          <div class="avatar">
              <img src="@/assets/images/avatar-white2.svg" alt="">
          </div>
          <div class="text">
              <div class="account">4356634</div>
              <div class="address-row">
                <div class="address">
                    <div class="type"> Блок </div>
                    <div class="num"> 2 </div>
                </div>
                <div class="address">
                    <div class="type"> Подъезд </div>
                    <div class="num"> 5 </div>
                </div>                
            </div>
          </div>          
        </div>
      </div>
      <div class="user-details">
        <div class="side-modal-wrap">                                
          <div class="executor-info">
              <div class="avatar">
                  <img src="@/assets/images/avatar-lg.svg" alt="">
              </div>
              <div class="text">
                  <div class="name">
                      Земский Андрей
                  </div>
                  <div class="address-row">
                      <div class="address">
                          <div class="type"> Блок </div>
                          <div class="num"> 2 </div>
                      </div>
                      <div class="address">
                          <div class="type"> Подъезд </div>
                          <div class="num"> 5 </div>
                      </div>
                      <div class="address">
                          <div class="type"> Этаж </div>
                          <div class="num"> 12 </div>
                      </div>
                      <div class="address">
                          <div class="type"> Квартира </div>
                          <div class="num"> 124 </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="executor-description">
              <div class="item">
                  <div class="left">
                      E-mail
                  </div>
                  <div class="right">
                      kovrogangster@mail.ru
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                      Телефон
                  </div>
                  <div class="right">
                      +7 707 111-22-33
                  </div>
              </div>
              <div class="item">
                  <div class="left">
                     Телефон
                  </div>
                  <div class="right">
                      +7 707 111-22-33
                  </div>
              </div>
          </div>
          <div class="leave-comment">
            <textarea placeholder="Напишите комментарий"></textarea>
          </div>
          <div class="debt-ammount">
              <img src="@/assets/images/alert.svg" alt="">
              <div class="text">
                  <div class="sum">
                      20.000 тг
                  </div>
                  <div class="info">
                      Накопленный долг
                  </div>
              </div>
          </div>
          <div class="history">
              <h6>История платежей</h6>
              <div class="item">
                  <div class="left">
                      Август, 2020
                  </div>
                  <div class="right pos">
                        80.000 
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.81818L4.125 8L11 1" stroke="#64DCA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div>                        
              </div>
              <div class="item">
                  <div class="left">
                      Июль, 2020
                  </div>
                  <div class="right neg">
                      -10.000
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4">
                      <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                      <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                      </g>
                      </svg>
                  </div>                        
              </div>
              <div class="item">
                  <div class="left">
                      Июль, 2020
                  </div>
                  <div class="right neg">
                      -10.000
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.4">
                      <path d="M1 1.00012L11.0001 11.0002" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                      <path d="M1 11L11.0001 0.999948" stroke="#2A2E52" stroke-width="2" stroke-linecap="round"/>
                      </g>
                      </svg>
                  </div>                        
              </div>
          </div>
        </div> 
        <div class="btn-row">
            <div class="edit-btn">
              Редактировать
            </div>
            <div class="delete-btn">
              Удалить
            </div>
          </div>
      </div>
    </div>
    <div v-show="showCreateUser">
      <CreateUser @close="toggleCreateUser">
      </CreateUser>
    </div>
    <div v-show="showDeleteUser">
      <DeleteUser @close="toggleDeleteUser">
      </DeleteUser>
    </div>
  </div>
</template>
<script>
import CreateUser from '@/components/modals/CreateUser.vue'
import DeleteUser from '@/components/modals/DeleteUser.vue'
export default {
  components: {
    CreateUser, DeleteUser
  },
  data() {
    return {
      showCreateUser: false,
      showDeleteUser: false,
      activetab: '1'
    }
  },
  methods: {
    toggleCreateUser() {
      this.showCreateUser = !this.showCreateUser
    },
    toggleDeleteUser() {
      this.showDeleteUser = !this.showDeleteUser
    }
  }
}
</script>