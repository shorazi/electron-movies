import { Button, Input, Link } from '@nextui-org/react'
import useAuth from '@renderer/shared/api/auth/useAuth'
import { routesPaths } from '@renderer/shared/constants'
import { ChangeEvent, FormEvent, useState } from 'react'

const SignUp = ({ handleTabSelect }: { handleTabSelect: (value: string) => void }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const { isLoading: isSignUpLoading, auth: signUpAuth } = useAuth(routesPaths.signUp)

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
    <form className="flex flex-col gap-4 h-[320px]" onSubmit={handleSubmitSignUp}>
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
      <div className="flex flex-col gap-3 mt-auto">
        <p className="text-center text-small text-primary">
          Already have an account?{' '}
          <Link className="cursor-pointer" size="sm" onPress={() => handleTabSelect('login')}>
            Login
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button isLoading={isSignUpLoading} fullWidth color="primary" type="submit">
            Sign up
          </Button>
        </div>
      </div>
    </form>
  )
}

export default SignUp
