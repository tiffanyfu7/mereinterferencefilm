function Header() {
  return (
    <header className="header">
      <img
        src="/logo.png"
        alt="Mere Interference Logo"
        className="logo"
        width="200px"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>mere</h2>
        <h2
          className="red-text"
          style={{ margin: "16px 0px 0px 10px", fontSize: "32px" }}
        >
          interference
        </h2>
      </div>
    </header>
  );
}

export default Header;