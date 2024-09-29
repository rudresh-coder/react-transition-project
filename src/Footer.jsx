import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h4>Transitions & Effects</h4>
                <ul>
                    <li><strong>Animation :</strong> fadeIn - Smooth fade-in effect for the text.</li>
                    <li><strong>Transition :</strong> whiteToBlack - Background transition from white to black for few seconds.</li>
                    <li><strong>Transition :</strong> blackToWhite - Background transition from black to white for few seconds.</li>
                    <li><strong>Card Hover :</strong> Cards move upwards slightly on hover.</li>
                    <li><strong>Button Hover :</strong> Buttons scale up and reduce opacity on hover.</li>
                    <li><strong>Images :</strong> Duck and bridge images inside cards, styled with a hover effect.</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;