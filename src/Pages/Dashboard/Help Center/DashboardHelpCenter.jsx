import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/Components/ui/accordion';
const DashboardHelpCenter = () => {
  const faq = [
    {
      title: 'When will the seller send out the order?',
      description:
        "After successful payment, the seller will be preparing the shipment and send the goods in due time. If the shipment is not completed in the required time on the order page, AliExpress will close the order and return all the funds to you. If you don't want this order anymore, you can submit cancellation request by clicking How do I cancel an order?If the seller does not respond to your request within 48 hours, the order will be automatically closed and refund will be returned to your account. Please contact the sellers if they refuse to cancel your order as the cancellation might cause losses to the seller while he/she is preparing the shipment.",
    },
    {
      title: 'What can I do if my order is late and I have not received it.',
      description:
        "If your order is late, we recommend checking the tracking information provided in the shipping confirmation email. Sometimes, delays can occur due to customs processing, weather conditions, or other unforeseen circumstances. If the estimated delivery date has passed and you still haven't received your package, please contact our customer service team for assistance. We can help you investigate the issue, contact the shipping carrier, and, if necessary, offer a refund or send a replacement. We are committed to ensuring that you receive your order as quickly as possible.",
    },
    {
      title: 'How To Get Coupons Or Discounts?',
      description:
        "We frequently offer promotions and discounts to help you save on your purchases. To take advantage of these offers, make sure to subscribe to our newsletter, where we regularly send out exclusive coupon codes and special deals. You can also check our website's homepage for seasonal sales and limited-time promotions. Additionally, consider creating an account with us to access personalized offers based on your shopping history. Follow us on social media to stay updated on flash sales and discount events that you won’t want to miss.",
    },
    {
      title:
        'The product I received does not match the description. What can I do ?',
      description:
        'If the product you received does not match the description provided on the website, please contact our customer service team immediately. We ask that you provide clear photos of the product, as well as details about the discrepancies. Once we review the information, we will work with you to resolve the issue, either by offering a replacement or issuing a refund. In some cases, you may be asked to return the product, and we will cover any return shipping costs if the error is confirmed on our part.',
    },
    {
      title: 'How Do I Register On AliExpress?',
      description:
        "Registering on AliExpress is simple and free. To create an account, go to the AliExpress homepage and click on the 'Join' or 'Register' button located at the top right corner of the page. You will be prompted to enter your email address and create a password. Alternatively, you can sign up using your social media accounts, such as Facebook or Google. Once your account is created, you will have access to a personalized dashboard, where you can manage your orders, track shipments, and save your favorite items.",
    },
    {
      title: 'How To Cancel My Order?',
      description:
        "If you wish to cancel an order, it's important to act quickly. You can request a cancellation directly from your order history before the item has been shipped. Log into your account, navigate to the 'My Orders' section, and select the order you want to cancel. Click on the 'Cancel Order' button, and confirm your request. If the item has already been shipped, the cancellation may not be possible. In that case, you will need to follow our return process once the product arrives. Please note that cancellation requests may take some time to process, and you will receive a confirmation once it’s done.",
    },
    {
      title: 'How To Delete My Account?',
      description:
        "If you wish to delete your account, you can do so by contacting our customer support team. We will guide you through the process to ensure that your account and personal information are securely removed from our system. Please note that once your account is deleted, it cannot be recovered, and any ongoing orders, saved items, or account information will be permanently lost. If you're sure you want to proceed, reach out to us, and we'll handle the deletion process within a few business days.",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-medium text-3xl pb-8 border-b border-[#C5C5C5]">
          Help Center
        </h2>
      </div>
      <div>
        {faq?.map((item) => (
          <Accordion key={item?.title} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item?.title}</AccordionTrigger>
              <AccordionContent>{item?.description}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default DashboardHelpCenter;
