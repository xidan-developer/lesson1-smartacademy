<template>
  <div class="main">
    <section class="section main-section">
      <header class="container-fluid">
        <div class="header justify-content-center">
          <div class="col-lg-2 logo">
            <a href="#">AppSon</a>
          </div>
          <div class="col-md-10 main-menu">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pages</a>
              </li>
              <li class="nav-item sign">
                <a class="nav-link" href="#">Sign up</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6  col-sm-12 mt-5">
            <div class="main-info text-center">
              <div class="main-info__title">
                <h2>Best Desktop App for You</h2>
              </div>
              <div class="main-info__description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="main-info__buttons">
              <ul class="batton_use">
                <li><a href="#" class="batton_dowload">Download</a></li>
                <li><a href="#" class="batton_trial">Free Trial</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="devices">
        <div class="devices_block">
          <img :src="require('../assets/img/Devices.png')" alt="" class="img-fluid">
        </div>
      </div>
      <div id="outer-circle">
        <div id="inner-circle">
          <div class="most-upstairs">
            <div class="storona-uveka"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section__three-cards">
      <div class="container">
        <div class="row">
          <div class="three-cards">
            <div class="col-md-4 col-sm-12 three-cards__card">
              <div class="three-cards__card-image">
                <img :src="require('../assets/img/Icon1.png')" alt="">
              </div>
              <div class="three-cards__card-title">
                <span>Analysis</span>
              </div>
              <div class="three-cards__card-description">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 three-cards__card mrg-top">
              <div class="three-cards__card-image">
                <img :src="require('../assets/img/Icon2.png')" alt="">
              </div>
              <div class="three-cards__card-title">
                <span>Clean Design</span>
              </div>
              <div class="three-cards__card-description">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 three-cards__card">
              <div class="three-cards__card-image">
                <img :src="require('../assets/img/Icon3.png')" alt="">
              </div>
              <div class="three-cards__card-title">
                <span>Messaging</span>
              </div>
              <div class="three-cards__card-description">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-two-cards">
      <div class="container">
        <div class="row">
          <div class="advantages">
            <div class="advantage">
              <div class="col-md-6 col-sm-12 advantage__image">
                <img :src="require('../assets/img/woman1.png')" alt="" class="img-fluid">
              </div>
              <div class="col-md-5 col-sm-12 advantage__message">
                <div class="advantage__message-title">
                  <span>Easy Messaging</span>
                </div>
                <div class="advantage__message--text">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div class="advantage__message--link">
                  <span>Read More</span>
                </div>
              </div>
            </div>
            <div class="advantage reverse">
              <div class="col-md-5 advantage__image">
                <img :src="require('../assets/img/man2.png')" alt="" class="img-fluid">
              </div>
              <div class="col-md-6 advantage__message">
                <div class="advantage__message-title">
                  <span>Keep In Touch</span>
                </div>
                <div class="advantage__message--text">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
                <div class="advantage__message--link">
                  <span>Read More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section__does-works">
      <div class="container">
        <div class="row does-works">
          <div class="does-works-block">
            <div class="does-works-title">
              <h3>How Does It Works?</h3>
            </div>
            <div class="does-works-description">
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div class="does-works-icons">
            <div class="does-works-icon-item">
              <div class="icon-item-img">
                <img :src="require('../assets/img/icon-create.png')" alt="" class="img-fluid">
              </div>
              <div class="icon-item-text">
                <div class="icon-item-text-title">
                  <span>Create An Account</span>
                </div>
                <div class="icon-item-text-description">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</span>
                </div>
              </div>
            </div>
            <div class="does-works-icon-item">
              <div class="icon-item-img">
                <img :src="require('../assets/img/Icon-confirm.png')" alt="" class="img-fluid">
              </div>
              <div class="icon-item-text">
                <div class="icon-item-text-title">
                  <span>Confirm Email</span>
                </div>
                <div class="icon-item-text-description">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</span>
                </div>
              </div>
            </div>
            <div class="does-works-icon-item">
              <div class="icon-item-img">
                <img :src="require('../assets/img/Icon-results.png')" alt="" class="img-fluid">
              </div>
              <div class="icon-item-text">
                <div class="icon-item-text-title">
                  <span>See Results</span>
                </div>
                <div class="icon-item-text-description">
                  <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div>
            <div>
              <span>Pricing Plan</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div>
              <ul>
                <li><a href="">Monthly</a></li>
                <li><a href="">Yearly</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-news">
      <div class="container">
        <div class="row">
          <div class="news">
            <div class="col-md-6 selected-news">
              <div class="selected-news__preview">
                <img :src="require('../assets/img/select-news.svg')" alt="" class="img-fluid">
              </div>
              <div class="selected-news__title">
                <h3>The master bedroom suite is phenomenally spacious</h3>
              </div>
              <div class="selected-news__info">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div class="selected-news__link">
                <a href="#">
                  <span>Continue Reading</span>
                  <span class="icon"></span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 news-item">
              <div class="item">
                <div class="item__image">
                  <img :src="require('../assets/img/news-1.svg')" alt="" class="img-fluid">
                </div>
                <div class="item__info">
                  <div class="item__title">
                    <h4>The master bedroom suite is phenomeny spacious</h4>
                  </div>
                  <div class="item__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item__image">
                  <img :src="require('../assets/img/news-2.svg')" alt="" class="img-fluid">
                </div>
                <div class="item__info">
                  <div class="item__title">
                    <h4>The master bedroom suite is phenomeny spacious</h4>
                  </div>
                  <div class="item__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item__image">
                  <img :src="require('../assets/img/news-3.svg')" alt="" class="img-fluid">
                </div>
                <div class="item__info">
                  <div class="item__title">
                    <h4>The master bedroom suite is phenomeny spacious</h4>
                  </div>
                  <div class="item__text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-slider">
      <div class="container-fluid">
        <div class="row">
          <div class="section-slider__content">
            <div class="section-slider__image">
              <img :src="require('../assets/img/sliderImage.svg')" alt="" class="img-fluid">
            </div>
            <carousel-slider
                :carousel_data="sliderItems"
            />
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
import CarouselSlider from "@/components/CarouselSlider";

export default {
  name: "Main",
  components: {
    CarouselSlider
  },
  data () {
    return {
      sliderItems: [
        {title: 'Raisa Moni', subTitle: 'Envato Customer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.'},
        {title: 'Raisa Moni', subTitle: 'Envato Customer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.'},
        {title: 'Raisa Moni', subTitle: 'Envato Customer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.'},
        {title: 'Raisa Moni', subTitle: 'Envato Customer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etamet.'}
      ]
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/styles.scss";
</style>