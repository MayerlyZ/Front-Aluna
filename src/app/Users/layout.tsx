'use client';

import UserSidebar from '@/components/UserSidebar';
import { ReactNode } from 'react';

export default function UsersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Contenedor flex para Sidebar y Main Content */}
      <div className="flex">
        {/* Sidebar - Always visible on desktop, toggle on mobile */}
        <div className="fixed left-0 top-0 z-40">
          <UserSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-32">
          <div className="p-6 lg:p-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
