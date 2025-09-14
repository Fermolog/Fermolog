# Fermolog Landing Page

A Reddit-compliant, mobile-first landing page for the Fermolog fermentation tracking app.

## Features

- ✅ Reddit advertising policy compliant
- ✅ Mobile-first responsive design
- ✅ Age gate confirmation modal
- ✅ Device-aware store redirection
- ✅ Privacy-focused (no tracking)
- ✅ Accessibility compliant
- ✅ Fast loading with lazy loading
- ✅ SEO optimized

## File Structure

```
/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of service page
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── app.js          # JavaScript functionality
│   └── img/                # Image assets (placeholders created)
│       ├── hero.webp
│       ├── og-image.jpg
│       ├── s1.webp
│       ├── s2.webp
│       ├── s3.webp
│       └── favicon.ico
└── README.md
```

## Setup Instructions

1. **Replace placeholder URLs** in the following files:
   - `index.html`: Replace `{APP_STORE_URL}` and `{PLAY_STORE_URL}`
   - `privacy.html` and `terms.html`: Replace `{CONTACT_EMAIL}`

2. **Add your images** to the `assets/img/` folder:
   - `hero.webp`: Main hero image (mobile app mockup)
   - `og-image.jpg`: Open Graph image for social sharing
   - `s1.webp`, `s2.webp`, `s3.webp`: Feature screenshots
   - `favicon.ico`: Website favicon

3. **Update canonical URLs** in all HTML files to match your GitHub Pages URL

4. **Deploy to GitHub Pages**:
   - Push to your GitHub repository
   - Enable GitHub Pages in repository settings
   - Your site will be available at `https://yourusername.github.io/fermolog.github.io/`

## Key Features

### Age Gate Modal
- Shows on first visit only
- Requires explicit user confirmation
- Stores consent in localStorage
- Accessible with keyboard navigation

### Device Detection
- Automatically detects iOS/Android devices
- "Open in your store automatically" link redirects appropriately
- Desktop users see manual download buttons

### Privacy Compliance
- No personal data collection
- No third-party tracking
- Clear privacy policy
- Local data storage only

### Performance
- Mobile-first responsive design
- Lazy loading for images
- Minimal JavaScript
- Fast loading times

## Testing

1. Open `test.html` in a browser to test basic functionality
2. Test on mobile devices for responsive design
3. Verify age gate modal appears on first visit
4. Test device detection with different user agents
5. Check accessibility with screen readers

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Compliance Notes

- ✅ Reddit advertising policies
- ✅ GDPR privacy requirements
- ✅ WCAG 2.1 accessibility standards
- ✅ Mobile-first design principles
- ✅ No deceptive data collection

## Customization

The landing page is designed to be easily customizable:

- Colors and fonts in `assets/css/styles.css`
- Content and copy in HTML files
- JavaScript functionality in `assets/js/app.js`
- All placeholder URLs are clearly marked with `{}` brackets

## Support

For questions or issues, contact: fermolog.help@outlook.com