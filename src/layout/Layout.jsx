
import Navbar from './Navbar.jsx';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
export default Layout;