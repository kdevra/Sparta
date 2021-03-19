// header toggle menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('show-menu')) {
      navLinks.classList.remove('show-menu');
    } else {
      navLinks.classList.add('show-menu');
    }
  });
}

// subscribe mail
const subscribeInput = document.querySelector('input');

if (subscribeInput) {
  subscribeInput.addEventListener('focusout', function () {
    if (subscribeInput.value.length > 0) {
      subscribeInput.classList.add('float');
    } else {
      subscribeInput.classList.remove('float');
    }
  });
}

// modal

$(document).ready(function () {
  const allInputs = document.querySelectorAll('input');
  if (allInputs) {
    for (let i = 0; i < allInputs.length; i++) {
      allInputs[i].addEventListener('focusout', function () {
        if (allInputs[i].value.length > 0) {
          allInputs[i].classList.add('float');
        } else {
          allInputs[i].classList.remove('float');
        }
      });
    }
  }
  let config = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="slide-arrow left" ></i>',
    nextArrow: '<i class="slide-arrow right"></i>',
    fade: true,
    draggable: false,
  };
  const modalLinkButtonBox = document.querySelectorAll('.modal-btn-box button');
  const checkAvailabilityLink = document.querySelector('.checkAvailability');
  const modalsCover = document.querySelector('.modals-cover');
  const body = document.body;

  function closeModal() {
    let activeModal = document.querySelector('.modal.show');
    let iframeTag = activeModal.querySelector('iframe.video');
    if (iframeTag) {
      let iframeSrc = iframeTag.getAttribute('src');
      console.log(iframeSrc);
      iframeTag.setAttribute('src', iframeSrc);
    }
    activeModal.classList.remove('show');
    body.classList.remove('modal-open');
  }

  function openModal(event) {
    let element = event.currentTarget;
    let id = element.getAttribute('data-id');
    let target = document.getElementById(id);
    let closeBtn = target.querySelector('.closeBtn');
    body.classList.add('modal-open');
    target.classList.add('show');
    closeBtn.addEventListener('click', closeModal);
    target
      .querySelector('.modal-content')
      .addEventListener('click', function (event) {
        event.stopPropagation();
      });
    if (id === 'unitPlan') {
      $('.unit-plan').not('.slick-initialized').slick(config);
    }
    if (id === 'viewIsometric') {
      $('.view-isometric').not('.slick-initialized').slick(config);
    }
  }

  $('.unit-plan, .view-isometric').on('beforeChange', function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    let pzs = document.querySelectorAll('.panzoom');
    let zoomIns = document.querySelectorAll('.zoom-in');
    let zoomOuts = document.querySelectorAll('.zoom-out');
    if (pzs) {
      pzs.forEach((pz) => {
        var newArea = panzoom(pz, {
          zoomSpeed: 0.2,
          maxZoom: 2,
          minZoom: 1,
          transformOrigin: { x: 0.5, y: 0.5 },
        });

        function zoomInFunc() {
          newArea.smoothZoom(0, 0, 1.25);
        }

        function zoomOutFunc() {
          newArea.smoothZoom(0, 0, 0.8);
        }

        function resetFunc() {
          newArea.zoomAbs(0, 0, 0);
        }

        if (zoomIns) {
          zoomIns.forEach((zoomin) => {
            zoomin.addEventListener('click', zoomInFunc);
          });
        }
        if (zoomOuts) {
          zoomOuts.forEach((zoomout) => {
            zoomout.addEventListener('click', zoomOutFunc);
          });
        }

        resetFunc();
      });
    }
  });

  if (modalLinkButtonBox) {
    modalLinkButtonBox.forEach((button) => {
      button.addEventListener('click', openModal);
    });
  }
  if (checkAvailabilityLink) {
    checkAvailabilityLink.addEventListener('click', openModal);
  }
  if (modalsCover) {
    modalsCover.addEventListener('click', closeModal);
  }

  // panzoom

  let pzs = document.querySelectorAll('.panzoom');
  let zoomIns = document.querySelectorAll('.zoom-in');
  let zoomOuts = document.querySelectorAll('.zoom-out');
  if (pzs) {
    pzs.forEach((pz) => {
      var newArea = panzoom(pz, {
        zoomSpeed: 0.2,
        maxZoom: 2,
        minZoom: 1,
        transformOrigin: { x: 0.5, y: 0.5 },
      });

      function zoomInFunc() {
        newArea.smoothZoom(550, 550, 1.25);
      }

      function zoomOutFunc() {
        newArea.smoothZoom(550, 550, 0.8);
      }

      if (zoomIns) {
        zoomIns.forEach((zoomin) => {
          zoomin.addEventListener('click', zoomInFunc);
        });
      }
      if (zoomOuts) {
        zoomOuts.forEach((zoomout) => {
          zoomout.addEventListener('click', zoomOutFunc);
        });
      }
    });
  }
});

function unitConversion() {
  $('.unit-wrap .js-unit').click(function () {
    var clickedUnit = $(this);
    var parentCont = clickedUnit.closest('.unit-details');
    parentCont.find('.unit-wrap .js-unit').removeClass('active');
    clickedUnit.addClass('active');
    parentCont.find('.floor-details .feet ,.floor-details .meter').hide();
    if (clickedUnit.hasClass('unit-meter')) {
      parentCont.find('.floor-details .meter').show();
    } else {
      parentCont.find('.floor-details .feet').show();
    }
  });
}

$(function () {
  unitConversion();
});

// show hide input on selection
$(document).ready(function () {
  $('#hearAboutUs').change(function () {
    $('#channelPartner').hide();
    $('#channelPartner input').removeClass('float').val('');
    $('#' + $(this).val()).show();
  });
  $('select').on('focus', function () {
    $(this).removeClass('select');
  });
  $('select').on('focusout', function () {
    if ($(this).val() === '') {
      $(this).addClass('select');
    }
  });
});

const checkAvailabilityBtn = document.querySelector('#checkAvailabilityBtn');
const checkAvailabilityLink = document.querySelector('.checkAvailability');
const checkAvailabilityForm = document.querySelector('.availability-form');
const successfulMsg = document.querySelector('.successful-msg');
checkAvailabilityBtn.addEventListener('click', () => {
  checkAvailabilityForm.style.display = 'none';
  successfulMsg.style.display = 'flex';
});
checkAvailabilityLink.addEventListener('click', () => {
  checkAvailabilityForm.style.display = 'flex';
  successfulMsg.style.display = 'none';
});
