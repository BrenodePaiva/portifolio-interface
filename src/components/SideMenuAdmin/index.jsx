import { useState } from 'react'
import {
  ArrowIcon,
  Container,
  Line,
  Links,
  LinksButton,
  LinksContainer,
  LogoutBox,
  LogoutIconStyled,
  UserBox,
  UserIconStyled,
  UserInfo
} from './styled'
import PropTypes from 'prop-types'
import linkList from './menu-list'
import { useUser } from '../../hooks/UserContext'
import { useNavigate } from 'react-router-dom'
import Path from '../../constants/Path'

export function SideMenuAdmin({ path }) {
  const [arrowIcon, setArrowIcon] = useState(false)
  const { logout, userData } = useUser()
  const navigate = useNavigate()

  function NavMobile() {
    !arrowIcon ? setArrowIcon(true) : setArrowIcon(false)
  }

  return (
    <Container data-is-mobile={arrowIcon}>
      <div className="warp-arrow">
        <ArrowIcon
          onClick={NavMobile}
          data-is-mobile={arrowIcon}
          fontSize="large"
        />
      </div>
      <div className="warp" data-is-mobile={arrowIcon}>
        <UserBox onClick={() => navigate(Path.userUpdate)}>
          <UserIconStyled />
          <UserInfo>
            {userData.name}
            <span>Admin</span>
          </UserInfo>
        </UserBox>

        <Line style={{ top: '105px' }} data-is-mobile={arrowIcon} />

        <LinksContainer>
          {linkList.map(item => (
            <LinksButton
              key={item.id}
              to={item.link}
              data-is-active={path === item.link}
            >
              <Links>{item.label}</Links>
            </LinksButton>
          ))}
        </LinksContainer>

        <Line style={{ bottom: '79px' }} data-is-mobile={arrowIcon} />
        <LogoutBox to={'/'} onClick={logout}>
          <LogoutIconStyled /> Sair
        </LogoutBox>
        {/* <Line data-bottom="30px" /> */}
      </div>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
