import PATH from '@/configs/paths/PATH'

export const CMS_ACCOUNT_TYPES = ['ADMIN', 'INSTRUCTOR']
export const USER_ACCOUNT_TYPES = ['USER']

export const getAccountType = (source) => {
  const account = source?.account || source?.user || source?.userInfo || source || {}

  return (
    account.accountType ||
    account.role ||
    source?.accountType ||
    source?.role ||
    source?.userInfo?.accountType ||
    source?.userInfo?.role ||
    'USER'
  )
}

export const isCmsAccount = (source) => CMS_ACCOUNT_TYPES.includes(getAccountType(source))

export const getPostLoginPath = (source) =>
  isCmsAccount(source) ? PATH.HOME : PATH.USER.ROOT
