import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons'

import * as S from './styles'

type MenuItemProps = {
  to: string
  Icon: any
  text: string
}

function renderItem(props: MenuItemProps) {
  const { to, text, Icon } = props
  return (
    <Menu.Item key={to}>
      <Link to={to}>
        <Icon />
        <span>{text}</span>
      </Link>
    </Menu.Item>
  )
}

export function Nav() {
  const location = useLocation()

  return (
    <Menu
      css={S.menuCss}
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      theme="dark"
    >
      {renderItem({ to: '/', Icon: HomeOutlined, text: 'Главная' })}

      {renderItem({ to: '/profile', Icon: UserOutlined, text: 'Иванов Иван' })}
    </Menu>
  )
}
