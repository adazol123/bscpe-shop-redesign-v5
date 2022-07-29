import { useRouter } from 'next/router'
import React from 'react'

const ProtectedRoute = () => {
    const router = useRouter()
  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute