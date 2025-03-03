import { accordionContent } from "~/constantData";

const Accordion = () => {
  return (
    <div className="col-span-full items-center justify-center max-sm:flex lg:col-start-2 lg:col-end-12">
      <div className="bg-secondary-bg my-10 rounded-2xl px-5 py-6 shadow-black max-sm:max-w-[280px] sm:p-8 lg:my-18 lg:px-20 lg:py-12">
        {/* Title */}
        <h4 className="font-secondary dark:text-primary font-medium lg:text-2xl">
          Frequently Asked Questions
        </h4>
        {/* Faqs */}
        <div className="mt-4 space-y-2 lg:mt-6">
          {accordionContent.map((content, idx) => (
            <details
              key={idx}
              name="faq"
              className="bg-primary text-secondary-text shadow-pink rounded-lg p-2 lg:p-3"
            >
              <summary className="cursor-pointer list-none lg:text-xl lg:font-medium">
                {content.question}
              </summary>
              <p className="text-secondary p-1 lg:p-1">{content.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Accordion;
