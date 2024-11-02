import { Button, Card, CardBody, Input, Link, Tab, Tabs } from '@nextui-org/react'
import useAuth from '@renderer/shared/api/auth/useAuth'
import { tokenInstance } from '@renderer/shared/utils'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

const Authorization = () => {
  const { isLoading: isSignInLoading, auth: signInAuth } = useAuth('/auth/login')
  const { isLoading: isSignUpLoading, auth: signUpAuth } = useAuth('/auth/register')
  const navigate = useNavigate()
  const [selected, setSelected] = useState('login')
  const [form, setForm] = useState({
    username: 'ozod',
    email: 'ozod@mail.something',
    password: 'threesome'
  })

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await signInAuth({
      email: e.target['email'].value,
      password: e.target['password'].value
    })
    if (data?.user) {
      tokenInstance.setToken(data?.user)
      navigate('/')
    }
  }
  const handleSubmitSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await signUpAuth({
      username: e.target['username'].value,
      email: e.target['email'].value,
      password: e.target['password'].value
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
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
              <form className="flex flex-col gap-4" onSubmit={handleSubmitSignIn}>
                <Input
                  isRequired
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  variant="flat"
                  isRequired
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <p className="text-center text-small text-primary">
                  Need to create an account?{' '}
                  <Link size="sm" onPress={() => setSelected('sign-up')}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button isLoading={isSignInLoading} fullWidth color="success" type="submit">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]" onSubmit={handleSubmitSignUp}>
                <Input
                  isRequired
                  name="username"
                  label="Username"
                  placeholder="Enter your name"
                  value={form.username}
                  onChange={handleChange}
                />
                <Input
                  isRequired
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  isRequired
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <p className="text-center text-small text-primary">
                  Already have an account?{' '}
                  <Link size="sm" onPress={() => setSelected('login')}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button isLoading={isSignUpLoading} fullWidth color="primary" type="submit">
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
