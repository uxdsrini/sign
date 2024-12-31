import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-600 mb-6">Last updated: 9/16/2020</p>
        
        <p className="text-gray-700 mb-4">
          THIS TERMS OF USE AGREEMENT (the “Agreement”) constitutes a legally binding agreement by and between SIGNJOY, LLC, a limited liability company organized under the laws of the state of Maryland (“SignJoy”) and the client, whether personally or on behalf of an entity (“Client”), with regard to access and use of SignJoy’s website: https://www.signjoy.co/ (the “Website”) and any other media form, channel, mobile website or mobile application related, linked or otherwise connected thereto. Failure to agree and adhere to all of the terms, conditions and obligations contained herein results in the express prohibition of the Client’s use of the Website, and the Client is ordered to discontinue use immediately. Thereafter the relationship between Client and SignJoy shall cease and be of no further force and effect between the parties, except that any obligation of Client to pay SignJoy for services rendered shall remain and continue to be an ongoing obligation owed by Client to SignJoy.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">1. Intellectual Property Rights</h2>
          <p className="text-gray-700">
            Unless otherwise indicated, the Website is the property of SignJoy and all source code, databases, functionality, software, website designs, audio, video, text, photographs and graphics of any nature and regardless of format (herein, collectively or individually, the “Content”) and the trademarks, service marks, and logos contained there (the “Marks”) are owned and controlled by SignJoy and are protected by copyright and trademark laws and any other applicable intellectual property law or regulation of the United States, foreign jurisdictions and international conventions. The Content and Marks are provided “As-Is” for your information and personal use only. Except as expressly provided herein, no part of the Website and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without SignJoy’s express prior written permission. SignJoy reserves all rights in the Website, Content and Marks.
          </p>
        </section>

        {/* Repeat similar structure for all other sections */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">20. Contact Information</h2>
          <p className="text-gray-700">
            For any questions or complaints regarding the Website, please contact SignJoy at: hello@signjoy.co.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
