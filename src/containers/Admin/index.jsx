import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import Path from '../../constants/Path'
import CategoriesCreate from './CategoriesCreate'
import CategoriesList from './CategoriesList'
import CategoriesUpdate from './CategoriesUpdate'
import ProjectsCreate from './ProjectsCreate'
import ProjectsList from './ProjectsList'
import ProjectsUpdate from './ProjectsUpdate'
import { Container, ContainerItems } from './styled'
import { useLocation } from 'react-router-dom'
import UserUpdate from './UserUpdate'

export function Admin() {
  const location = useLocation()
  const path = location.pathname
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === Path.projList && <ProjectsList />}
        {path === Path.projCreate && <ProjectsCreate />}
        {path === Path.projUpdate && <ProjectsUpdate />}
        {path === Path.catList && <CategoriesList />}
        {path === Path.catCreate && <CategoriesCreate />}
        {path === Path.catUpdate && <CategoriesUpdate />}
        {path === Path.userUpdate && <UserUpdate />}
      </ContainerItems>
    </Container>
  )
}
