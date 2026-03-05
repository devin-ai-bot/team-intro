import React from 'react';
import { workflowSteps } from '../data/team';

const Workflow = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {workflowSteps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step Card */}
            <div className="bg-black/80 border-2 border-yellow-500 p-4 text-center min-w-[150px]">
              <div className="font-pixel text-xs text-yellow-400 mb-2">
                {step.from}
              </div>
              <div className="font-mono text-[10px] text-gray-400">
                {step.action}
              </div>
              <div className="mt-2 text-xl">→</div>
              <div className="font-pixel text-xs text-cyan-400 mt-2">
                {step.to}
              </div>
            </div>
            
            {/* Arrow (hidden on mobile between cards) */}
            {index < workflowSteps.length - 1 && (
              <div className="hidden md:block font-pixel text-2xl text-green-500 animate-pulse">
                →
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Loop indicator */}
      <div className="text-center mt-6">
        <p className="font-mono text-xs text-gray-500">
          [WORKFLOW LOOP: DEVIN → DYLAN → DINA → DEVIN]
        </p>
      </div>
    </div>
  );
};

export default Workflow;
