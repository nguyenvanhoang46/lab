
$(() => {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]

    // prevArrow: "<div class='slick-prev slick-arrow'><i class='fa-solid fa-arrow-left'></i></div>",
    // nextArrow: "<div class='slick-next slick-arrow'><i class='fa-solid fa-arrow-right'></i></div>"
  });

})

$(() => {
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const tabs = $$('.tab-item')
  const panes = $$('.tab-pane')



  tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
      $('.tab-item.active').classList.remove('active')
      $('.tab-pane.active').classList.remove('active')
      this.classList.add('active')
      pane.classList.add('active')
    }
  });
})


$('.left').click(function () {
  $('.slider').slick('slickPrev');
})

$('.right').click(function () {
  $('.slider').slick('slickNext');
})


