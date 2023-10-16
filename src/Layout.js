import Header from "./Header";
import Outlet from "./Outlet";

export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}