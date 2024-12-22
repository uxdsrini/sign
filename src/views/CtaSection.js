import { ArrowUpRight } from 'lucide-react'
import Button from './UI/button'; // Adjusted the casing to match the file name



export default function CTASection() {
  return (
<section className="w-full py-24 bg-gradient-to-b from-yellow-500 to-orange-600 mt-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
          Discover if Signjoy is the perfect fit for you.
          </h2>
          <p className="text-xl text-gray-900 max-w-[800px]">
          Take a guided tour of Signjoy and see how you and your team can transform the way you create impactful signage, forever.          </p>
          <Button
            variant="Link"
            className="text-lg font-medium text-gray-900 group"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              Book A Call
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

