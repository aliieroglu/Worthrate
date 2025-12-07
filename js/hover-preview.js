document.addEventListener('DOMContentLoaded', () => {
    const covers = document.querySelectorAll('.card__cover');
    const VIDEO_SRC = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4";

    covers.forEach(cover => {
        // Prevent double injection if run multiple times or if script already ran
        if (cover.querySelector('video')) return;

        // 1. Inject Video Element
        const video = document.createElement('video');
        video.src = VIDEO_SRC;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        // Preload none to save bandwidth until hover
        video.preload = 'none';
        cover.appendChild(video);

        // 2. Inject Info Overlay (Grab data from parent card if possible)
        let titleText = "Preview";
        let ratingText = "";
        let categoryText = "";

        // Attempt to find metadata relative to the cover
        // Traverse up to find the card wrapper
        let cardWrapper = cover.closest('.card');
        let cardContent = null;
        if (cardWrapper) {
            cardContent = cardWrapper.querySelector('.card__content');
        }

        if (cardContent) {
            const titleEl = cardContent.querySelector('.card__title a');
            if (titleEl) titleText = titleEl.innerText;

            const rateEl = cardContent.querySelector('.card__rate');
            if (rateEl) ratingText = rateEl.innerText;

            const catEl = cardContent.querySelector('.card__category');
            if (catEl) categoryText = catEl.innerText;
        }

        const infoOverlay = document.createElement('div');
        infoOverlay.className = 'card-hover-info';
        infoOverlay.innerHTML = `
            <h4>${titleText}</h4>
            <div class="meta">
                <span>${ratingText}</span>
                <span>${categoryText.replace(/\n/g, ', ')}</span>
            </div>
        `;
        cover.appendChild(infoOverlay);

        // 3. Hover Logic
        let hoverTimeout;

        cover.addEventListener('mouseenter', () => {
            hoverTimeout = setTimeout(() => {
                cover.classList.add('hover-expanded');
                video.play().catch(e => console.log("Auto-play prevented:", e));
            }, 400); // 400ms delay before expanding
        });

        cover.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            cover.classList.remove('hover-expanded');
            video.pause();
            video.currentTime = 0; // Reset video
        });
    });
});
