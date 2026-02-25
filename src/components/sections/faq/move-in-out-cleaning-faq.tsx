import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function MoveInOutCleaningFAQ() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-foreground">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is included in a move-in/move-out cleaning?</AccordionTrigger>
                    <AccordionContent>
                        Our move-in/move-out cleaning is a deep clean of the entire home. This includes cleaning inside cabinets and drawers, inside the oven and refrigerator, all baseboards, light fixtures, and windows. We prepare the home for the next resident to ensure it is in pristine condition.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Do I need to be present for the cleaning?</AccordionTrigger>
                    <AccordionContent>
                        No, you do not need to be present. As long as we have access to the property, service can be completed. We will coordinate with you to arrange for key pickup and drop-off if necessary.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How long does a move-in/move-out cleaning take?</AccordionTrigger>
                    <AccordionContent>
                        The duration depends on the size and condition of the property. On average, a move-in/move-out cleaning can take anywhere from 4 to 8 hours. We can provide a more accurate time estimate when you request a quote.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Do you provide the cleaning supplies and equipment?</AccordionTrigger>
                    <AccordionContent>
                        Cleaning professionals arrive prepared for the service. We use high-quality, eco-friendly products to support great results.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
  }
  
