import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main heading text correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/We Build/i)).toBeInTheDocument();
    expect(screen.getByText(/Badass/i)).toBeInTheDocument();
    expect(screen.getByText(/Software./i)).toBeInTheDocument();
  });

  it('renders the company description', () => {
    render(<Hero />);
    expect(
      screen.getByText(/CodingCup Labs is a digital studio crafting minimalist, high-performance web applications with bold designs./i)
    ).toBeInTheDocument();
  });

  it('renders the call-to-action buttons', () => {
    render(<Hero />);
    expect(screen.getByText(/Start a Project/i)).toBeInTheDocument();
    expect(screen.getByText(/View Our Work/i)).toBeInTheDocument();
  });

  it('renders the floating tag', () => {
    render(<Hero />);
    expect(screen.getByText(/Innovating Digital Experiences/i)).toBeInTheDocument();
  });
});
