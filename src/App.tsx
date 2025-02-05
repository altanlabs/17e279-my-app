import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JobBoard from './pages'
import JobDetails from './pages/jobs/[id]'
import NotFound from './pages/NotFound'
import Layout from './layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<JobBoard />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App