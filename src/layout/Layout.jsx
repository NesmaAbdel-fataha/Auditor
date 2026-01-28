// import Navbar from "../components/Navbar";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <Navbar />

//       <main >
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Layout;

import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
export default Layout;