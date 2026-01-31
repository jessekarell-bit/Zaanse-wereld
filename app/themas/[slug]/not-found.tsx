import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-4xl font-bold text-deep-water-blue mb-4">
            Wereld niet gevonden
          </h1>
          <p className="text-gray-700 mb-8">
            Deze wereld bestaat nog niet of is in ontwikkeling.
          </p>
          <Link 
            href="/themas"
            className="inline-flex items-center text-deep-water-blue hover:text-polder-green transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar wereldoverzicht
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
