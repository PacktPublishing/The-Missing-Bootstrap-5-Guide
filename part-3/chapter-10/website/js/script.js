document.addEventListener("DOMContentLoaded", function() {
  
  // Initialize all tooltips
  const tooltipTriggerElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  for (let i = 0; i < tooltipTriggerElements.length; i++) {
    new bootstrap.Tooltip(tooltipTriggerElements[i])
  }

  // Variables for individual pages
  const homePage = document.querySelector('#homePage'); // index.html
  const shopPage = document.querySelector('#shopPage'); // shop.html
  const productPage = document.querySelector('#productPage'); // product.html
  const contactPage = document.querySelector('#contactPage'); // contact.html
  const wishlistPage = document.querySelector('#wishlistPage'); // wishlist.html
  const cartPage = document.querySelector('#cartPage'); // cart.html

  // Only execute the following code on homePage, shopPage, productPage, and wishlistPage
  if (homePage || shopPage || productPage || wishlistPage) {

    // Handle button click and show toast when adding product to cart
    const addToCartButtons = document.querySelectorAll('.js-addToCart');
    const addToCartToast = document.querySelector('.js-cartToast');
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', function() {
        new bootstrap.Toast(addToCartToast).show();
      })
    }

  }

  // Only execute the following code on homePage, shopPage, and productPage
  if (homePage || shopPage || productPage) {

    // Handle button click and show toast when adding product to wishlist
    const addToWishlistButtons = document.querySelectorAll('.js-addToWishlist');
    const addToWishlistToast = document.querySelector('.js-wishlistToast');
    for (let i = 0; i < addToWishlistButtons.length; i++) {
      addToWishlistButtons[i].addEventListener('click', function() {
        new bootstrap.Toast(addToWishlistToast).show();
      })
    }

  }

  // Only execute the following code on wishlistPage
  if (wishlistPage) {

    // Handle button click and show toast when adding all products to cart
    const addAllToCartButton = document.querySelector('.js-addAllToCart');
    const addAllToCartToast = document.querySelector('.js-addAllToast');
    addAllToCartButton.addEventListener('click', function() {
      new bootstrap.Toast(addAllToCartToast).show();
    })
  
    // Handle button click and show toast + remove element from DOM when removing product from wishlist
    const removeFromWishlistButtons = document.querySelectorAll('.js-removeFromWishlist');
    const removeFromWishlistToast = document.querySelector('.js-wishlistToast');
    for (let i = 0; i < removeFromWishlistButtons.length; i++) {
      removeFromWishlistButtons[i].addEventListener('click', function() {
        new bootstrap.Toast(removeFromWishlistToast).show();
        removeFromWishlistButtons[i].closest('.card').parentElement.remove();
      })
    }

  }

  // Only execute the following code on cartPage
  if (cartPage) {

    // Handle button click and show toast + remove element from DOM when removing product from cart
    const removeFromCartButtons = document.querySelectorAll('.js-removeFromCart');
    const removeFromCartToast = document.querySelector('.js-cartToast');
    for (let i = 0; i < removeFromCartButtons.length; i++) {
      removeFromCartButtons[i].addEventListener('click', function() {
        new bootstrap.Toast(removeFromCartToast).show();
        removeFromCartButtons[i].parentElement.parentElement.remove();
      })
    }

    // Handle button click on input group buttons and adjust value of input
    const productQuantityInputGroup = document.querySelectorAll('.js-productQuantity');
    for (let i = 0; i < productQuantityInputGroup.length; i++) {
      let productQuantityInput = productQuantityInputGroup[i].querySelector('.form-control');
      const productQuantitySubtractButton = productQuantityInputGroup[i].querySelectorAll('.btn')[0];
      const productQuantityAddButton = productQuantityInputGroup[i].querySelectorAll('.btn')[1];
      productQuantitySubtractButton.addEventListener('click', function() {
        if (productQuantityInput.value > 1) {
          productQuantityInput.value--;
        }
      })
      productQuantityAddButton.addEventListener('click', function() {
        productQuantityInput.value++;
      })
    }

  }

  // Markup for spinner component used on various forms
  const spinnerMarkup = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Please wait...';

  // Only execute the following code on homePage
  if (homePage) {

    // Newsletter form
    const newsletterForm = document.querySelector('#newsletterForm');
    newsletterForm.addEventListener('submit', function (event) {
      if (!newsletterForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const newsletterButton = document.querySelector('#newsletterButton');
        newsletterButton.innerHTML = spinnerMarkup;
        newsletterButton.disabled = true;
        setTimeout(function() {
          const newsletterConfirmationText = 'Subscribed';
          newsletterButton.innerHTML = newsletterConfirmationText;
          const newsletterConfirmationElement = document.querySelector('#newsletterConfirmation');
          new bootstrap.Collapse(newsletterConfirmationElement).show();
        }, 2000)
      }
      newsletterForm.classList.add('was-validated');
    }, false)
  }

  // Only execute the following code on contactPage
  if (contactPage) {

    // Contact form
    const contactForm = document.querySelector('#contactForm');
    contactForm.addEventListener('submit', function (event) {
      if (!contactForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const contactButton = document.querySelector('#contactButton');
        contactButton.innerHTML = spinnerMarkup;
        contactButton.disabled = true;
        setTimeout(function() {
          const contactConfirmationText = 'Sent';
          contactButton.innerHTML = contactConfirmationText;
          const contactConfirmationElement = document.querySelector('#contactConfirmation');
          new bootstrap.Collapse(contactConfirmationElement).show();
        }, 2000)
      }
      contactForm.classList.add('was-validated');
    }, false)
  }

  // Only execute the following code on cartPage
  if (cartPage) {

    // Scroll effect for forms
    function scrollToTop() {
      scroll({
        top: 0,
        behavior: "smooth"
      });
    }

    // Progress component which is animated by the tabs navigation below
    const cartProgressBar = document.querySelector('#cartProgress .progress-bar');

    // Shopping Cart form
    const shoppingCartForm = document.querySelector('#shoppingCartForm');
    shoppingCartForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Go to cart tab 2
      scrollToTop();
      setTimeout(function() {
        const cartTabs2Element = document.querySelector('#cartTabs-2');
        new bootstrap.Tab(cartTabs2Element).show();
        cartProgressBar.classList.add("w-33");
        cartProgressBar.ariaValueNow = 33;
      }, 600)
    }, false)

    // Shipping Details form
    const shippingForm = document.querySelector('#shippingForm');
    shippingForm.addEventListener('submit', function (event) {
      if (!shippingForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // Go to cart tab 3
        scrollToTop();
        setTimeout(function() {
          const cartTabs3Element = document.querySelector('#cartTabs-3');
          new bootstrap.Tab(cartTabs3Element).show();
          cartProgressBar.classList.remove("w-33");
          cartProgressBar.classList.add("w-67");
          cartProgressBar.ariaValueNow = 67;
        }, 600)
      }
      shippingForm.classList.add('was-validated');
    }, false)

    // Payment Options form
    const paymentForm = document.querySelector('#paymentForm');
    paymentForm.addEventListener('submit', function (event) {
      if (!paymentForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        const paymentButton = document.querySelector('#paymentButton');
        paymentButton.innerHTML = spinnerMarkup;
        paymentButton.disabled = true;
        setTimeout(function() {
          const paymentConfirmationText = 'Paid';
          paymentButton.innerHTML = paymentConfirmationText;
          const paymentConfirmationElement = document.querySelector('#paymentConfirmation');
          new bootstrap.Collapse(paymentConfirmationElement).show();
          cartProgressBar.classList.remove("w-67");
          cartProgressBar.classList.add("w-100");
          cartProgressBar.ariaValueNow = 100;
          setTimeout(function() {
            cartProgressBar.classList.remove("progress-bar-animated");
          }, 500)
        }, 2000)
      }
      paymentForm.classList.add('was-validated');
    }, false)
  }

  // Only execute the following code on productPage
  if (productPage) {

    // Handle button click and open product gallery with specific "src" value
    const productGalleryThumbnails = document.querySelectorAll('.js-productGalleryThumbnail');
    const productGalleryImage = document.querySelector('.js-productGalleryImage');
    for (let i = 0; i < productGalleryThumbnails.length; i++) {
      productGalleryThumbnails[i].addEventListener('click', function() {
        productGalleryImage.src = productGalleryThumbnails[i].dataset.src;
      })
    }

  }

});