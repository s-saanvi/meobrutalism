import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders branding text and slogan', () => {
    render(<Footer />);
    expect(screen.getByText('CodingCup Labs')).toBeInTheDocument();
    expect(
      screen.getByText(/Building unapologetically bold digital experiences/i)
    ).toBeInTheDocument();
  });

  it('renders company links', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Our Work')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('renders contact details', () => {
    render(<Footer />);
    expect(screen.getByText('hello@codingcuplabs.com')).toBeInTheDocument();
    expect(screen.getByText(/123 Brutal Ave, Suite 404/i)).toBeInTheDocument();
  });

  it('renders dynamic copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightRegex = new RegExp(`© ${currentYear} CodingCup Labs`);
    expect(screen.getByText(copyrightRegex)).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });
});
