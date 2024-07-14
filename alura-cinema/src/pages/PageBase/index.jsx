import { Outlet } from 'react-router-dom'
import Container from 'components/Container'
import Footer from 'components/Footer'
import Header from 'components/Header'
import FavoritesProvider from 'context/Favorites'

const PageBase = () => {
  return (
    <main>
        <Header />
        <FavoritesProvider>
            <Container>
                <Outlet />
            </Container>
        </FavoritesProvider>
        <Footer />
    </main>
  )
}

export default PageBase