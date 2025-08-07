import React from 'react';

const Footer = () => {
    return (
        <footer style={{ background: '#222', color: '#fff', padding: '24px 0', textAlign: 'center' }}>
            <div style={{ marginBottom: '12px' }}>
                <strong>FoodExpress</strong> &copy; {new Date().getFullYear()} &mdash; Fast, Fresh, Delivered!
            </div>
            <div style={{ fontSize: '14px' }}>
                <a href="/about" style={{ color: '#fff', margin: '0 10px', textDecoration: 'underline' }}>About Us</a>
                <a href="/contact" style={{ color: '#fff', margin: '0 10px', textDecoration: 'underline' }}>Contact</a>
                <a href="/privacy" style={{ color: '#fff', margin: '0 10px', textDecoration: 'underline' }}>Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
