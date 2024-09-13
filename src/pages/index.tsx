import { MainLayout } from '@/components/common/layouts'
import { AboutUsHome, HeroHome, Insurances } from '@/components/common/home'
import { InsurancesHelp } from '@/components/common/home/InsurancesHelp'
import { People } from '@/components/common/home/People'

export default function Home() {
  return (
    <MainLayout>
      <HeroHome />
      <Insurances />
      <AboutUsHome />
      <InsurancesHelp />
      {/* <People /> */}
    </MainLayout>
  )
}
