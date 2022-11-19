import './style/App.scss';
import logo from './assets/logo.png'
import logoName from './assets/logo-name.png'
import phone from './assets/phone.png'
import whatsUp from './assets/whatsup.png'
import telegram from './assets/telegram.png'

function App() {
    return (
        <div className="wrapper">
            <div className="container">
                <header className="header">

                    <div className="logo">
                        <div className="logo__img">
                            <img className="logo__logo" src={logo} alt="logo"/>
                            <img className="logo__name" src={logoName} alt="logoName"/>
                        </div>
                        <p className="logo__description">крупный интегратор CRM в Росcии и ещё 8 странах</p>
                    </div>

                    <div className="navigation">
                        <ul className="list">
                            <li className="list__items">Услуги</li>
                            <li className="list__items">Виджеты</li>
                            <li className="list__items">Ингерации</li>
                            <li className="list__items">Кейсы</li>
                            <li className="list__items">Сертификаты</li>

                        </ul>
                    </div>
                    <div className="contacts">
                        <span className="number">+7 555 555-55-55</span>
                        <img className="telegram size" src={telegram} alt="telegram"/>
                        <img className="phone size" src={phone} alt="phone"/>
                        <img className="whatsUp size" src={whatsUp} alt="whatsUp"/>
                    </div>
                </header>
                <main>
                    <div className="ball__purple"></div>
                    <div className="ball__purpleLight"></div>
                    <div className="ball__redLight-big"></div>
                    <div className="ball__redLight-small"></div>
                    <div className="ball__redLight-normal"></div>
                    <div className="left">
                        <h1 className='title'>Зарабатывайте больше <br/><span className='title__color'>c WELBEX</span>
                        </h1>
                        <p className='benefit'>Развиваем и контролируем продажи за вас</p>
                    </div>
                    <div className="right">
                        <div className='freeConsultation'>
                            Вместе с&nbsp;<span className='free'>бесплатной</span> <br/>
                            <span className='consultation'>консультацией</span>&nbsp;мы дарим:
                        </div>
                        <div>
                            <div className="bonus">
                                <p className="widget"></p>
                                <p className="description">30 готовых решений</p>
                            </div>
                            <div className="bonus">
                                <p className="dashboard"></p>
                                <p className="description">с показателями вашего бизнеса</p>
                            </div>
                            <div className="bonus">
                                <p className="skype"></p>
                                <p className="description">отдела продаж и CRM системы</p>
                            </div>
                            <div className="bonus">
                                <p className="days"></p>
                                <p className="description">использования CRM</p>
                            </div>
                            <button className="btn-consultation">Получить консультацию</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <nav className="nav">
                        <p className="nav__title">О компании</p>
                        <ul className="nav__list">
                            <li className="nav__item">Партнёрская программа</li>
                            <li className="nav__item">Вакансии</li>
                        </ul>
                    </nav>
                    <nav className="nav">
                        <p className="nav__title">Меню</p>
                        <ul className="nav__list">
                            <li className="nav__item transfer">Расчёт стоимости</li>
                            <li className="nav__item">Услуги</li>
                            <li className="nav__item">Виджеты</li>
                            <li className="nav__item">Интеграции</li>
                            <li className="nav__item">Наши клиенты</li>
                            <li className="nav__item">Кейсы</li>
                            <li className="nav__item transfer">Благодарственные письма</li>
                            <li className="nav__item">Сертификаты</li>
                            <li className="nav__item">Блог на Youtube</li>
                            <li className="nav__item">Вопрос / Ответ</li>
                        </ul>
                    </nav>
                    <nav className="nav">
                        <p className="nav__title">Контакты</p>
                        <p className="nav__tel">+7-555-555-55-55</p>
                        <img className="nav__img size" src={telegram} alt=""/>
                        <img className="nav__img size" src={phone} alt=""/>
                        <img className="nav__img size" src={whatsUp} alt=""/>
                        <ul className="nav__list">
                            <p className="nav__item">Москва, Путевой проезд 3с1, к 902</p>
                        </ul>
                        <section>
                            <p className="copyright">©WELBEX 2022. Все права защищены. <br/> <u>Политика конфиденциальности</u></p>
                        </section>
                    </nav>

                </footer>
            </div>
        </div>
    );
}

export default App;
