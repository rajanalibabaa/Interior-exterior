import { lazy, Suspense } from 'react'
import HeroBannerWithEnquiryForm from '../components/HeroBanner'
import WeAre from '../components/WeAre'

// Lazy load components that are below the fold
const WhyChooseUs = lazy(() => import('../components/WhyChoooseUs'))
const AutoSlideSection = lazy(() => import('../components/AutoSlideTeraformSection'))
const ServicesSection = lazy(() => import('../components/OurServicesSections'))
const HowItWorks = lazy(() => import('../components/HowItsWorks'))
const CenterBanner = lazy(() => import('../components/CenterBanner'))
const FAQSection = lazy(() => import('../components/Faq'))

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
)

const HomePage = () => {
  return (
    <>
      {/* Critical above-the-fold content - loads immediately */}
      <HeroBannerWithEnquiryForm />
      <WeAre />

      {/* Below-the-fold content - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AutoSlideSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CenterBanner />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>
    </>
  )
}

export default HomePage