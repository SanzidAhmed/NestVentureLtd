import React from "react";
import { MdDone } from "react-icons/md";

const HowDoesWorkNest = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-full relative">
          <img
            className="absolute top-0"
            src="https://i.ibb.co/8BJ3DCY/works-main.png"
            alt=""
          />
          <img src="https://i.ibb.co/Trqm3JT/works-shape1.png" alt="" />
        </div>
        <div>
          <h3 className="font-bold text-red-950 mb-2">Working Process </h3>
          <h1 className="font-bold text-3xl text-red-900 mb-2">
            How Does NEST Work{" "}
          </h1>
          <p>
            These steps ensure a comprehensive and structured approach from the
            initial application to the final disbursement of investment funds,
            fostering a successful partnership between NEST and the business.
          </p>
          <div className="mt-4 ">
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Application Submission{" "}
                </h2>
                <p>
                  SMEs and entrepreneurs submit their investment application to
                  NEST, including all required documents and financial
                  statements
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Initial Assessment
                </h2>
                <p>
                  NEST reviews the application to ensure it meets the basic
                  eligibility criteria and gathers initial insights into the
                  business's financial health and needs.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Due Diligence
                </h2>
                <p>
                  Conduct a thorough analysis of the applicant's financial
                  status, business model, market position, and growth potential.
                  This may include financial audits, market research, and risk
                  assessment.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Proposal Development
                </h2>
                <p>
                  Based on the due diligence findings, NEST develops a tailored
                  investment proposal outlining the terms, conditions, and
                  structure of the investment
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Approval Process
                </h2>
                <p>
                  The investment proposal is reviewed by NEST’s investment
                  committee or relevant authority for final approval. This step
                  may involve negotiations and adjustments based on feedback
                  from both parties
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Agreement Signing
                </h2>
                <p>
                  Once approved, a formal investment agreement is drafted and
                  signed by NEST and the applicant, detailing all terms,
                  conditions, and responsibilities
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Funds Disbursement
                </h2>
                <p>
                  Upon agreement execution, NEST disburses the investment funds
                  to the applicant. The disbursement process is managed
                  efficiently to ensure timely availability of funds for the
                  business’s needs.
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-4 mb-4">
              <p>
                <MdDone className="text-3xl text-red-900 hover:text-white hover:bg-red-700 rounded-full   " />
              </p>
              <div>
                <h2 className="text-2xl font-bold text-red-900 mb-2">
                  Ongoing Monitoring and Support
                </h2>
                <p>
                  After disbursement, NEST continues to monitor the investment,
                  providing ongoing support and guidance to ensure the business
                  achieves its growth objectives and meets the agreed-upon
                  milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesWorkNest;
