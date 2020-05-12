var navMain = document.querySelector('.page-header-nav');
      var navToggle = document.querySelector('.page-header-nav__toggle');

      navMain.classList.remove('page-header-nav--nojs');

      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('page-header-nav--closed')) {
          navMain.classList.remove('page-header-nav--closed');
          navMain.classList.add('page-header-nav--opened');
        } else {
          navMain.classList.add('page-header-nav--closed');
          navMain.classList.remove('page-header-nav--opened');
        }
      });
