const Navbar = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#e5e7eb", // bg-gray-200
          borderColor: "#e5e7eb", // border-gray-200
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)", // shadow
          padding: "0px",
        }}
      >
        {/* Left Children */}
        <div style={{ marginTop: "16px", marginLeft: "16px" }}>
          {children}
        </div>
<h2 style={{marginLeft:"10px"}}>Prince Maurya</h2>
      </nav>
    </div>
  );
};

export default Navbar;
