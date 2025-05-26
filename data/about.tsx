import { Award, User } from "lucide-react";

export const teamMembers = [
  {
    name: "Duleetha Sandaruwan",
    role: "Founder and Director",
    image: "/images/team/duleetha-sandaruwan.png",
    description: "At TriosLK, we believe every event is a story waiting to be told - our passion is bringing that story to life with elegance, creativity, and precision. It's not just about planning; it's about creating moments that last forever.",
    socialmeadia: {
        linkedin: "https://www.linkedin.com/in/duleetha-sandaruwan-123456789/",
        facebook: "https://www.facebook.com/duleetha.sandaruwan",
        twitter: "https://twitter.com/duleetha_sandaruwan",
        instagram: "https://www.instagram.com/duleetha_sandaruwan/",
    }
  },
  {
    name: "Lasitha Renuka",
    role: "Co-Founder",
    image: "/images/team/nadeesha-perera.jpg",
    description: "Nadeesha drives the technical direction of Trios.LK, ensuring our products are cutting-edge and user-friendly.",
    socialmeadia: {
        linkedin: "https://www.linkedin.com/in/nadeesha-perera-123456789/",
        facebook: "https://www.facebook.com/nadeesha.perera",
        twitter: "https://twitter.com/nadeesha_perera",
        instagram: "https://www.instagram.com/nadeesha_perera/",
    }
  }
];


export const whyChooseUs = [
  {
    title: "Creativity & Innovation",
    description: "We love thinking outside the box! Our team brings fresh ideas and unique concepts to every event, ensuring your special occasion is anything but ordinary.",
    icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
  },
  {
    title: "Seamless Experience",
    description: "We’re all about making things easy for you. From the moment you share your vision, we handle every detail so you can relax and enjoy the event without stress.",
    icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
  },
  {
    title: "Personalized Service",
    description: "Your event is all about you! We take the time to understand your needs, preferences, and style, ensuring every aspect reflects your personality and desires.",
    icon: <User className="h-6 w-6 text-red-600" />
  },
  {
    title: "Attention to Detail",
    description: "No detail is too small! We’re perfectionists when it comes to making sure everything runs smoothly, from start to finish, so your event is flawless.",
    icon: <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3m18 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
  },
  {
    title: "Customer Satisfaction",
    description: "We’re happy when you’re happy. We go above and beyond to make sure you and your guests have an unforgettable, worry-free experience.",
    icon: <Award className="h-6 w-6 text-red-600" />
  }
];



