import { pageConfigs } from '@/assets/data/learningData'
import EntityPage from '@/pages/shared/EntityPage'

export default function Instructors() {
  return <EntityPage config={pageConfigs.instructors} />
}
