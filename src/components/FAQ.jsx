import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import {faqData} from '../Data/data'

const FAQSection = () => {
  return (
    <Box minH="100vh" mb={12} className=" flex flex-col items-center">
      <Box my={10}>
        <Heading as="h1" className="text-4xl font-bold">
          FAQ
        </Heading>
      </Box>
      <Box w={'90%'}>
        <Accordion allowToggle>
          {faqData.map((item, index) => (
            <AccordionItem className="border-none" key={index}>
              <h2>
                <AccordionButton className=" dark:shadow-lg h-16 my-2">
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

// const faqData = [
//   {
//     question: "How can I place an order?",
//     answer:
//       "To place an order, simply browse our website, select the desired products, and add them to your cart. Proceed to the checkout page, provide the necessary information, and complete the payment process. Once the order is confirmed, you will receive an email notification.",
//   },
//   {
//     question: "What payment methods do you accept?",
//     answer:
//       "We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), PayPal, and Google Pay. Choose the method that is most convenient for you during the checkout process.",
//   },
//   // Add more FAQ items here...
// ];

export default FAQSection;
