import { Navigate, useParams } from 'react-router-dom'
import PATH, { LEGACY_SECTION_REDIRECTS } from './paths/PATH'

export default function LegacyAdminRedirect() {
  const { section } = useParams()
  const to = LEGACY_SECTION_REDIRECTS[section] || PATH.HOME

  return <Navigate to={to} replace />
}
