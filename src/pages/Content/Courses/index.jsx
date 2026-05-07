import { pageConfigs } from '@/assets/data/learningData'
import EntityPage from '@/pages/shared/EntityPage'

export default function Courses() {
  return <EntityPage config={pageConfigs.courses} />
}
