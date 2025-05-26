import { Calendar, Users } from "lucide-react"
import { JSX } from "react";

interface EventService {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
}


export const eventServices: EventService[] = [
  {
    image: "/images/event-planning.jpg",
    title: "Corporate Events & Brand Experiences",
    description: "From strategic launches to immersive networking events, we design and deliver polished experiences that elevate your brand, engage your audience, and leave a lasting impact. Professionalism meets creativity in every event we craft.",
    icon: <Users className="h-6 w-6 text-red-600 dark:text-red-400" />,
    features: [
      "Conferences & Seminars",
      "Product Launches",
      "Award Ceremonies & Galas",
      "Corporate Retreats & Team Building",
      "Networking Events & Expos",
      "Awareness Campaigns"
    ]
  },
  {
    image: "/images/wedding-planning.jpg",
    title: "Weddings & Celebrations",
    description: "We bring love stories to life with heartfelt detail and elegance. Whether it's a grand celebration or an intimate affair, our wedding experiences are tailored to reflect each couple's unique journey, blending tradition, emotion, and style seamlessly.",
    icon: <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-red-600 dark:text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                      />
                    </svg>,
    features: [
      "Full-Service Wedding Planning",
      "Themed & Cultural Weddings",
      "Destination Weddings",
      "Engagements & Proposals",
      "Pre-Wedding Events",
      "Bachelor/Bachelorette nights",
      "Anniversaries & Vow Renewals"
    ]
  },
  {
    image: "/images/social-events.jpg",
    title: "Concerts & Experiences",
    description: "High-energy, trend-forward, and unforgettable — we curate social gatherings that captivate. From concerts and parties to pop-up events, we turn your vision into vibrant experiences that connect people and spark joy.",
    icon: <Calendar className="h-6 w-6 text-red-600 dark:text-red-400" />,
    features: [
      "Live Concerts & Music Festivals",
      "Parties & Themed Celebrations",
      "Youth Events & Campus Festivals",
      "Pop-ups & Experiential Installations",
      "Seasonal & Holiday Events"
    ]
  }
]
  
  
  // FAQ data
  export const faqs = [
    {
      question: "How far in advance should I book your event planning services?",
      answer:
        "We recommend booking our services at least 3-6 months in advance for corporate events and 6-12 months for weddings and large-scale events. However, we can accommodate shorter timelines depending on availability and the complexity of your event. For peak seasons, earlier booking is advised to secure your preferred date.",
    },
    {
      question: "What is your pricing structure for event planning?",
      answer:
        "Our pricing varies based on the scope, size, and complexity of your event. We offer different packages to suit various budgets and requirements, from full-service planning to day-of coordination. We provide transparent, detailed quotes after an initial consultation where we discuss your specific needs and expectations. Contact us for a customized quote based on your event requirements.",
    },
    {
      question: "Do you handle all aspects of event planning or can I choose specific services?",
      answer:
        "We offer both comprehensive event planning services and à la carte options. You can choose full-service planning or select specific services such as venue selection, vendor management, or day-of coordination. Our flexible approach allows you to customize our services based on your needs and budget, ensuring you get exactly the support you require for your event.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Yes, we pride ourselves on working with clients across various budget ranges. We'll help you prioritize elements of your event to maximize your budget while still creating a memorable experience. Our team is skilled at finding creative solutions and negotiating with vendors to ensure you get the best value without compromising on quality.",
    },
    {
      question: "Do you have preferred vendors or can I choose my own?",
      answer:
        "We have a network of trusted vendors we regularly work with, but we're also happy to work with vendors of your choice. Our goal is to ensure your event reflects your vision and preferences. If you have specific vendors in mind, we'll collaborate with them seamlessly. If you need recommendations, we can suggest reliable professionals from our network who match your style and budget.",
    },
  ]