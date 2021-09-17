var categorySwiper = undefined,
    flashSalesSwiper = undefined,
    homePageMallSwiper = undefined,
    bannerSwiper = undefined;
var arrayShopeeSkinnySrcMobile = ["https://cf.shopee.vn/file/2f0b2deb1945c172f1b6bd5fa51af6d4_xxhdpi", "https://cf.shopee.vn/file/8eb391eb7497f362a772f2558ac18439_xxhdpi",
    "https://cf.shopee.vn/file/abcd0044cefdcb72162fe0eaeace40a1_xxhdpi"
]
var arrayShopeeSkinnySrcPc = ["https://cf.shopee.vn/file/e7069af6fa725bc695295c2159fe07df",
    "https://cf.shopee.vn/file/0e11bad91625f9adb8096ddfeb4a78dc",
    "https://cf.shopee.vn/file/bab8001a70db0833b3762b0658b59966"
]

function displayWindowSize() {
    var bannerCarouselSwiper = undefined,
        homePageMallCarouselSwiper = undefined;
    // Get width and height of the window excluding scrollbars
    var w = document.documentElement.clientWidth;

    bannerCarouselSwiper = new Swiper(".banner__carousel", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        mousewheel: true,
        keyboard: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
    homePageMallCarouselSwiper = new Swiper(".homepage-mall__heading-content-carousel-wrapper", {
        spaceBetween: 5,
        loop: true,
        mousewheel: true,
        keyboard: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto'
    });
    new Swiper(".mySwiper", {
        spaceBetween: 5,
        mousewheel: true,
        keyboard: true,
        slidesPerView: 'auto'
    });
    // Display result inside a div element
    if (w <= 1023) {
        var categoryContent = document.querySelector(".category__content");
        if (!categoryContent.classList.contains(".swiper-container") && categorySwiper === undefined) {
            categoryContent.classList.add("swiper-container");
            document.querySelector(".category__content-list").classList.add("swiper-wrapper");
            var listCategories = document.querySelectorAll(".category__content-item");
            for (var i = 0; i < listCategories.length; i++) {
                listCategories[i].classList.add("swiper-slide");
            }
            categorySwiper = new Swiper(".category__content", {
                direction: 'horizontal',
                slidesPerView: 4,
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                spaceBetween: 0,
            });
        }

        var flashSalesContent = document.querySelector(".flash-sales__content");
        if (!flashSalesContent.classList.contains(".swiper-container") && flashSalesSwiper === undefined) {
            flashSalesContent.classList.add("swiper-container");
            document.querySelector(".flash-sales__content-list").classList.add("swiper-wrapper");
            var listFlashSales = document.querySelectorAll(".flash-sales__content-item");
            for (var i = 0; i < listFlashSales.length; i++) {
                listFlashSales[i].classList.add("swiper-slide");
            }
            flashSalesSwiper = new Swiper(".flash-sales__content", {
                spaceBetween: 5,
                mousewheel: true,
                keyboard: true,
                slidesPerView: 'auto'
            });
        }

        var homePage = document.querySelector(".homepage-mall__heading-content-right");
        if (!homePage.classList.contains(".swiper-container") && homePageMallSwiper === undefined) {
            homePage.classList.add("swiper-container");
            document.querySelector(".homepage-mall__heading-content-product-list").classList.add("swiper-wrapper");
            var listHomePages = document.querySelectorAll(".homepage-mall__heading-content-product-item");
            for (var i = 0; i < listHomePages.length; i++) {
                listHomePages[i].classList.add("swiper-slide");
            }
            homePageMallSwiper = new Swiper(".homepage-mall__heading-content-right", {
                spaceBetween: 5,
                mousewheel: true,
                keyboard: true,
                slidesPerView: 'auto'
            });
        }
        var bannerContent = document.querySelector(".section__banner-category");
        if (!bannerContent.classList.contains(".swiper-container") && bannerSwiper === undefined) {
            bannerContent.classList.add("swiper-container");
            document.querySelector(".section__banner-category-list").classList.add("swiper-wrapper");
            var listFlashSales = document.querySelectorAll(".section__banner-category-item");
            for (var i = 0; i < listFlashSales.length; i++) {
                listFlashSales[i].classList.add("swiper-slide");
            }
            bannerSwiper = new Swiper(".section__banner-category", {
                slidesPerView: 'auto', // or 'auto'
                slidesPerColumn: 2,
                spaceBetween: 5,
            });
            // Change Src Background Shopee Skinny
            var listShoppeSkinny = document.querySelectorAll(".shopee-skinny-banner__container-link .shoppe-skinny-banner__container-img")
            for (var i = 0; i < listShoppeSkinny.length; i++) {
                listShoppeSkinny[i].style.backgroundImage = `url(${arrayShopeeSkinnySrcMobile[i]})`;
            }
            isCheckChangeSrcMobile = true;
            isCheckChangeSrcPc = false;
        }
    } else {
        if (categorySwiper != undefined) {
            categorySwiper.destroy();
            categorySwiper = undefined
        }
        if (flashSalesSwiper != undefined) {
            flashSalesSwiper.destroy();
            flashSalesSwiper = undefined
        }
        if (homePageMallSwiper != undefined) {
            homePageMallSwiper.destroy();
            homePageMallSwiper = undefined
        }
        if (bannerSwiper != undefined) {
            bannerSwiper.destroy();
            bannerSwiper = undefined
        }
        var categoryContent = document.querySelector(".category__content");
        if (categoryContent.classList.contains("swiper-container")) {
            categoryContent.classList.remove("swiper-container");
            categoryContent.classList.remove("swiper-container-initialized");
            categoryContent.classList.remove("swiper-container-horizontal");
            categoryContent.style = '';
            document.querySelector(".category__content-list").classList.remove("swiper-wrapper");
            document.querySelector(".category__content-list").style = '';
            var listCategories = document.querySelectorAll(".category__content-item");
            for (var i = 0; i < listCategories.length; i++) {
                listCategories[i].classList.remove("swiper-slide");
                listCategories[i].style = '';
            }
        }

        var flashSalesContent = document.querySelector(".flash-sales__content");

        flashSalesContent.style = '';
        if (flashSalesContent.classList.contains("swiper-container")) {
            flashSalesContent.classList.remove("swiper-container");
            flashSalesContent.classList.remove("swiper-container-initialized");
            flashSalesContent.classList.remove("swiper-container-horizontal");
            document.querySelector(".flash-sales__content-list").classList.remove("swiper-wrapper");
            document.querySelector(".flash-sales__content-list").style = ''
            var listFlashSales = document.querySelectorAll(".flash-sales__content-item");
            for (var i = 0; i < listFlashSales.length; i++) {
                listFlashSales[i].classList.remove("swiper-slide");
                listFlashSales[i].style = ''
            }
        }

        var bannerContent = document.querySelector(".section__banner-category");

        bannerContent.style = '';
        if (bannerContent.classList.contains("swiper-container")) {
            bannerContent.classList.remove("swiper-container");
            bannerContent.classList.remove("swiper-container-initialized");
            bannerContent.classList.remove("swiper-container-horizontal");
            document.querySelector(".section__banner-category-list").classList.remove("swiper-wrapper");
            document.querySelector(".section__banner-category-list").style = ''
            var listBannerContent = document.querySelectorAll(".section__banner-category-item");
            for (var i = 0; i < listBannerContent.length; i++) {
                listBannerContent[i].classList.remove("swiper-slide");
                listBannerContent[i].style = ''
            }
            //Change Src Shopee Skinny
            var listShoppeSkinny = document.querySelectorAll(".shopee-skinny-banner__container-link .shoppe-skinny-banner__container-img")
            if (!isCheckChangeSrcPc) {
                for (var i = 0; i < listShoppeSkinny.length; i++) {
                    listShoppeSkinny[i].style.backgroundImage = `url(${arrayShopeeSkinnySrcPc[i]})`;
                }
                isCheckChangeSrcPc = true;
                isCheckChangeSrcMobile = false;
            }
        }

        var homePage = document.querySelector(".homepage-mall__heading-content-right");

        homePage.style = '';
        if (homePage.classList.contains("swiper-container")) {
            homePage.classList.remove("swiper-container");
            homePage.classList.remove("swiper-container-initialized");
            homePage.classList.remove("swiper-container-horizontal");
            document.querySelector(".homepage-mall__heading-content-product-list").classList.remove("swiper-wrapper");
            document.querySelector(".homepage-mall__heading-content-product-list").style = ''
            var homePageList = document.querySelectorAll(".homepage-mall__heading-content-product-item");
            for (var i = 0; i < listCategories.length; i++) {
                homePageList[i].classList.remove("swiper-slide");
                homePageList[i].style = ''
            }
        }

    }


}
window.addEventListener("resize", displayWindowSize);