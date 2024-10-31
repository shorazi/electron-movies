import { Button, Card, CardBody, Input, Link, Tab, Tabs } from '@nextui-org/react'
import { tokenInstance } from '@renderer/shared/utils/tokenInstance'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

const api = import.meta.env.VITE_BASE_URL

async function postData(data = {}) {
  try {
    const response = await fetch(api + '/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

const Authorization = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('login')
  const [form, setForm] = useState({
    email: 'admin@admin.com',
    password: 'qwerty123'
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await postData({
      email: e.target['Email'].value,
      password: e.target['Password'].value
    })
    if (data?.user) {
      tokenInstance.setToken(data?.user)
      navigate('/')
    }
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
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  isRequired
                  name="Email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                />
                <Input
                  variant="flat"
                  isRequired
                  name="Password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={form.password}
                />
                <p className="text-center text-small text-primary">
                  Need to create an account?{' '}
                  <Link size="sm" onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="success" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                />
                <p className="text-center text-small">
                  Already have an account?{' '}
                  <Link size="sm" onPress={() => setSelected('login')}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export default Authorization
