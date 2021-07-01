import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default function ProfilePage() {
  const history = useHistory()

  function logOut() {
    history.push('/login')
  }

  return (
    <>
      <span>
        <Button onClick={logOut} onKeyDown={logOut}>
          Выйти
        </Button>
      </span>
    </>
  )
}
