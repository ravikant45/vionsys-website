export interface FAQItem {
    question: string;
    answer: string;
    qid: React.Key | null | undefined;
  }
  
  const ProductFAQ: FAQItem[] = [
    {
      question: "Q. What services do you offer?",
      answer:
        "We offer a wide range of product development services including product strategy, design, development and testing.",
      qid: 1,
    },
    {
      question: "Q. How long does the product development process take?",
      answer:
        "The duration of the product development process varies depending on the complexity of the project. We work closely with our clients to establish realistic timelines and ensure timely delivery.",
      qid: 2,
    },
    {
      question: "Q. Do you provide ongoing support after product launch?",
      answer:
        "Yes, we offer comprehensive support services to ensure the smooth operation of your product post-launch. Our support team is available to address any issues or concerns you may have.",
      qid: 3,
    },
    {
      question: "Q. Can you help with product marketing?",
      answer:
        "While our primary focus is on product development, we can provide guidance on marketing strategies and connect you with trusted partners who specialize in marketing services.",
      qid: 4,
    },
    {
      question: "Q. What industries do you specialize in?",
      answer:
        "We have experience working across various industries including technology, healthcare, finance, e-commerce and more. Our adaptable approach allows us to cater to the unique needs of each industry.",
      qid: 5,
    },
    {
        question: "Q. How do you ensure the security of the products you develop?",
        answer:
          "Security is a top priority in all our development projects. We employ industry-standard security measures, conduct rigorous testing and adhere to best practices to safeguard your product against potential threats. Additionally, we stay updated on the latest security trends and continuously monitor and improve the security posture of our products throughout their lifecycle. ",
        qid: 6,
      },
  ];
  
  export default ProductFAQ;
  