$(document).ready(function () {
  const allInputs = document.querySelectorAll('.input');
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
  $('#myTable').DataTable({
    sScrollX: '100%',
    sScrollY: 245,
    scrollCollapse: true,
    paging: true,
    ordering: false,
    info: false,
    language: {
      search: '_INPUT_',
      searchPlaceholder: 'Search...',
    },
  });
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

  let toggleLink = document.querySelector('.toggle-icon');
  toggleLink.addEventListener('click', function () {
    this.classList.toggle('show');
  });

  // modal
  const modalLink = document.querySelector('.successful-modal');
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

  modalLink.addEventListener('click', openModal);
  modalsCover.addEventListener('click', closeModal);
});
