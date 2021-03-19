$(document).ready(function () {
  // header toggle menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('show-menu')) {
      navLinks.classList.remove('show-menu');
    } else {
      navLinks.classList.add('show-menu');
    }
  });

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

  // projects inner slider

  $('.commercial-project-slider, .residential-project-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    cssEase: 'linear',
    nextArrow: '<i class="next-arrow"></i>',
    prevArrow: '<i class="prev-arrow"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // project tabs
  $('.projects-tab').on('click', 'li', function () {
    let tabsId = $(this).attr('id');

    $(this).addClass('active').siblings().removeClass('active');
    $('#' + tabsId + '-content-box')
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  // project details tabs
  $('.project-details-tab').on('click', 'li', function () {
    let tabsId = $(this).attr('id');

    $(this).addClass('active').siblings().removeClass('active');
    $('#' + tabsId + '-content-box')
      .addClass('active')
      .siblings()
      .removeClass('active');
  });

  // modal
  const modalLink = document.querySelector('.walkthrough-video');
  const modalLinkLiBox = document.querySelectorAll('.typology-section li');
  const getDirectionsVideoLink = document.querySelector(
    '.get-directions-video'
  );
  const modalsCover = document.querySelector('.modals-cover');
  const body = document.body;

  function closeModal() {
    let activeModal = document.querySelector('.modal.show');
    let iframeTag = activeModal.querySelector('iframe');
    if (iframeTag) {
      let iframeSrc = iframeTag.getAttribute('src');
      iframeTag.setAttribute('src', iframeSrc);
    }
    activeModal.classList.remove('show');
    body.classList.remove('modal-open');
    //modalsCover.classList.remove('active');
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
  }

  if (modalLinkLiBox) {
    modalLinkLiBox.forEach((Li) => {
      Li.addEventListener('click', openModal);
    });
  }

  if (modalLink) {
    modalLink.addEventListener('click', openModal);
  }
  if (getDirectionsVideoLink) {
    getDirectionsVideoLink.addEventListener('click', openModal);
  }
  if (modalsCover) {
    modalsCover.addEventListener('click', closeModal);
  }

  // accordion for location

  var accordionItemHeaders = document.querySelectorAll(
    '.accordion-item-header'
  );

  function findActiveBodyContent() {
    accordionItemHeaders.forEach((accordionItemHeader) => {
      if (accordionItemHeader.classList.contains('active')) {
        var accordionItemBody = accordionItemHeader.nextElementSibling;
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + 'px';
      }
    });
  }

  window.onloadeddata = findActiveBodyContent();

  window.addEventListener('DOMContentLoaded', findActiveBodyContent);

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener('click', (event) => {
      // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

      const currentlyActiveAccordionItemHeader = document.querySelector(
        '.accordion-item-header.active'
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle('active');
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle('active');
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains('active')) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + 'px';
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  // panzoom map image

  let pzs = document.querySelectorAll('.panzoom');
  var zoomIn = document.querySelector('.zoom-in');
  var zoomOut = document.querySelector('.zoom-out');
  if (pzs) {
    pzs.forEach((pz) => {
      var newArea = panzoom(pz, {
        bounds: true,
        boundsPadding: 0.2,
        zoomSpeed: 0.2,
        maxZoom: 2,
        minZoom: 1,
      });

      function zoomInFunc() {
        newArea.smoothZoom(250, 250, 1.25);
      }

      function zoomOutFunc() {
        newArea.smoothZoom(250, 250, 0.8);
      }

      if (zoomIn) {
        zoomIn.addEventListener('click', zoomInFunc);
      }
      if (zoomOut) {
        zoomOut.addEventListener('click', zoomOutFunc);
      }
    });
  }

  $('.masterplan').on('beforeChange', function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    // let pzs = document.querySelectorAll('.panzoom');
    // let zoomIn = document.querySelector('.zoom-in');
    // let zoomOut = document.querySelector('.zoom-out');
    if (pzs) {
      pzs.forEach((pz) => {
        var newArea = panzoom(pz, {
          bounds: true,
          boundsPadding: 0.2,
          zoomSpeed: 0.2,
          maxZoom: 2,
          minZoom: 1,
        });

        function zoomInFunc() {
          newArea.smoothZoom(250, 250, 1.25);
        }

        function zoomOutFunc() {
          newArea.smoothZoom(250, 250, 0.8);
        }

        function resetFunc() {
          newArea.zoomAbs(0, 0, 0);
        }

        if (zoomIn) {
          zoomIn.addEventListener('click', zoomInFunc);
        }
        if (zoomOut) {
          zoomOut.addEventListener('click', zoomOutFunc);
        }

        resetFunc();
      });
    }
  });

  // scrolling content

  $('.mouse, [data-scroll]').click(function () {
    $('body, html').animate(
      {
        scrollTop: $('.project-details-page').offset().top - 70,
      },
      500
    );
  });

  // lifestyle slider

  $('.lifestyle').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="slide-arrow left"></i>',
    nextArrow: '<i class="slide-arrow right"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // project details banner slider

  $('.image-section').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
  });

  $('.masterplan').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="slide-arrow left"></i>',
    nextArrow: '<i class="slide-arrow right"></i>',
    draggable: false,
    asNavFor: '.masterplan-text-slider',
    fade: true,
  });

  $('.masterplan-text-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    asNavFor: '.masterplan',
    fade: true,
  });

  // banner link to tab
  const bannerLinks = document.querySelectorAll('.banner a');
  const tabLis = document.querySelectorAll('.project-details-tab ul li');
  const tabContentDivs = document.querySelectorAll('.projects-content > div');

  bannerLinks.forEach((bannerLink) => {
    bannerLink.addEventListener('click', function (e) {
      let bannerLinkText = bannerLink.innerText
        .toLowerCase()
        .split('')
        .join('');
      let anchorId = bannerLink.getAttribute('href').substr(1);
      console.log(bannerLinkText);
      tabLis.forEach((tabLi) => {
        tabLi.classList.remove('active');
        let tabLiText = [];
        tabLiText.push(tabLi.firstElementChild.innerText.toLowerCase());
        let compareLink = tabLiText.includes(bannerLinkText);
        if (!compareLink) {
        } else {
          tabLi.classList.add('active');
          tabContentDivs.forEach((tabContentDiv) => {
            tabContentDiv.classList.remove('active');
            let tabContentDivId = [];
            tabContentDivId.push(tabContentDiv.getAttribute('id'));
            let compareLinkContent = tabContentDivId.includes(anchorId);
            if (!compareLinkContent) {
            } else {
              tabContentDiv.classList.add('active');
            }
          });
        }
      });
    });
  });

  $('.ex1').zoom();

  let toggleLink = document.querySelector('.toggle-icon');
  toggleLink.addEventListener('click', function () {
    this.classList.toggle('show');
  });
});

let pzs1 = document.querySelectorAll('.panzoom1');
let zoomIns = document.querySelectorAll('.zoom-in');
let zoomOuts = document.querySelectorAll('.zoom-out');
if (pzs1) {
  pzs1.forEach((pz) => {
    var newArea = panzoom(pz, {
      zoomSpeed: 0.2,
      maxZoom: 2,
      minZoom: 1,
      transformOrigin: { x: 0.5, y: 0.5 },
    });

    function zoomInFunc(e) {
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

// explore more show hide

const typologyLi = document.querySelectorAll('.typology-cover li');
if (typologyLi) {
  function expMore(e) {
    const targetTab = e.currentTarget;
    const targetTabAtt = targetTab.getAttribute('data-id');
    const targetTabParent = targetTab.parentElement;
    const nextSibling = targetTabParent.nextElementSibling;
    const nextSiblingChild = nextSibling.querySelectorAll('.exp-more');
    nextSiblingChild.forEach((child) => {
      let childAnchorId = child.getAttribute('anchor-id');
      if (targetTabAtt === childAnchorId) {
        const d = child.parentNode.children;
        for (const el of d) {
          el.classList.add('exp-more');
        }
        child.classList.remove('exp-more');
      }
    });
  }

  typologyLi.forEach((li) => {
    li.addEventListener('click', expMore);
  });
}
