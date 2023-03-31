import Layout from '@/components/Layout'
import React from 'react'

const reports = () => {
  return (
    <div>reports</div>
  )
}

export default reports

reports.getLayout = function getLayout(page) {
  return <Layout page="reports">{page}</Layout>
}