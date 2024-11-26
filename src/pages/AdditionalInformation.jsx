import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy & Policy</h2>
      <p className="text-gray-600">
        We value your privacy. All your data is handled securely and responsibly. Please read the following policies:
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
        <li>We do not share your personal information with third parties.</li>
        <li>Your data is encrypted and securely stored.</li>
        <li>Cookies are used to enhance user experience, not for tracking.</li>
      </ul>
    </div>
  );
};


export default PrivacyPolicy;
