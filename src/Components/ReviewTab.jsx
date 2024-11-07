import React, { useState } from 'react';

const ReviewTab = () => {
  const [active, setActive] = useState('description');
  return (
    <div className="bg-[#F6F7FB]">
      {/* tabs */}
      <div className="flex items-center gap-8 text-lg font-medium">
        <button
          onClick={() => setActive('description')}
          className={`pb-3 border-b-[3px] transition-all duration-300 ease-in-out ${
            active == 'description'
              ? 'border-[#3979F0] text-[#3979F0]'
              : 'text-textLight border-transparent'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActive('specifications')}
          className={`pb-3 border-b-[3px] transition-all duration-300 ease-in-out ${
            active == 'specifications'
              ? 'border-[#3979F0] text-[#3979F0]'
              : 'text-textLight border-transparent'
          }`}
        >
          Specifications
        </button>
      </div>

      {/* tab items */}
      <div>
        {active == 'description' && (
          <div className="pt-6 text-textLight space-y-3 transition duration-300">
            {/* description */}
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
          </div>
        )}
        {active == 'specifications' && (
          <div className="pt-6 text-textLight space-y-3 transition duration-300">
            {/* description */}
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
            <p>
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
              We’ve created a full-stack structure for our working workflow
              processes, were from the funny the century initial all the made,
              have spare to negatives. But the structure was from the funny the
              century rather, initial all the made, have spare to negatives.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewTab;
