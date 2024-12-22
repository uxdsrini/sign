import agreementIcon from '../assets/images/agreement.png';
import deliveryIcon from '../assets/images/delivery.png';
import stisfiedIcon from '../assets/images/satisfied.png';

export default function HowItWorks() {
    const steps = [
      {
        icon: (
            <img
            src={agreementIcon}
            alt="agreement Icon"
            className="w-24 h-24"
          />
        ),
        text: "Sign up for a plan and enjoy unlimited design requests."
      },
      {
        icon: (
            <img
            src={deliveryIcon} // Replace with the actual path to your PNG file
            alt="delivery Icon"
            className="w-24 h-24"
          />
        ),
        text: "Get your design delivered in an average of two business days."
      },
      {
        icon: (
            <img
            src={stisfiedIcon} // Replace with the actual path to your PNG file
            alt="satisfied Icon"
            className="w-24 h-24"
          />
        ),
        text: "We’ll refine the designs until you’re completely satisfied."
      }
    ]
  
    return (
      <section  className="max-w-7xl mx-auto px-2 py-24">
        <div id='howitworks' className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
          We didn’t reinvent the wheel—just the way design works.
          </h2>
          <div className="text-xl md:text-2xl space-y-2">
            <p>Traditional design is a thing of the past.</p>
            <p>Tailored design is here to stay.</p>
          </div>
        </div>
  
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto ">
          {steps.map((step, index) => (
            <div key={index} className="flex text-gray-900 flex-col items-center text-center border-orange-200 rounded-3xl hover:border-solid border-2 px-4 py-4 border-dotted hover:shadow-xl hover:shadow-gray-200">
              <div className="mb-6">
                {step.icon}
              </div>
              <p className="text-md md:text-md max-w-[250px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  