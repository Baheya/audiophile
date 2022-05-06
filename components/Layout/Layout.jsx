import styled from 'styled-components';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

export function Layout({ children }) {
  return (
    <PageLayout>
      <Header />
      {children}
      <Footer />
    </PageLayout>
  );
}

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 1fr auto;

  & > header {
    grid-row: 1 / 2;
  }

  & > main {
    grid-row: 2 / 3;
  }

  & > footer {
    grid-row: 3 / 4;
  }
`;
