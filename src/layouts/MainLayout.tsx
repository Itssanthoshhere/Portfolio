import { ReactNode, useState } from 'react';
import { Navbar, Footer, CustomCursor, ScrollProgress, LoadingScreen } from '@/components';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="min-h-screen flex flex-col selection:bg-primary/30 selection:text-white">
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
