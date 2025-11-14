import React from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import StatsSection from './components/stats-section/StatsSection';
import ProcessSection from './components/process-section/ProcessSection';
import DealBoostSection from './components/deal-boost-section/DealBoostSection';
import ReviewContentSection from './components/review-content-section/ReviewContentSection';
import PaybackAuthSection from './components/payback-auth-section/PaybackAuthSection';
import ProductComparisonSection from './components/product-comparison-section/ProductComparisonSection';
import BetaBenefitsSection from './components/beta-benefits-section/BetaBenefitsSection';
import ReferenceDownloadSection from './components/reference-download-section/ReferenceDownloadSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <MainPage />
      <StatsSection />
      <ProcessSection />
      <DealBoostSection />
      <ReviewContentSection />
      <PaybackAuthSection />
      <ProductComparisonSection />
      <BetaBenefitsSection />
      <ReferenceDownloadSection />
      <Footer />
    </div>
  );
}

export default App;
