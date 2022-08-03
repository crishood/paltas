import Nav from "../Nav";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
      <footer>made by CrisHood</footer>
    </div>
  );
};

export default Layout;
