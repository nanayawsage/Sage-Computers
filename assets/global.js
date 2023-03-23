
  
  document.addEventListener("DOMContentLoaded", 
  function() {

    // init
  let cookiesBanner = document.querySelector( ".cookies-banner") 
  let cookiesBannerCloseButton = document.querySelector(".cookies-banner-button .button")
  let cookiesBannerDelay =2000

  if (cookiesBanner) {
  setTimeout(showBanner,cookiesBannerDelay );
  }

  // Events
  if (cookiesBannerCloseButton) {
    cookiesBannerCloseButton.addEventListener("click", cookiesBannerCloseButtonClicked)
  }
 
  // functions
  function cookiesBannerCloseButtonClicked(e) {
    
      e.preventDefault()
       hideBanner()
     
  }
  function showBanner() {
    cookiesBanner.classList.add("show")

  }
  function hideBanner() {
    cookiesBanner.classList.remove("show")
  }
  })
 
 