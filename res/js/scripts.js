
// Variables
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const offCanvasContainer = document.getElementById('offCanvasContainer');
const closeBtn = document.getElementById('closeBtn');
const navMenu = document.getElementById('navMenu');
const mobileNavContainer = document.getElementById('mobileNavContainer');
const projectsToggle = document.getElementById('projectsToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Referencias a los contenedores originales
const navContainer = navMenu.parentElement;
let isMobileMode = false;

// Función para mover el menú al modo mobile
function moveToMobile() {
    if (!isMobileMode) {
        navMenu.classList.add('mobile-mode');
        mobileNavContainer.appendChild(navMenu);
        isMobileMode = true;

        // Remover hover listeners en mobile y agregar click
        setupMobileDropdown();
    }
}

// Función para mover el menú al modo desktop
function moveToDesktop() {
    if (isMobileMode) {
        navMenu.classList.remove('mobile-mode');
        navContainer.appendChild(navMenu);
        dropdownMenu.classList.remove('active');
        isMobileMode = false;

        // Remover click listeners y restaurar hover
        removeMobileDropdown();
    }
}

// Configurar dropdown para mobile (click)
function setupMobileDropdown() {
    projectsToggle.addEventListener('click', handleMobileDropdownClick);
}

// Remover listeners de mobile
function removeMobileDropdown() {
    projectsToggle.removeEventListener('click', handleMobileDropdownClick);
    projectsToggle.querySelector('.dropdown-arrow').style.transform = '';
}

// Handler para el click del dropdown en mobile
function handleMobileDropdownClick(e) {
    e.preventDefault();
    const isActive = dropdownMenu.classList.contains('active');
    const arrow = projectsToggle.querySelector('.dropdown-arrow');

    if (isActive) {
        dropdownMenu.classList.remove('active');
        arrow.style.transform = '';
    } else {
        dropdownMenu.classList.add('active');
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Función para abrir el menú off-canvas
function openMenu() {
    moveToMobile();
    mobileMenuBtn.classList.add('active');
    menuOverlay.classList.add('active');
    offCanvasContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el menú off-canvas
function closeMenu() {
    mobileMenuBtn.classList.remove('active');
    menuOverlay.classList.remove('active');
    offCanvasContainer.classList.remove('active');
    document.body.style.overflow = '';

    // Delay para mover de vuelta después de la animación
    setTimeout(() => {
        if (window.innerWidth <= 768) {
            // Si aún estamos en mobile, mantener en mobile pero oculto
        } else {
            // Si cambiamos a desktop, mover de vuelta
            moveToDesktop();
        }
    }, 300);
}

// Manejar cambios de tamaño de ventana
function handleResize() {
    if (window.innerWidth > 768) {
        // Desktop mode
        if (offCanvasContainer.classList.contains('active')) {
            closeMenu();
        } else {
            moveToDesktop();
        }
    } else {
        // Mobile mode - solo mover si el off-canvas no está activo
        if (!offCanvasContainer.classList.contains('active')) {
            // El menú permanece en desktop hasta que se abra el off-canvas
        }
    }
}

// Event Listeners
mobileMenuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
window.addEventListener('resize', handleResize);

// Cerrar menú al hacer click en un enlace (mobile)
navMenu.addEventListener('click', function (e) {
    if (isMobileMode && e.target.classList.contains('nav-link') && !e.target.id) {
        closeMenu();
    }
});

// Inicialización
handleResize();

 class ResponsiveSlider {
            constructor(container) {
                this.container = container;
                this.slidesContainer = container.querySelector('#slidesContainer');
                this.slides = container.querySelectorAll('.slide');
                this.prevBtn = container.querySelector('#prevBtn');
                this.nextBtn = container.querySelector('#nextBtn');
                this.dotsContainer = container.querySelector('#dotsContainer');
                this.currentSlideSpan = container.querySelector('#currentSlide');
                this.totalSlidesSpan = container.querySelector('#totalSlides');
                
                this.currentIndex = 0;
                this.totalSlides = this.slides.length;
                this.isAnimating = false;
                
                // Touch/swipe properties
                this.touchStartX = 0;
                this.touchEndX = 0;
                this.isDragging = false;
                this.startTranslateX = 0;
                
                this.init();
            }

            init() {
                this.createDots();
                this.updateSlider();
                this.bindEvents();
                this.startAutoPlay();
            }

            createDots() {
                for (let i = 0; i < this.totalSlides; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'dot';
                    dot.addEventListener('click', () => this.goToSlide(i));
                    this.dotsContainer.appendChild(dot);
                }
            }

            bindEvents() {
                // Button navigation
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());

                // Touch events
                this.slidesContainer.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
                this.slidesContainer.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
                this.slidesContainer.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });

                // Mouse events for desktop dragging
                this.slidesContainer.addEventListener('mousedown', (e) => this.handleMouseDown(e));
                document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
                document.addEventListener('mouseup', (e) => this.handleMouseUp(e));

                // Pause autoplay on hover
                this.container.addEventListener('mouseenter', () => this.pauseAutoPlay());
                this.container.addEventListener('mouseleave', () => this.startAutoPlay());

                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') this.prevSlide();
                    if (e.key === 'ArrowRight') this.nextSlide();
                });

                // Handle window resize
                window.addEventListener('resize', () => this.updateSlider());
            }

            handleTouchStart(e) {
                this.touchStartX = e.touches[0].clientX;
                this.isDragging = true;
                this.startTranslateX = this.currentIndex * -100;
                this.slidesContainer.classList.add('dragging');
                this.pauseAutoPlay();
            }

            handleTouchMove(e) {
                if (!this.isDragging) return;
                
                e.preventDefault();
                const touchX = e.touches[0].clientX;
                const diffX = touchX - this.touchStartX;
                const translateX = this.startTranslateX + (diffX / this.slidesContainer.offsetWidth * 100);
                
                this.slidesContainer.style.transform = `translateX(${translateX}%)`;
            }

            handleTouchEnd(e) {
                if (!this.isDragging) return;
                
                this.touchEndX = e.changedTouches[0].clientX;
                this.isDragging = false;
                this.slidesContainer.classList.remove('dragging');
                
                const diffX = this.touchStartX - this.touchEndX;
                const threshold = 50;

                if (Math.abs(diffX) > threshold) {
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                } else {
                    this.updateSlider();
                }
                
                this.startAutoPlay();
            }

            handleMouseDown(e) {
                e.preventDefault();
                this.touchStartX = e.clientX;
                this.isDragging = true;
                this.startTranslateX = this.currentIndex * -100;
                this.slidesContainer.classList.add('dragging');
                this.pauseAutoPlay();
            }

            handleMouseMove(e) {
                if (!this.isDragging) return;
                
                const diffX = e.clientX - this.touchStartX;
                const translateX = this.startTranslateX + (diffX / this.slidesContainer.offsetWidth * 100);
                
                this.slidesContainer.style.transform = `translateX(${translateX}%)`;
            }

            handleMouseUp(e) {
                if (!this.isDragging) return;
                
                const diffX = this.touchStartX - e.clientX;
                const threshold = 50;
                
                this.isDragging = false;
                this.slidesContainer.classList.remove('dragging');

                if (Math.abs(diffX) > threshold) {
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                } else {
                    this.updateSlider();
                }
                
                this.startAutoPlay();
            }

            goToSlide(index) {
                if (this.isAnimating || index === this.currentIndex) return;
                
                this.currentIndex = index;
                this.updateSlider();
            }

            nextSlide() {
                if (this.isAnimating) return;
                
                this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
                this.updateSlider();
            }

            prevSlide() {
                if (this.isAnimating) return;
                
                this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
                this.updateSlider();
            }

            updateSlider() {
                this.isAnimating = true;
                
                const translateX = -this.currentIndex * 100;
                this.slidesContainer.style.transform = `translateX(${translateX}%)`;

                // Update dots
                const dots = this.dotsContainer.querySelectorAll('.dot');
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === this.currentIndex);
                });

                // Update counter
                this.currentSlideSpan.textContent = this.currentIndex + 1;
                this.totalSlidesSpan.textContent = this.totalSlides;

                // Reset animation flag
                setTimeout(() => {
                    this.isAnimating = false;
                }, 400);
            }

            startAutoPlay() {
                this.pauseAutoPlay();
                this.autoPlayInterval = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            }

            pauseAutoPlay() {
                if (this.autoPlayInterval) {
                    clearInterval(this.autoPlayInterval);
                }
            }
        }

        // Initialize slider when DOM is ready
        document.addEventListener('DOMContentLoaded', () => {
            const sliderContainer = document.querySelector('.slider-container');
            new ResponsiveSlider(sliderContainer);
        });
