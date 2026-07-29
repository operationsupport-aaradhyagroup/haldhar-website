/**
 * Video Slider Component
 * Specific to homepage YouTube testimonials
 */

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('videoSlider');
    if (slider) {
        initVideoSlider(slider);
    }
});

function initVideoSlider(slider) {
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let autoSlideInterval;
    let isPaused = false;

    const getScrollAmount = () => {
        const card = slider.querySelector('.yt-short');
        if (!card) return 324;
        return card.offsetWidth + 24; // card width + gap
    };

    const startAutoSlide = () => {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            if (!isPaused) {
                const scrollAmount = getScrollAmount();
                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000);
    };

    const stopAutoSlide = () => clearInterval(autoSlideInterval);

    const handleUserInteraction = () => {
        isPaused = true;
        stopAutoSlide();
        // Resume auto-slide after 10 seconds of inactivity
        setTimeout(() => {
            isPaused = false;
            startAutoSlide();
        }, 10000);
    };

    slider.addEventListener('mouseenter', () => isPaused = true);
    slider.addEventListener('mouseleave', () => {
        if (autoSlideInterval) isPaused = false;
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
            handleUserInteraction();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
            handleUserInteraction();
        });
    }

    slider.addEventListener('mousedown', handleUserInteraction);
    slider.addEventListener('touchstart', handleUserInteraction);
    
    startAutoSlide();
}
