// App Configuration
const CONFIG = {
    APP_STORE_URL: 'https://apps.apple.com/tr/app/fermolog-brew-tracker/id6745624694',
    PLAY_STORE_URL: 'https://play.google.com/store/apps/details?id=com.eminbilgic.fermantation_logger',
    CONTACT_EMAIL: 'fermolog.help@outlook.com',
    REDDIT_URL: 'https://www.reddit.com'
};

// Age Gate Modal Management
class AgeGate {
    constructor() {
        this.modal = document.getElementById('age-gate-modal');
        this.confirmBtn = document.getElementById('age-confirm');
        this.leaveBtn = document.getElementById('age-leave');
        this.storageKey = 'fermologAgeOk';

        this.init();
    }

    init() {
        // Check if user has already confirmed age
        if (this.hasConfirmedAge()) {
            this.hideModal();
            return;
        }

        // Show modal on first visit
        this.showModal();
        this.bindEvents();
    }

    hasConfirmedAge() {
        return localStorage.getItem(this.storageKey) === '1';
    }

    showModal() {
        this.modal.classList.add('show');
        // Focus on confirm button for accessibility
        this.confirmBtn.focus();
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    hideModal() {
        this.modal.classList.remove('show');
        // Restore body scroll
        document.body.style.overflow = '';
    }

    confirmAge() {
        localStorage.setItem(this.storageKey, '1');
        this.hideModal();
    }

    leaveSite() {
        window.location.href = CONFIG.REDDIT_URL;
    }

    bindEvents() {
        this.confirmBtn.addEventListener('click', () => this.confirmAge());
        this.leaveBtn.addEventListener('click', () => this.leaveSite());

        // Handle keyboard navigation
        this.modal.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Don't allow ESC to close - explicit choice required
                e.preventDefault();
            }
        });

        // Trap focus within modal
        this.modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = this.modal.querySelectorAll('button');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}

// Device Detection and Store Redirection
class DeviceDetector {
    constructor() {
        this.autoStoreLink = document.getElementById('auto-store-link');
        this.init();
    }

    init() {
        if (this.autoStoreLink) {
            this.autoStoreLink.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleAutoStoreClick();
            });
        }
    }

    detectDevice() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'ios';
        }

        // Android detection
        if (/android/i.test(userAgent)) {
            return 'android';
        }

        // Desktop or other
        return 'desktop';
    }

    handleAutoStoreClick() {
        const device = this.detectDevice();

        switch (device) {
            case 'ios':
                window.location.href = CONFIG.APP_STORE_URL;
                break;
            case 'android':
                window.location.href = CONFIG.PLAY_STORE_URL;
                break;
            case 'desktop':
            default:
                // Do nothing on desktop - let user choose manually
                console.log('Desktop detected - no automatic redirection');
                break;
        }
    }
}

// Lazy Loading Enhancement
class LazyLoader {
    constructor() {
        this.init();
    }

    init() {
        // Check if Intersection Observer is supported
        if ('IntersectionObserver' in window) {
            this.setupIntersectionObserver();
        } else {
            // Fallback for older browsers
            this.loadAllImages();
        }
    }

    setupIntersectionObserver() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadImage(img);
                    observer.unobserve(img);
                }
            });
        });

        // Observe all images with loading="lazy"
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    loadImage(img) {
        if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }
    }

    loadAllImages() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => this.loadImage(img));
    }
}

// Performance Monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Monitor Core Web Vitals
        this.measureLCP();
        this.measureFID();
        this.measureCLS();
    }

    measureLCP() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
        }
    }

    measureFID() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            observer.observe({ entryTypes: ['first-input'] });
        }
    }

    measureCLS() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach(entry => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                console.log('CLS:', clsValue);
            });
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }
}

// Accessibility Enhancements
class AccessibilityEnhancer {
    constructor() {
        this.init();
    }

    init() {
        this.enhanceKeyboardNavigation();
        this.enhanceScreenReaderSupport();
    }

    enhanceKeyboardNavigation() {
        // Add skip links
        this.addSkipLinks();

        // Enhance focus management
        this.enhanceFocusManagement();
    }

    addSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 1000;
        `;

        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });

        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });

        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    enhanceFocusManagement() {
        // Ensure all interactive elements are focusable
        const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
        interactiveElements.forEach(element => {
            if (!element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '0') {
                element.setAttribute('tabindex', '0');
            }
        });
    }

    enhanceScreenReaderSupport() {
        // Add ARIA labels where needed
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            if (!button.getAttribute('aria-label')) {
                const text = button.textContent.trim();
                button.setAttribute('aria-label', text);
            }
        });
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new AgeGate();
    new DeviceDetector();
    new LazyLoader();
    new PerformanceMonitor();
    new AccessibilityEnhancer();

    // Add main content ID for skip links
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
});

// Error Handling
window.addEventListener('error', (event) => {
    console.error('JavaScript error:', event.error);
    // In production, you might want to send this to an error tracking service
});

// Unhandled Promise Rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // In production, you might want to send this to an error tracking service
});
