'use client'

import { useState, useEffect } from 'react'
import { Facebook, Instagram,Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { auth } from '@/lib/firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import Link from 'next/link'
export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date('2025-01-26T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  });
  // const [isRegistered, setIsRegistered] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date('2025-01-26T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       router.push('/')
  //     }
  //   })

  //   return () => unsubscribe()
  // }, [router])

  const handlePreRegister = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      auth.onAuthStateChanged((user) => {
        if (user) {
          router.push('/success')
        }
      });
    } catch (error) {
      console.error('Error during pre-registration:', error)
    }
  }

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 bg-[url('/img.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/60" />
      <div className="relative z-10 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Navigation */}
          <motion.nav 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center justify-center text-white">
              {/* <span className="font-bold text-2xl">RE-VERSE</span> */}
            </div>
          </motion.nav>

          {/* Main Content */}
          <div className="flex flex-col items-center">
            {/* Illustration - Moved above for all screens */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="relative w-90 h-90">
                <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <img 
                  src="/logo.png" 
                  alt="Rocket illustration" 
                  className="relative z-10"
                  width={350}
                  height={350}
                
                />
                <div className='absolute right-14 top-60 w-100 h-100 text-6xl'>RE-VERSE</div>
              </div>
            </motion.div>

            <div className="text-white space-y-8 max-w-xl text-center">
              {/* <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl text-emerald-300"
              >
                We're almost ready!
              </motion.h2> */}
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent"
              >
                Going Live in..
              </motion.h1>

              {/* Countdown Timer */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="grid grid-cols-4 gap-4 text-center"
              >
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map(({ label, value }, index) => (
                  <motion.div 
                    key={label}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className="relative"
                  >
                    <div className="bg-emerald-800/50 backdrop-blur-sm rounded-lg p-4 border border-emerald-700">
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="text-sm text-gray-400">{label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pre-register Section */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-gray-300">
                  PRE-REGISTER NOW with RE-VERSE to get 10000 loyalty points
                </p>
                <Button 
                  onClick={handlePreRegister}
                  className="w-full sm:w-auto px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  PRE-REGISTER
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="flex gap-4 text-gray-400 justify-center"
              >
                <a href="https://www.instagram.com/re_verse.in/" className="hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/share/19rbrmAU7k/?mibextid=wwXIfr" className="hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/reverse-in/" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </motion.div>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8 text-center"
              >
                             <div className="flex justify-center space-x-4">
                  <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Terms and Conditions
                  </Link>
                  <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/returns_and_exchange" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Returns and Exchange
                  </Link>
                  <Link href="/shipping" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Shipping and Delivery
                  </Link>
                  <Link href="/contact-us" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact-us
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

