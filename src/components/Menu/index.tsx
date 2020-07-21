import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import {
  Container,
  Code,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles'
// @ts-ignore
import { QRCode } from 'react-native-custom-qr-codes-expo'

const Menu: React.FC = () => {
  return (
    <Container>
      <Code>
        <QRCode
          content='https://devtroopers.com.br'
          size={100}
          color="#8b10ae"
        />
      </Code>

      <Nav>
        <NavItems>
          <MaterialIcons name="help-outline" size={20} color="white" />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <MaterialIcons name="person-outline" size={20} color="white" />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <MaterialIcons name="credit-card" size={20} color="white" />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <MaterialIcons name="smartphone" size={20} color="white" />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do app</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}

export default Menu