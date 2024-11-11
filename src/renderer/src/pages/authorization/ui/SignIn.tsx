import { Button, Input, Link } from '@nextui-org/react'
import useAuth from '@renderer/shared/api/auth'
import { routesPaths } from '@renderer/shared/constants'
import { tokenInstance } from '@renderer/shared/utils'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router'

const SignIn = ({ handleTabSelect }: { handleTabSelect: (value: string) => void }) => {
  const [form, setForm] = useState({
    email: 'ozod@mail.something',
    password: 'threesome'
  })
  const navigate = useNavigate()
  const { isLoading: isSignInLoading, auth: signInAuth } = useAuth(routesPaths.signIn)

  const handleSubmitSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await signInAuth({
      email: e.target['email'].value,
      password: e.target['password'].value
    })
    if (data?.username) {
      tokenInstance.setToken(data)
      navigate('/')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <form className="flex flex-col gap-4 h-[320px]" onSubmit={handleSubmitSignIn}>
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
      <div className="flex flex-col gap-3 mt-auto">
        <p className="text-center text-small text-primary">
          Need to create an account?{' '}
          <Link className="cursor-pointer" size="sm" onPress={() => handleTabSelect('sign-up')}>
            Sign up
          </Link>
        </p>
        <div className="flex gap-2 justify-end mt-auto">
          <Button isLoading={isSignInLoading} fullWidth color="success" type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SignIn
