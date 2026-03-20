import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ApproachPage from './pages/ApproachPage'
import PathwaysPage from './pages/PathwaysPage'
import ResearchPage from './pages/ResearchPage'
import CommunityPage from './pages/CommunityPage'
import UpdatesPage from './pages/UpdatesPage'
import SupportPage from './pages/SupportPage'
import ContactPage from './pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.22 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/pathways" element={<PathwaysPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  )
}
