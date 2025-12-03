import { Navbar } from '@/components/navbar';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div className="bg-background text-foreground min-h-screen">
            <Navbar />
            <main className="mx-auto max-w-6xl p-4">
                <Outlet />
            </main>
        </div>
    );
}
