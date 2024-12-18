const Footer = () => {
    return (
        <footer
            className="max-w-7xl mx-auto c-space pt-7 pb-7 flex justify-between items-center flex-wrap gap-5">
            <p className="text-white-500">© 2024 Adithyan Sathyanarayanan. All rights reserved.</p>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/Adithyan2802" className="social-icon" target="_blank">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/adithyansathya/" className="social-icon" target="_blank">
                        <img src="/assets/linkedin.svg" alt="Linkedin" className="w-1/2 h-1/2"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.instagram.com/__._adhi_.__/" className="social-icon" target="_blank">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;