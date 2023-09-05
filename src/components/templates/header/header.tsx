import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Header = () => {
  return (
    <header className="py-5">
      <nav>
        <Container className="flex items-center justify-between">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between p-4">
              <Link href="/" className="flex items-center">
                <span className="dark:text-white self-center whitespace-nowrap text-2xl font-semibold">
                  LOGO
                </span>
              </Link>
            </div>
          </nav>
        </Container>
      </nav>
    </header>
  );
};
