document.addEventListener('DOMContentLoaded', () => {
	// Set current year in footer
	const currentYearSpan = document.getElementById('currentYear');
	if (currentYearSpan) {
		currentYearSpan.textContent = new Date().getFullYear();
	}

	// Intersection Observer for animations
	const animatedElements = document.querySelectorAll('.animate-on-scroll');

	if ("IntersectionObserver" in window) {
		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					// Optional: Stop observing once the element is visible
					// observer.unobserve(entry.target);
				}
				// Optional: Remove class if you want animation to repeat on scroll up
				// else {
				//    entry.target.classList.remove('is-visible');
				// }
			});
		}, {
			threshold: 0.1 // Trigger when 10% of the element is visible
		});

		animatedElements.forEach(element => {
			observer.observe(element);
		});
	} else {
		// Fallback for older browsers: Make all elements visible immediately
		animatedElements.forEach(element => {
			element.classList.add('is-visible');
		});
	}
});