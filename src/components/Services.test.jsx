import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from './Services';

describe('Services Component', () => {
  it('renders the "Our Services" heading and introductory text', () => {
    render(<Services />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(
      screen.getByText(/We offer end-to-end digital solutions designed with a brutalist edge and engineered for performance./i)
    ).toBeInTheDocument();
  });

  it('renders all service titles', () => {
    render(<Services />);
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mobile Apps')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Design')).toBeInTheDocument();
    expect(screen.getByText('Digital Strategy')).toBeInTheDocument();
  });

  it('renders all service descriptions', () => {
    render(<Services />);
    expect(
      screen.getByText(/Custom, high-performance web applications built with modern frameworks like React and Next.js./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Cross-platform mobile experiences that look great and feel native on iOS and Android./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Bold, intuitive, and user-centric designs that make your brand stand out from the noise./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Comprehensive technical roadmaps and product strategies to scale your business./i)
    ).toBeInTheDocument();
  });

  it('renders "Learn more" buttons for each service', () => {
    render(<Services />);
    const learnMoreButtons = screen.getAllByText(/Learn more/i);
    expect(learnMoreButtons).toHaveLength(4);
  });
});
