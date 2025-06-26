import { ArrowUpRight } from 'lucide-react'
import Button from './UI/button'; // Adjusted the casing to match the file name
import AnimatedSection from '../../components/AnimatedSection'; // Corrected path


export default function CTASection() {
  return (
    <AnimatedSection animationType="fadeInUp">
      <section className="w-full py-24 bg-gradient-to-b from-yellow-500 to-orange-600 mt-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Discover if Signjoy is the perfect fit for you.
            </h2>
            <p className="text-xl text-gray-900 dark:text-gray-200 max-w-[800px]">
            Take a guided tour of Signjoy and see how you and your team can transform the way you create impactful signage, forever.          </p>
            <Button
              variant="Link"
              className="text-lg font-medium text-gray-900 dark:text-gray-100 group"
            asChild
          >
            <a href="https://calendar.app.google/Uxfa6cdV1BJ48J5m6" className="flex items-center gap-2">
              Book A Call
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  </AnimatedSection>
  )
}

