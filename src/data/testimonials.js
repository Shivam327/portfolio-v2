


export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, TechStartup Inc.',
    company: 'TechStartup Inc.',
    content: 'Shivam delivered our MVP in record time. His understanding of scalable architecture and attention to performance optimization exceeded our expectations. The system handles 10x more traffic than initially planned.',
    rating: 5,
    project: 'E-commerce Platform MVP'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Operations Director',
    company: 'Manufacturing Corp',
    content: 'The ERP customization project transformed our workflow efficiency. What used to take 3 days now takes 3 hours. Shivam\'s business process understanding combined with technical expertise is rare.',
    rating: 5,
    project: 'ERP Workflow Automation'
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Product Manager',
    company: 'FinTech Solutions',
    content: 'Working with Shivam on our API infrastructure was seamless. He implemented robust monitoring, proper error handling, and documentation that our team can easily maintain and extend.',
    rating: 5,
    project: 'Financial API Platform'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'DevOps Engineer',
    company: 'CloudScale Systems',
    content: 'Shivam\'s infrastructure monitoring setup using Grafana and Prometheus gave us visibility we never had before. Our system uptime improved from 95% to 99.9% within weeks.',
    rating: 5,
    project: 'Infrastructure Monitoring'
  }
];

export const getTestimonialById = (id) => TESTIMONIALS.find(testimonial => testimonial.id === id);