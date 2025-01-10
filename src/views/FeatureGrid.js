import React from 'react';
import { ClipboardCheckIcon, LightningBoltIcon, CashIcon, SparklesIcon, ChartBarIcon, LockClosedIcon } from '@heroicons/react/outline';

const features = [
  {
    icon: <ClipboardCheckIcon className="h-10 w-10 text-white" />,
    title: 'Design Dashboard',
    description: 'Effortlessly organize your design queue using a Trello board.',
  },
  {
    icon: <LightningBoltIcon className="h-10 w-10 text-white" />,
    title: 'Blazing-Fast Delivery',
    description: 'Receive your design, one at a time, in just a few days on average.',
  },
  {
    icon: <CashIcon className="h-10 w-10 text-white" />,
    title: 'Consistent Monthly Rate',
    description: 'No hidden fees—pay the same fixed price every month.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-white" />,
    title: 'Exceptional Quality',
    description: 'Incredible design quality, right at your fingertips, whenever you need it.',
  },
  {
    icon: <ChartBarIcon className="h-10 w-10 text-white" />,
    title: 'Adaptable and Scalable',
    description: 'Scale up or down as required, with the option to pause or cancel at any time.',
  },
  {
    icon: <LockClosedIcon className="h-10 w-10 text-white" />,
    title: 'Exclusive and Uniquely Yours',
    description: 'Every design is crafted specifically for you and is 100% yours.',
  },
];

const FeatureGrid = () => {
  return (
    <>
      <div id='benifits' className="mt-8 mb-8 bg-white flex items-center justify-center">
        <div className="text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">Member advantages</h2>
        <div className="text-lg text-gray-600">Benefits so impressive, you’ll never need to look elsewhere for your design needs. Seriously.</div>
        
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex justify-center mx-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-gray-900 hover:shadow-xl p-6 hover:shadow-gray-500 rounded-lg text-center flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500"
          > 
            <div className="text-4xl">{feature.icon}</div>
            <h3 className="text-white font-semibold mb-2 text-lg font-medium">{feature.title}</h3>
            <p className="text-gray-600 text-white text-sm font-regular">{feature.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureGrid;
