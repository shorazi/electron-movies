import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

const Authorization = () => {
  const [selected, setSelected] = useState('login')

  const handleTabSelect = (value: string) => {
    setSelected(value)
  }

  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-br from-background via-background2 via-70% to-primary flex justify-center items-center">
      <Card className="max-w-full w-[340px] h-[400px]" isBlurred shadow="lg">
        <CardBody className="overflow-hidden">
          <Tabs
            variant="underlined"
            color="success"
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(e) => setSelected(e.toString())}
          >
            <Tab key="login" title="Login">
              <SignIn handleTabSelect={() => handleTabSelect('sign-up')} />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignUp handleTabSelect={() => handleTabSelect('login')} />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export default Authorization
