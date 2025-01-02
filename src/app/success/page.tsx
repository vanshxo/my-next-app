'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 5000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-900/20 to-emerald-800/20">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4 text-center"
      >
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl font-bold text-emerald-600 mb-6"
        >
          Thank you!
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-600 mb-2">Thanks for pre-registering with RE-VERSE.</p>
          <p className="text-gray-600 mb-8">Redirecting you back in 3 seconds...</p>
          <Link href="/">
            {/* <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full mb-6 transition-colors">
              Go to Main Page
            </Button> */}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

