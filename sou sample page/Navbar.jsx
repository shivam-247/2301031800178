const Navbar = () => {
  return (
    <>
      <nav
        className="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: "white",
          height: 60,
          color: 'white',
          border:  '2px solid black',
        }}
      >
        
        <div className="one">
          <img
            src="image.png"
            alt="logo"
            className="logo"
            style={{ width: 200, height: 50  }}
          />
        </div>

        
        <div className="two">
          <ul
            className="nav-links"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: 20,
              margin: 0,
              padding: 0,
            
            }}
          >
            <li className="nav-item">
              <a href="/" style={{ color: "black", textDecoration: 'none' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" style={{ color: "black", textDecoration: 'none' }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/contact"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  backgroundColor: 'red',
                  padding: '8px 16px',
                  borderRadius: '5px',
                  fontWeight: 'bold'
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
