import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { PublicLayout } from '@/layouts/public_layout'
import HomePage from '@/routes/home'
import AuthenticationLayout from '@/layouts/auth_layout'
import { SingInPage } from '@/routes/sing-in'
import { SingUpPage } from './routes/sing-up'
import ProtecedRoutes from './layouts/proteced_Routes'
import { MainLayout } from './layouts/main_layout'

const App = () => {
  return (
    <Router>
      <Routes>
        {/*public routes */}
        <Route element={<PublicLayout/>}>
        <Route index element={<HomePage/>}></Route>
        </Route>

        {/*authentication layout*/}
        <Route element={<AuthenticationLayout/>}>
        <Route path='/singin/*' element={<SingInPage/>}></Route>
        <Route path='/singup/*' element={<SingUpPage />}></Route>
        </Route>


        {/*proteced routes */}
        <Route element={<ProtecedRoutes><MainLayout/></ProtecedRoutes>}>
        {/*add all the protect router*/}

        </Route>
      </Routes>
    </Router>
  )
}

export default App
