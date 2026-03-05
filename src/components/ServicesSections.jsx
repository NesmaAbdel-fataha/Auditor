import React from 'react'
import img from '../assets/accServ1.png'
import img2 from '../assets/aduting.png'
import img3 from '../assets/tax.png'
import img4 from '../assets/investement2.png'
import img5 from '../assets/ssrt.png'
import img6 from '../assets/manger.png'
import '../App.css'
import { Link } from 'react-router-dom'

// Scoped styles for Services Section
const serviceStyles = {
  container: {
    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,1) 100%)',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#2c3e50',
    letterSpacing: '-0.5px',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    marginBottom: '3rem',
    fontWeight: '400',
  },
  cardImage: {
    height: '200px',
    objectFit: 'cover',
    objectPosition: 'center',
    backgroundColor: '#f8f9fa',
  },
  card: {
    cardContainer: {
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      height: '100%',
    },
    cardHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.12)',
    },
  },
  serviceTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  serviceFeature: {
    fontSize: '0.95rem',
    color: '#555',
    marginBottom: '0.6rem',
    lineHeight: '1.5',
  },
  featureIcon: {
    marginRight: '0.8rem',
    color: '#27ae60',
    fontWeight: '600',
  },
}

// ServiceCard Component
const ServiceCard = ({ image, title, features }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="card border-0 rounded-4 shadow-sm h-100"
      style={{
        ...serviceStyles.card.cardContainer,
        ...(isHovered && serviceStyles.card.cardHover),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="overflow-hidden" style={{ height: '200px' }}>
        <img
          src={image}
          className="w-75 mx-auto d-block"
          style={serviceStyles.cardImage}
          alt={title}
        />
      </div>

      {/* Content Container */}
      <div className="card-body d-flex flex-column p-4">
        <h3 className="card-title mb-3" style={serviceStyles.serviceTitle}>
          {title}
        </h3>

        {/* Features List */}
        <div className="flex-grow-1">
          {features.map((feature, index) => (
            <p key={index} className="mb-2" style={serviceStyles.serviceFeature}>
              <i
                className="fas fa-check"
                style={serviceStyles.featureIcon}
              ></i>
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

// Linked ServiceCard Component
const LinkedServiceCard = ({ to, image, title, features }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Link to={to} className="text-decoration-none text-reset h-100">
      <div
        className="card border-0 rounded-4 shadow-sm h-100"
        style={{
          ...serviceStyles.card.cardContainer,
          ...(isHovered && serviceStyles.card.cardHover),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="overflow-hidden" style={{ height: '200px' }}>
          <img
            src={image}
            className="w-100"
            style={serviceStyles.cardImage}
            alt={title}
          />
        </div>

        {/* Content Container */}
        <div className="card-body d-flex flex-column p-4">
          <h3 className="card-title mb-3" style={serviceStyles.serviceTitle}>
            {title}
          </h3>

          {/* Features List */}
          <div className="flex-grow-1">
            {features.map((feature, index) => (
              <p key={index} className="mb-2" style={serviceStyles.serviceFeature}>
                <i
                  className="fas fa-check"
                  style={serviceStyles.featureIcon}
                ></i>
                {feature}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

const ServicesSections = () => {
  // Services Data
  const services = [
    {
      id: 1,
      image: img,
      title: 'Accounting Services',
      features: [
        'Accounting System Setup',
        'Bookkeeping & Transactions',
        'Financial Statements Preparation',
        'Payroll & Social Insurance',
      ],
    },
    {
      id: 2,
      image: img6,
      title: 'System Selection',
      features: [
        'Assess requirements & workflows',
        'Evaluate vendor fit and options',
        'Implementation roadmap & planning',
        'Vendor-neutral recommendations',
      ],
      isLinked: true,
      linkTo: '/ServicesPrograms',
    },
    {
      id: 3,
      image: img2,
      title: 'Auditing Services',
      features: [
        'Financial Audit',
        'Records Examination',
        'Internal Controls Review',
        'Audit Reports',
      ],
    },
    {
      id: 4,
      image: img3,
      title: 'Tax Services',
      features: [
        'Tax Return Preparation',
        'Income Tax & VAT',
        'Tax Reviews',
        'Tax Consulting',
      ],
    },
    {
      id: 4,
      image: img4,
      title: 'Company Formation & Investment',
      features: [
        'Company Formation',
        'Business Licensing',
        'Legal Documentation',
        'Investment Advisory',
      ],
    },
    {
      id: 5,
      image: img5,
      title: 'Feasibility & Consulting',
      features: [
        'Feasibility Studies',
        'Financial Analysis',
        'Business Consulting',
        'Project Financing',
      ],
    },
    
  ]

  return (
    <section className="py-5" style={serviceStyles.container}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mt-5 mb-5">
          <h2 className="fw-bold" style={serviceStyles.sectionTitle}>
            Our Services
          </h2>
          <p style={serviceStyles.sectionSubtitle}>
            We provide a range of professional services to meet your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service) =>
            service.isLinked ? (
              <div key={service.id} className="col-12 col-sm-6 col-lg-4">
                <LinkedServiceCard
                  to={service.linkTo || '/ServicesPrograms'}
                  image={service.image}
                  title={service.title}
                  features={service.features}
                />
              </div>
            ) : (
              <div key={service.id} className="col-12 col-sm-6 col-lg-4">
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  features={service.features}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default ServicesSections