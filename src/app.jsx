import styled from 'styled-components'

import Login from './components/login'

const LoginFrame = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  justify-content: center;
  align-content: center;
`

const App = () => {
  return (
    <LoginFrame>
      <Login />
    </LoginFrame>
  )
}

export default App
