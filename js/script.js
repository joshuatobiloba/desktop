// Detect if the device is mobile or desktop
if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Redirect mobile users to the mobile version of the website
    window.location.href = "http://yourwebsite.com/mobile-version";
} else {
    // Redirect desktop users to the desktop version of the website
    window.location.href = "http://yourwebsite.com/desktop-version";
}