import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function pricing() {
  return (

    <MainLayout>
        <h1>Pricing Page</h1>
          <h1 className={'title'}>
            Ir al  <Link href="/">Home!</Link>
          </h1>

          <p className={'description'}>
            Get started by editing{' '}
            <code className={'code'}>pages/index.jsx</code>
          </p>
    </MainLayout>
    
  )
}
