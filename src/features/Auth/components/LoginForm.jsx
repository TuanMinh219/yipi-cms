import { Alert, Button, Card, Checkbox, Form, Input, Segmented, Select } from 'antd'
import {
  GraduationCap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '@/assets/logo.svg'
import { authApi } from '@/api/authApi'
import useAuth from '../useAuth'

const inferAccount = (username) => {
  const normalized = username.trim().toLowerCase()
  const isAdmin = normalized.startsWith('admin') || normalized.includes('+admin')

  return {
    username,
    fullName: isAdmin ? 'Yipi Admin' : 'Yipi Learner',
    accountType: isAdmin ? 'ADMIN' : 'USER',
    role: isAdmin ? 'ADMIN' : 'USER',
    exists: true,
  }
}

const getAccountTone = (accountType) => {
  if (accountType === 'ADMIN') {
    return {
      className: 'login-card--admin',
      icon: <ShieldCheck size={16} />,
      badge: 'Admin authorization',
      title: 'Admin console password',
      subtitle: 'Access CMS controls for courses, instructors, payments, and moderation.',
    }
  }

  return {
    className: 'login-card--user',
    icon: <GraduationCap size={16} />,
    badge: 'Learner authorization',
    title: 'Learning account password',
    subtitle: 'Access courses, assignments, progress, and English practice tools.',
  }
}

export default function LoginForm() {
  const { t } = useTranslation()
  const { logInUser } = useAuth()
  const [mode, setMode] = useState('login')
  const [step, setStep] = useState('identify')
  const [account, setAccount] = useState(null)
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()
  const tone = useMemo(
    () => getAccountTone(account?.accountType || account?.role),
    [account]
  )

  const resolveUsername = async (values) => {
    const nextUsername = values.username?.trim()

    if (!nextUsername) return

    setError('')
    setLoading(true)

    try {
      const response = await authApi.resolveAccount(nextUsername)
      const resolvedAccount = response?.data || response
      setAccount(resolvedAccount)
      setUsername(nextUsername)
      setStep('password')
    } catch {
      const resolvedAccount = inferAccount(nextUsername)
      setAccount(resolvedAccount)
      setUsername(nextUsername)
      setStep('password')
    } finally {
      setLoading(false)
    }
  }

  const login = async (values) => {
    setError('')
    setLoading(true)

    try {
      const response = await authApi.login({
        username,
        password: values.password,
        accountType: account?.accountType || account?.role,
        rememberMe: values.rememberMe,
      })
      logInUser(response?.data || response)
    } catch (requestError) {
      if (requestError?.response) {
        setError(
          requestError.response.data?.message ||
            requestError.response.data?.data?.message ||
            'Invalid username or password'
        )
        return
      }

      logInUser({
        username,
        account,
        accountType: account?.accountType,
        role: account?.role,
        rememberMe: values.rememberMe,
      })
    } finally {
      setLoading(false)
    }
  }

  const register = async (values) => {
    setError('')
    setLoading(true)

    try {
      await authApi.register({
        fullName: values.fullName,
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        accountType: values.accountType,
      })
      setMode('login')
      setStep('password')
      setUsername(values.username)
      setAccount({
        username: values.username,
        fullName: values.fullName,
        accountType: values.accountType,
        role: values.accountType,
      })
      form.setFieldsValue({ password: values.password, rememberMe: true })
    } catch (requestError) {
      setError(
        requestError?.response?.data?.message ||
          requestError?.message ||
          'Registration failed'
      )
    } finally {
      setLoading(false)
    }
  }

  const resetIdentity = () => {
    setStep('identify')
    setAccount(null)
    setUsername('')
    form.resetFields(['password'])
  }

  return (
    <Card className={`login-card ${step === 'password' ? tone.className : ''}`}>
      <div className="login-card__brand">
        <img src={logo} alt="Yipi" />
        <span>
          <ShieldCheck size={15} />
          {t('common.admin_portal')}
        </span>
      </div>

      <div className="login-card__heading">
        <h1>{t('auth.title')}</h1>
        <p>{t('auth.subtitle')}</p>
      </div>

      <Segmented
        block
        className="login-mode"
        value={mode}
        options={[
          { label: 'Login', value: 'login' },
          { label: 'Register', value: 'register' },
        ]}
        onChange={(value) => {
          setMode(value)
          setStep('identify')
          setError('')
          setAccount(null)
          form.resetFields()
        }}
      />

      {error && (
        <Alert className="login-alert" type="error" message={error} showIcon />
      )}

      {mode === 'login' && (
        <Form
          form={form}
          layout="vertical"
          onFinish={step === 'identify' ? resolveUsername : login}
          autoComplete="off"
        >
          {step === 'identify' && (
            <>
              <Form.Item
                name="username"
                label={t('common.username')}
                rules={[{ required: true, message: t('form.required') }]}
              >
                <Input
                  prefix={<UserRound size={16} />}
                  placeholder="admin@yipi.edu"
                  autoFocus
                />
              </Form.Item>

              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                Continue
              </Button>
            </>
          )}

          {step === 'password' && (
            <>
              <div className="authorization-panel">
                <span>
                  {tone.icon}
                  {tone.badge}
                </span>
                <strong>{tone.title}</strong>
                <p>{tone.subtitle}</p>
                <button type="button" onClick={resetIdentity}>
                  {username}
                </button>
              </div>

              <Form.Item
                name="password"
                label={t('common.password')}
                rules={[{ required: true, message: t('form.required') }]}
              >
                <Input.Password prefix={<LockKeyhole size={16} />} autoFocus />
              </Form.Item>

              <div className="login-card__meta">
                <Form.Item name="rememberMe" valuePropName="checked" noStyle>
                  <Checkbox>{t('auth.remember')}</Checkbox>
                </Form.Item>
              </div>

              <Button type="primary" htmlType="submit" block size="large" loading={loading}>
                {t('auth.submit')}
              </Button>
            </>
          )}
        </Form>
      )}

      {mode === 'register' && (
        <Form form={form} layout="vertical" onFinish={register} autoComplete="off">
          <Form.Item
            name="fullName"
            label="Full name"
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Input prefix={<UserRound size={16} />} autoFocus />
          </Form.Item>

          <Form.Item
            name="username"
            label={t('common.username')}
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Input prefix={<UserRound size={16} />} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: t('form.required') },
              { type: 'email', message: 'Invalid email' },
            ]}
          >
            <Input prefix={<Mail size={16} />} />
          </Form.Item>

          <Form.Item
            name="accountType"
            label="Account type"
            initialValue="USER"
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Select
              options={[
                { label: 'Learner', value: 'USER' },
                { label: 'Admin', value: 'ADMIN' },
              ]}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={t('common.password')}
            rules={[{ required: true, message: t('form.required') }]}
          >
            <Input.Password prefix={<LockKeyhole size={16} />} />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm password"
            dependencies={['password']}
            rules={[
              { required: true, message: t('form.required') },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Passwords do not match'))
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockKeyhole size={16} />} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large" loading={loading}>
            Register account
          </Button>
        </Form>
      )}
    </Card>
  )
}
