// intialize aos animation
AOS.init();

// fixed header
  window.addEventListener('scroll', function() {
        var header1 = document.getElementById('fixed-header-1');
        var header2 = document.getElementById('fixed-header-2');
        var scrollPosition = window.scrollY;

	  if (header1) {
		    if (scrollPosition >= 200) {
            header1.classList.add('fixed-header-1');
            header.classList.remove('relative');
        } else {
            header1.classList.remove('fixed-header-1');
            header1.classList.add('relative');
        }
	   }
	  if (header2) {
			if (scrollPosition >= 200) {
            header2.classList.add('fixed-header-2');
            header2.classList.remove('relative');
        } else {
            header2.classList.remove('fixed-header-2');
            header2.classList.add('relative');
        }
		}
    });

// mobile mega menu

var mobilemegamenulink = document.getElementById("mobile-megamenu-link");
var mobilemegamenuwrapper = document.getElementById("mobile-megamenu-wrapper");

var mobilemegamenulinkicon = document.getElementById(
	"mobile-megamenu-link-icon"
);

if (mobilemegamenulink) {
	mobilemegamenulink.addEventListener("click", function () {
		mobilemegamenuwrapper.classList.toggle("active");
		mobilemegamenulinkicon.classList.toggle("bx-chevron-up");
	});
}

// mobile mega menu
document.addEventListener("DOMContentLoaded", () => {
	if (window.innerWidth < 1280) {
		const menuItems = document.querySelectorAll(".menu-item");

		menuItems.forEach((item) => {
			item.addEventListener("click", () => {
				// Check if the clicked menu item already has the "active" class
				const isActive = item.classList.contains("active");

				// Remove "active" class from all menu items
				menuItems.forEach((menuItem) => {
					menuItem.classList.remove("active");
				});

				// Remove "active" class from all content elements
				const contents = document.querySelectorAll(".content");
				contents.forEach((content) => {
					content.classList.remove("active");
				});

				const arrows = document.querySelectorAll(".arrow");
				arrows.forEach((content) => {
					content.classList.remove("bx-chevron-down");
					content.classList.add("bx-chevron-right");
				});

				// If the clicked menu item did not have the "active" class, add it
				if (!isActive) {
					item.classList.add("active");

					// Add "active" class to corresponding content
					const dataContentValue = item.getAttribute("data-content");
					const content = document.getElementById(dataContentValue);
					if (content) {
						content.classList.add("active");
						console.log(content);
					}

					const arrowParent = item.getElementsByClassName("arrow")[0];
					if (arrowParent) {
						console.log("found");
						arrowParent.classList.add("bx-chevron-down");
						arrowParent.classList.remove("bx-chevron-right");
					}
				}
			});
		});

		const openmenu = document.getElementById("open-menu");
		const closebtn = document.getElementById("close-btn");
		const sidebarmenuwrapper = document.getElementById("sidebar-menu-wrapper");

		openmenu.addEventListener("click", function () {
			sidebarmenuwrapper.classList.add("block");
			sidebarmenuwrapper.classList.remove("hidden");
		});
		closebtn.addEventListener("click", function () {
			sidebarmenuwrapper.classList.add("hidden");
			sidebarmenuwrapper.classList.remove("add");
		});
	}
});

// desktopmenu
document.addEventListener("DOMContentLoaded", function () {
	if (window.innerWidth > 1280) {
		const menuItems = document.querySelectorAll(".menu-item");
		menuItems.forEach((item) => {
			item.addEventListener("mouseenter", function () {
				const contentId = this.getAttribute("data-content");
				const content = document.getElementById(contentId);
				// Hide all content
				document.querySelectorAll(".content").forEach((c) => {
					c.style.display = "none";
				});
				// Show content associated with hovered menu item
				content.style.display = "block";
			});
		});
	}
});

// feature tab
document.getElementById("tab1").addEventListener("click", function () {
	showTabContent("tab-content-1");
	setActiveTab("tab1");
});
document.getElementById("tab2").addEventListener("click", function () {
	showTabContent("tab-content-2");
	setActiveTab("tab2");
});
document.getElementById("tab3").addEventListener("click", function () {
	showTabContent("tab-content-3");
	setActiveTab("tab3");
});
document.getElementById("tab4").addEventListener("click", function () {
	showTabContent("tab-content-4");
	setActiveTab("tab4");
});

function showTabContent(tabId) {
	// Hide all tab contents
	var tabContents = document.querySelectorAll('[id^="tab-content-"]');
	tabContents.forEach(function (tabContent) {
		tabContent.classList.add("hidden");
	});

	// Show selected tab content
	document.getElementById(tabId).classList.remove("hidden");
}

function setActiveTab(tabId) {
	// Remove active classes from all tabs
	var tabs = document.querySelectorAll('button[id^="tab"]');
	tabs.forEach(function (tab) {
		tab.classList.remove("active");
		tab.classList.add("text-gray-800");
	});

	// Add active classes to the selected tab
	document
		.getElementById(tabId)
		.classList.add("active");
	document.getElementById(tabId).classList.remove("text-gray-800");
}

// owl carowsel
$(document).ready(function () {
	$(".carousel-top-deal-1").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		// autoplay: true,
		// autoplayTimeout: 3000,
		// autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});

	var owl11 = $(".carousel-top-deal-1");
	owl11.owlCarousel();
	// Go to the next item
	$(".topdeal1NextBtn").click(function () {
		owl11.trigger("next.owl.carousel");
	});
	// Go to the previous item
	$(".topdeal1PrevBtn").click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl11.trigger("prev.owl.carousel", [300]);
	});
});
