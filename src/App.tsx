import { PageRouter } from 'pages/pages'
import './index.scss'
import { Layout } from 'antd'

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <PageRouter />
    </Layout>
  )
}

export default App
