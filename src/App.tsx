import React, { useState } from 'react';

const TermSheetGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    borrowerEntity: '',
    todaysDate: new Date().toLocaleDateString(),
    loanNumber: '',
    subjectPropertyAddress: '',
    borrowerName: '',
    propertyType: '',
    purpose: '',
    purchasePrice: '',
    downPayment: '',
    acquisitionLoanAmount: '',
    acquisitionLTV: '',
    interestReserve: '',
    rehabBudget: '',
    totalLoanAmount: '',
    ltv: '',
    landValue: '',
    arv: '',
    loanTerm: '',
    expirationDate: '',
    interestRate: '',
    originationFeePercent: '',
    brokerFeePercent: '',
    applicationFee: '595.00',
    underwritingFee: '995.00',
    appraisalFee: '',
    documentFee: '750.00',
    personalReportsFee: '450',
    inspectionFee: '250.00',
    budgetReviewFee: 'NA'
  });

  const [logo, setLogo] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogoUpload = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (e.target?.result) {
          setLogo(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const generatePDF = () => {
    // Create a new window with the term sheet content
    const printWindow = window.open('', '_blank');
    const termSheetHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Term Sheet - ${formData.borrowerEntity}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.4;
            color: #333;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            max-width: 200px;
            max-height: 100px;
            margin-bottom: 20px;
          }
          .title-section {
            text-align: left;
            margin-bottom: 30px;
          }
          .term-sheet-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
          }
          .term-sheet-table td {
            border: 1px solid #000;
            padding: 8px;
            vertical-align: top;
          }
          .section-header {
            background-color: #f5f5f5;
            font-weight: bold;
            text-align: center;
          }
          .label-column {
            width: 30%;
            font-weight: bold;
            background-color: #f9f9f9;
          }
          .value-column {
            width: 70%;
          }
          .footer-text {
            margin-top: 30px;
            text-align: justify;
            font-size: 12px;
            line-height: 1.5;
          }
          .signature-section {
            margin-top: 40px;
          }
          @media print {
            body { margin: 20px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          ${logo ? `<img src="${logo}" alt="Company Logo" class="logo">` : ''}
        </div>
        
        <div class="title-section">
          <strong>${formData.borrowerEntity}</strong><br>
          <strong>${formData.todaysDate}</strong><br>
          <strong>Loan # ${formData.loanNumber}</strong><br><br>
          <strong style="font-size: 18px;">TERM SHEET</strong><br><br>
          <strong>${formData.subjectPropertyAddress}</strong><br><br>
          Dear <strong>${formData.borrowerName}</strong>,<br><br>
          PFN Lending Group, Inc., in response to your recent request for credit, has completed its preliminary review of your loan request. We are, at this time, pleased to issue this <strong>NON-BINDING</strong> preliminary Letter of Interest concerning your request. It is our understanding that you are applying for and would accept a loan with the following terms:
        </div>

        <table class="term-sheet-table">
          <tr>
            <td colspan="2" class="section-header"><strong>SPONSORSHIP</strong></td>
          </tr>
          <tr>
            <td class="label-column">Proposed Borrower(s)</td>
            <td class="value-column">${formData.borrowerEntity}</td>
          </tr>
          <tr>
            <td class="label-column">Proposed Guarantor(s)</td>
            <td class="value-column">${formData.borrowerName}</td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>SUBJECT PROPERTY</strong></td>
          </tr>
          <tr>
            <td class="label-column">Property Description</td>
            <td class="value-column">${formData.propertyType}</td>
          </tr>
          <tr>
            <td class="label-column">Property Address</td>
            <td class="value-column"><strong>${formData.subjectPropertyAddress}</strong></td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>TRANSACTION</strong></td>
          </tr>
          <tr>
            <td class="label-column">Contract</td>
            <td class="value-column"><strong>${formData.purpose}</strong></td>
          </tr>
          <tr>
            <td class="label-column">Purchase Price</td>
            <td class="value-column">${formData.purchasePrice}</td>
          </tr>
          <tr>
            <td class="label-column">Deposit on Acquisition</td>
            <td class="value-column">$${formData.downPayment}</td>
          </tr>
          <tr>
            <td class="label-column"><strong>Initial Loan Amount</strong></td>
            <td class="value-column"><strong>$${formData.acquisitionLoanAmount}</strong></td>
          </tr>
          <tr>
            <td class="label-column">Acquisition LTV</td>
            <td class="value-column">${formData.acquisitionLTV}%</td>
          </tr>
          <tr>
            <td class="label-column">Interest Reserve</td>
            <td class="value-column">$${formData.interestReserve}</td>
          </tr>
          <tr>
            <td class="label-column">Rehab Funds</td>
            <td class="value-column">$${formData.rehabBudget}</td>
          </tr>
          <tr>
            <td class="label-column"><strong>Total Loan Amount</strong></td>
            <td class="value-column"><strong>$${formData.totalLoanAmount}</strong></td>
          </tr>
          <tr>
            <td class="label-column">LTV</td>
            <td class="value-column">${formData.ltv}</td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>LOAN TERMS/REQUIREMENTS</strong></td>
          </tr>
          <tr>
            <td class="label-column">As Is Value</td>
            <td class="value-column">$${formData.landValue}</td>
          </tr>
          <tr>
            <td class="label-column">After Repaired Value</td>
            <td class="value-column">${formData.arv}</td>
          </tr>
          <tr>
            <td class="label-column">Loan Term/Amortization</td>
            <td class="value-column">${formData.loanTerm}</td>
          </tr>
          <tr>
            <td class="label-column">Special Conditions</td>
            <td class="value-column">NA</td>
          </tr>
          <tr>
            <td class="label-column">Prepayment Penalty</td>
            <td class="value-column">NA</td>
          </tr>
          <tr>
            <td class="label-column">Expiration of this Letter</td>
            <td class="value-column">${formData.expirationDate}</td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>Fees / Payments</strong></td>
          </tr>
          <tr>
            <td class="label-column">Interest Only Rate</td>
            <td class="value-column">${formData.interestRate}</td>
          </tr>
          <tr>
            <td class="label-column">Loan Origination Fee</td>
            <td class="value-column">${formData.originationFeePercent}%</td>
          </tr>
          <tr>
            <td class="label-column">Loan Officer/Broker Fee</td>
            <td class="value-column">${formData.brokerFeePercent}%</td>
          </tr>
          <tr>
            <td class="label-column">Application</td>
            <td class="value-column">$${formData.applicationFee}</td>
          </tr>
          <tr>
            <td class="label-column">Underwriting</td>
            <td class="value-column">$${formData.underwritingFee}</td>
          </tr>
          <tr>
            <td class="label-column">Appraisal</td>
            <td class="value-column">$${formData.appraisalFee}</td>
          </tr>
          <tr>
            <td class="label-column">Loan Document Fee</td>
            <td class="value-column">$${formData.documentFee}</td>
          </tr>
          <tr>
            <td class="label-column">Title / Taxes / Liens / Closing Fee</td>
            <td class="value-column">TBD</td>
          </tr>
          <tr>
            <td class="label-column">Personal/Business Reports</td>
            <td class="value-column">$${formData.personalReportsFee}</td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>REHAB FEES IF APPLICABLE</strong></td>
          </tr>
          <tr>
            <td class="label-column">Insp. Per Draw</td>
            <td class="value-column">$${formData.inspectionFee}</td>
          </tr>
          <tr>
            <td class="label-column">3rd Party Budget -- Permit Review</td>
            <td class="value-column">${formData.budgetReviewFee}</td>
          </tr>
          
          <tr>
            <td colspan="2" class="section-header"><strong>ADDITIONAL APPROVAL REQUIREMENTS:</strong></td>
          </tr>
          <tr>
            <td colspan="2" style="height: 60px;"></td>
          </tr>
        </table>

        <div class="footer-text">
          <p>Full consideration of Applicant's loan request will commence upon receipt by <strong>${formData.borrowerEntity}</strong> of delivery of a copy of this letter to <strong>PFN Lending Group, Inc.</strong> bearing Applicant's signature. After receipt of the signed letter, <strong>PFN Lending Group, Inc.</strong> will commence the loan underwriting process. All of the Third-Party Fees and any additional third-party expenses incurred will be due at the time of the loan closing. Applicant authorizes <strong>PFN Lending Group, Inc.</strong> to disclose information contained herein to <strong>PFN Lending Group, Inc.</strong> affiliates and authorized third parties for everyday business purposes including loan processing and review, financial account dealings and collection quality control and credit reporting, in accordance with <strong>PFN Lending Group, Inc.</strong> privacy policies and as required by law.</p>

          <p><strong>PFN Lending Group, Inc.</strong> will obtain a full appraisal of the proposed collateral at the Applicant's expense, to determine if the proposed loan is within the applicable loan-to-value ratio. All appraisals are subject to a final value-determination review that will be conducted by <strong>PFN Lending Group, Inc.</strong> underwriting department. Applicant hereby represents that, to the best of Applicant's knowledge, no toxic or hazardous materials have been released in, on, or about the proposed collateral.</p>

          <p><strong>PFN Lending Group, Inc.</strong> will obtain a Title from our approved list at the Applicant's expense. If the client already obtained a title, Unitas will review to determine if it is acceptable.</p>

          <p>Loan Purpose will be for Business Purpose, Refinance, Rehabilitation and Sale of Property</p>

          <p>Applicant expressly acknowledges that <strong>PFN Lending Group, Inc.</strong> is not obligated to make any loan on the Subject Property on any terms by virtue of issuing this Letter of Interest. Applicant cannot and shall not rely on this Letter of Interest in connection with any transaction in which Applicant is engaged. This Letter of Interest shall not constitute an agreement to negotiate and solely constitutes an outline of certain proposed key terms of the proposed loan.</p>

          <p>At closing, all principals to transaction will sign personal Guarantees.</p>

          <p><strong>Loan contingent upon all required documentation to be received in this office.</strong></p>

          <p><u><strong>* All loans require 48 hrs. Notice for Wire and Doc. Preparation after Clear to Close.</strong></u></p>

          <p><u><strong>If you agree to the terms herein please sign and return so we may proceed with your loan.</strong></u></p>
        </div>

        <div class="signature-section">
          <p>Very truly yours,</p>
          <br>
          <p>PFN Lending Group, Inc.</p>
        </div>

        <div class="no-print" style="margin-top: 30px; text-align: center;">
          <button onclick="window.print()" style="background: #3b82f6; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px;">Print / Save as PDF</button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(termSheetHTML);
    printWindow.document.close();
  };

  const calculateExpirationDate = () => {
    const today = new Date();
    const expiration = new Date(today);
    expiration.setDate(today.getDate() + 10);
    return expiration.toLocaleDateString();
  };

  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      expirationDate: calculateExpirationDate()
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <span className="mr-3 text-blue-600 text-3xl">🏢</span>
            <h1 className="text-3xl font-bold text-gray-900">Term Sheet Generator</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                  <span className="mr-2">📄</span>
                  Loan Information
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Borrower's Entity</label>
                    <input
                      type="text"
                      name="borrowerEntity"
                      value={formData.borrowerEntity}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter borrower's entity name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Borrower Name</label>
                    <input
                      type="text"
                      name="borrowerName"
                      value={formData.borrowerName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter borrower's name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Number</label>
                    <input
                      type="text"
                      name="loanNumber"
                      value={formData.loanNumber}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter loan number"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Property Information</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
                    <input
                      type="text"
                      name="subjectPropertyAddress"
                      value={formData.subjectPropertyAddress}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter property address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <input
                      type="text"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Single Family Home, Commercial Property"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                    <input
                      type="text"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., Purchase, Refinance, Rehab"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Financial Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price</label>
                    <input
                      type="text"
                      name="purchasePrice"
                      value={formData.purchasePrice}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="$000,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                    <input
                      type="text"
                      name="downPayment"
                      value={formData.downPayment}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Acquisition Loan Amount</label>
                    <input
                      type="text"
                      name="acquisitionLoanAmount"
                      value={formData.acquisitionLoanAmount}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Acquisition LTV (%)</label>
                    <input
                      type="text"
                      name="acquisitionLTV"
                      value={formData.acquisitionLTV}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interest Reserve</label>
                    <input
                      type="text"
                      name="interestReserve"
                      value={formData.interestReserve}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="00,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rehab Budget</label>
                    <input
                      type="text"
                      name="rehabBudget"
                      value={formData.rehabBudget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="00,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Total Loan Amount</label>
                    <input
                      type="text"
                      name="totalLoanAmount"
                      value={formData.totalLoanAmount}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LTV</label>
                    <input
                      type="text"
                      name="ltv"
                      value={formData.ltv}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="00%"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">As Is Value</label>
                    <input
                      type="text"
                      name="landValue"
                      value={formData.landValue}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">After Repaired Value (ARV)</label>
                    <input
                      type="text"
                      name="arv"
                      value={formData.arv}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000,000"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Loan Terms</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term</label>
                    <input
                      type="text"
                      name="loanTerm"
                      value={formData.loanTerm}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g., 12 months"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate</label>
                    <input
                      type="text"
                      name="interestRate"
                      value={formData.interestRate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.00%"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                    <input
                      type="text"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-4">Fees</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Origination Fee (%)</label>
                    <input
                      type="text"
                      name="originationFeePercent"
                      value={formData.originationFeePercent}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Broker Fee (%)</label>
                    <input
                      type="text"
                      name="brokerFeePercent"
                      value={formData.brokerFeePercent}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0.0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Fee</label>
                    <input
                      type="text"
                      name="applicationFee"
                      value={formData.applicationFee}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Underwriting Fee</label>
                    <input
                      type="text"
                      name="underwritingFee"
                      value={formData.underwritingFee}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Appraisal Fee</label>
                    <input
                      type="text"
                      name="appraisalFee"
                      value={formData.appraisalFee}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Document Fee</label>
                    <input
                      type="text"
                      name="documentFee"
                      value={formData.documentFee}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">📤</span>
                  Company Logo
                </h3>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                {logo && (
                  <div className="mt-4 text-center">
                    <img src={logo} alt="Company Logo" className="max-w-32 max-h-24 mx-auto border rounded" />
                  </div>
                )}
              </div>

              <button
                onClick={generatePDF}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center text-lg transition-colors"
              >
                <span className="mr-2">⬇️</span>
                Generate Term Sheet PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermSheetGenerator;
