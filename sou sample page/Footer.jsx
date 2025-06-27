const Footer = () => {
    return (
        <div className="footer" style={{
            backgroundColor: "purple",
            justifyContent: "space-between",
            gap: 60,
            color: "white",
            padding: "20px",
            textAlign: "center",
            display: "flex",
            border: "2px solid black",
        }}>
            <div className="codeschool">
                <h2>Codeschool</h2>
                <h4>
                    Online learning community school for <br />
                    coder kids powered by <br />
                    CodersOut <br />
                </h4>
            </div>

            <div className="popular-links">
                <h2>Popular Links</h2>
                <h4>Home</h4>
                <h4>Teachers</h4>
                <h4>Holidays</h4>
                <h4>Contact Us</h4>
            </div>

            <div className="social">
                <h2>Social Profiles</h2>
                <h4><i className="fab fa-youtube"></i> YouTube</h4>
                <h4><i className="fab fa-facebook"></i> Facebook</h4>
                <h4><i className="fab fa-instagram"></i> Instagram</h4>
                <h4><i className="fab fa-linkedin"></i> LinkedIn</h4>
            </div>

            <div className="contact-us">
                <h2>Contact Us</h2>
                <h4>
                    <label>Name</label><br />
                    <input type="text" placeholder="Enter text" />
                </h4>
                <h4>
                    <label>Email</label><br />
                    <input type="email" placeholder="example@mail.com" />
                </h4>
                <h4>
                    <label>Message</label><br />
                    <textarea placeholder="Message"></textarea>
                </h4>
            </div>
        </div>
    );
};

export default Footer;
