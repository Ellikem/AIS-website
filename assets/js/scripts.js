document.addEventListener("DOMContentLoaded", () => {

  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (!loader) {
      return;
    }

    setTimeout(() => {
      loader.classList.add("hidden");

      setTimeout(() => {
        loader.style.display = "none";

        // Show modal
        const modalEl = document.getElementById("myModal");

        if (modalEl) {
          const modal = new bootstrap.Modal(modalEl);
          modal.show();
        }
      }, 500); // Match your CSS transition duration
    }, 3000); // Splash screen visible for 5 seconds
  });
  
  //#blue
  // Sticky Navbar styles
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbarDesk");
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  //#
  // navbar

  //#red carosuel popup
  const modalEl = document.getElementById("myModal");

  if (modalEl) {
    modalEl.addEventListener("shown.bs.modal", () => {
      const carouselEl = document.getElementById("heroCarousel");

      if (!carouselEl) {
        return;
      }

      const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);

      carousel.cycle();
    });
  }

  //#


  //#pink
  const landingList = document.getElementById("scrollList");

  if (landingList) {
    // Store original items
    const originalItems = landingList.innerHTML;

    // Duplicate once for infinite effect
    landingList.innerHTML += originalItems;

    let items = Array.from(landingList.children);

    const visibleIndex = 3;
    let currentIndex = 0;

    // Wait for layout to calculate heights
    requestAnimationFrame(() => {
      const itemHeight =
        items[0].offsetHeight +
        parseFloat(getComputedStyle(items[0]).marginBottom);

      function cycleItems() {
        items.forEach((item) => item.classList.remove("active"));

        const activeIndex = currentIndex + visibleIndex;

        items[activeIndex % items.length].classList.add("active");

        landingList.style.transform = `translateY(-${
          currentIndex * itemHeight
        }px)`;

        currentIndex++;

        // Reset when we've reached the duplicated section
        if (currentIndex >= items.length / 2) {
          setTimeout(() => {
            landingList.style.transition = "none";
            landingList.style.transform = "translateY(0)";
            currentIndex = 0;

            // Force reflow
            landingList.offsetHeight;

            landingList.style.transition = "transform 1s ease-in-out";
          }, 1000);
        }
      }

      // Initial active item
      items[visibleIndex].classList.add("active");

      setInterval(cycleItems, 3000);
    });
  }

  //#

  // COUNTER SECTION
  //#green

  let counters = document.querySelectorAll(".counter-number");

  let observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let item = entry.target;
          let startnumber = 0;
          let endnumber = parseInt(item.dataset.number);

          let stop = setInterval(() => {
            startnumber++;
            item.innerHTML = startnumber + "+";

            if (startnumber === endnumber) {
              clearInterval(stop);
            }
          }, 5);

          // stop observing after it runs once
          obs.unobserve(item);
        }
      });
    },
    {
      threshold: 0.5, // triggers when 50% of element is visible
    },
  );

  // attach observer to each counter
  counters.forEach((counter) => {
    observer.observe(counter);
  });

  //#

  // //Moblile Navigation
  // //#red
  // document.querySelectorAll(".mobOpen").forEach((item) => {
  //   item.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     navbarMob.classList.toggle("open");
  //   });
  // });
  // //#

  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
  document.querySelectorAll(".nav-link-item").forEach((link) => {
    link.addEventListener("click", () => {
      if (!sidebar.classList.contains("open")) {
        sidebar.classList.add("open");
      }
    });
  });
  document.querySelectorAll(".dropdown-toggle-custom").forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
      e.preventDefault();
      if (!sidebar.classList.contains("open")) {
        sidebar.classList.add("open");
      }
      dropdown.closest(".dropdown-item").classList.toggle("active");
    });
  });
});

const track = document.querySelector(".testimonial-container");
const cards = document.querySelectorAll(".t-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (track && cards.length > 0 && nextBtn && prevBtn) {
  let index = 0;

  const cardWidth = cards[0].offsetWidth + 20;

  const updateSlider = () => {
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  };

  nextBtn.addEventListener("click", () => {
    if (index < cards.length - 1) {
      index++;
    } else {
      index = 0; // loop back to start
    }

    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = cards.length - 1; // loop to end
    }

    updateSlider();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    if (index < cards.length - 1) {
      index++;
    } else {
      index = 0;
    }

    updateSlider();
  }, 5000);
}
// carousel

//   // hero scroll

//   // faq
//   const buttons = document.querySelectorAll("#pagination .page-link");
//   const items = document.querySelectorAll(".page");
//   const pageItems = document.querySelectorAll("#pagination .page-item");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const page = button.dataset.page;

//       /* hide all */
//       items.forEach((item) => {
//         item.classList.add("d-none");
//       });

//       /* remove active */
//       pageItems.forEach((item) => {
//         item.classList.remove("active");
//       });

//       /* show current */
//       document
//         .querySelector(`.page[data-page="${page}"]`)
//         .classList.remove("d-none");

//       /* activate current button */
//       button.parentElement.classList.add("active");
//     });
//   });
// });

// //#orange
// document.querySelectorAll(".no-click").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//   });
// });
// //#

// //#yellow
// window.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     document.getElementById("modsec").showModal();
//   }, 9000); // 1 second delay
// });
// //#

// //#pink
// let faq = document.querySelectorAll(".faq-item");

// faq.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });
// //#

// // payment options
// const options = document.querySelectorAll(".payment-option");

// options.forEach((option) => {
//   const radio = option.querySelector('input[type="radio"]');

//   radio.addEventListener("change", () => {
//     // remove active from all
//     options.forEach((item) => {
//       item.classList.remove("active");
//     });

//     // add active to selected
//     option.classList.add("active");
//   });
// });

// // quick view modals counterUp
// let quantity = 1;

// const quantityText = document.getElementById("quantity-change");

// function increase() {
//   quantity++;

//   updateQuantity();
// }

// function decrease() {
//   // prevent going below 1
//   if (quantity > 1) {
//     quantity--;
//   }

//   updateQuantity();
// }

// function updateQuantity() {
//   // adds leading zero
//   quantityText.innerText = quantity.toString().padStart(2, "0");
// }
