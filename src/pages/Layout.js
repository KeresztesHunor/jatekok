import { Outlet, Link } from "react-router-dom";

function Layout()
{
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Játékok</Link>
          </li>
          <li>
            <Link to="/tictactoe">TicTacToe</Link>
          </li>
          <li>
            <Link to="/lightsout">Lights out</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;