'use client'

import { Card } from "./UI/card"
import { Badge } from "./UI/badge"
import { Check } from 'lucide-react'

export default function PricingSection() {
  return (
    <div id='pricing' className="min-h-screen mt-24 mb-24 md:px-20 flex items-center justify-center mx-2 md:mx-0">
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Join Card */}
        <Card className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
          <Badge className="bg-orange-500/20 text-orange-500 hover:bg-orange-500/20 mb-6">
            Slots available
          </Badge>
          <h2 className="text-5xl font-bold mb-12">
            Join
            <br />
            Signjoy
          </h2>
          <div className="relative mt-auto">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <a href='https://calendar.app.google/Uxfa6cdV1BJ48J5m6' target="_blank" rel="noreferrer"><h3 className="text-xl font-semibold mb-2">
                Book a 15-min intro call
              </h3> 
              <p className="text-gray-400 mb-4">
                Learn more about how SignJoy works and how it can help you.
              </p>
              <div className="text-white/40 text-2xl">→</div>
              </a>
            </div>
          </div>
         
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-90 blur-2xl" />
        </Card>

        {/* Right Column - Pricing Details */}
        <div className="space-y-8 bg-pattern px-4 py-12 rounded-3xl text-center height=580px">
          <h1 className="text-4xl font-bold text-black text-center">Membership</h1>
          <div className="inline-flex items-center bg-black/5 rounded-full p-1">
            <div className="rounded-full px-6 py-2 bg-black text-white">
              Standard
            </div>
          </div>

          <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">
            <div className="hidden md:flex mx-auto"> 
              <div className="text-left sm:py-2 py-4 ">
                <h4 className="text-gray-900 text-center">For India</h4>
                <div className="text-4xl font-bold text-black text-center">₹40,499<span className="text-xl font-normal">/m</span><br/><span className="text-2xl font-bold text-black line-through">₹80,999/m</span></div>
              </div>
            </div>
            {/* Mobile view */}
            <div className="md:hidden">
              <h4 className="text-gray-900 text-center">For India</h4>
              <div className="text-4xl font-bold text-black text-center">₹40,499<span className="text-xl font-normal">/m</span><br/><span className="text-2xl font-bold text-black line-through">₹80,999/m</span></div>
            </div>
          </div>
          <p className="text-black text-center">
              Double the requests. Pause or cancel anytime.
            </p>

          <hr className="border-orange-400" />

          <div>
            <h3 className="text-xl font-semibold mb-4 text-black">What's included</h3>
            <div className="grid md:grid-cols-2 gap-4 text-black">
              {[
                "Two requests at a time",
                "Average 48 hour delivery",
                "Unlimited brands",
                "Web development",
                "Unlimited revisions",
                "Design resources charged separately",
                "Pause or cancel anytime"
              ].map((feature) => (
                <div key={feature} className="flex items-center text-left gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mx-auto justify-center">
          <a href="https://bsrin6.myinstamojo.com/product/signjoy-design-subscription/" data-store-name="bsrin6" data-domain="https://bsrin6.myinstamojo.com" data-id="5965530" rel="im-new-checkout" data-text="Pay" data-css-style="background:#75c26a; color:#ffffff; width:300px; border-radius:30px"   data-layout="vertical"  ><span size="lg" className="bg-yellow-500 px-8 py-4 text-white rounded-xl hover:bg-black">
              Get started
            </span></a>
           <script src="https://manage.instamojo.com/assets/js/pay_button/button.min.js"></script>
          </div>
        </div>
      </div>
    </div>
  )
}