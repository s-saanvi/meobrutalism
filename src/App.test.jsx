import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Structure', () => {
  it('renders the Navbar with branding', () => {
    render(<App />);
    const brandingElements = screen.getAllByText('CodingCup Labs');
    expect(brandingElements.length).toBeGreaterThan(0);
    expect(brandingElements[0]).toBeInTheDocument();
  });

  it('renders the Hero section', () => {
    render(<App />);
    expect(screen.getByText(/We Build/i)).toBeInTheDocument();
    expect(screen.getByText(/Start a Project/i)).toBeInTheDocument();
  });

  it('renders the Services section', () => {
    render(<App />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  it('renders the Footer section', () => {
    render(<App />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
