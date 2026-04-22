import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the branding correctly', () => {
    render(<Navbar />);
    expect(screen.getByText('CodingCup Labs')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Navbar />);
    expect(screen.getByText("Let's Talk")).toBeInTheDocument();
  });
});
