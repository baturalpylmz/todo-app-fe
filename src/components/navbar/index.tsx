import { Link } from 'react-router-dom';
import ThemeDropdownMenu from '../theme-dropdown-menu';

export function Navbar() {
    return (
        <nav className="bg-background relative flex h-16 w-full items-center justify-center border-b px-4">
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-xl font-semibold">
                Todo App
            </Link>

            <div className="ml-auto">
                <ThemeDropdownMenu />
            </div>
        </nav>
    );
}
