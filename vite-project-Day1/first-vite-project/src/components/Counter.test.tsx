import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {

  it('should render counter with initial count value from props', () => {
    render(<Counter inputCount={5} />);
    const heading = screen.getByText('Count : 5');
    expect(heading).toBeInTheDocument();
  });
     

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test 1: Initial Render
  it('should render counter with initial count value from props', () => {
    render(<Counter inputCount={5} />);
    const heading = screen.getByText('Count : 5');
    expect(heading).toBeInTheDocument();
  });

  // Test 2: Initial Render with 0
  it('should render counter with initial count of 0', () => {
    render(<Counter inputCount={0} />);
    const heading = screen.getByText('Count : 0');
    expect(heading).toBeInTheDocument();
  });

  // Test 3: Increment Button
  it('should increment count when ++ button is clicked', () => {
    render(<Counter inputCount={5} />);
    const incrementBtn = screen.getByRole('button', { name: '++' });
    
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('Count : 6')).toBeInTheDocument();
  });

  // Test 4: Multiple Increments
  it('should increment count multiple times when ++ button is clicked multiple times', () => {
    render(<Counter inputCount={0} />);
    const incrementBtn = screen.getByRole('button', { name: '++' });
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('Count : 3')).toBeInTheDocument();
  });

  // Test 5: Decrement Button
  it('should decrement count when -- button is clicked', () => {
    render(<Counter inputCount={5} />);
    const decrementBtn = screen.getByRole('button', { name: '--' });
    
    fireEvent.click(decrementBtn);
    
    expect(screen.getByText('Count : 4')).toBeInTheDocument();
  });

  // Test 6: Multiple Decrements
  it('should decrement count multiple times when -- button is clicked multiple times', () => {
    render(<Counter inputCount={5} />);
    const decrementBtn = screen.getByRole('button', { name: '--' });
    
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    
    expect(screen.getByText('Count : 2')).toBeInTheDocument();
  });

  // Test 7: Negative Count
  it('should allow count to go negative', () => {
    render(<Counter inputCount={0} />);
    const decrementBtn = screen.getByRole('button', { name: '--' });
    
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    
    expect(screen.getByText('Count : -2')).toBeInTheDocument();
  });

  // Test 8: Input Field Change
  it('should update count when input field value is changed', () => {
    render(<Counter inputCount={5} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    
    fireEvent.change(input, { target: { valueAsNumber: 10 } });
    
    expect(screen.getByText('Count : 10')).toBeInTheDocument();
  });

  // Test 9: Input Field with Zero
  it('should update count to 0 when input field receives zero', () => {
    render(<Counter inputCount={5} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    
    fireEvent.change(input, { target: { valueAsNumber: 0 } });
    
    expect(screen.getByText('Count : 0')).toBeInTheDocument();
  });

  // Test 10: Input Field with Negative Number
  it('should accept negative numbers in input field', () => {
    render(<Counter inputCount={0} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    
    fireEvent.change(input, { target: { valueAsNumber: -15 } });
    
    expect(screen.getByText('Count : -15')).toBeInTheDocument();
  });

  // Test 11: Combined Operations
  it('should maintain correct count after multiple increment and decrement operations', () => {
    render(<Counter inputCount={0} />);
    const incrementBtn = screen.getByRole('button', { name: '++' });
    const decrementBtn = screen.getByRole('button', { name: '--' });
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('Count : 2')).toBeInTheDocument();
  });

  // Test 12: Input and Button Operations Combined
  it('should work correctly after input change followed by button clicks', () => {
    render(<Counter inputCount={0} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    const incrementBtn = screen.getByRole('button', { name: '++' });
    
    fireEvent.change(input, { target: { valueAsNumber: 10 } });
    fireEvent.click(incrementBtn);
    
    expect(screen.getByText('Count : 11')).toBeInTheDocument();
  });

  // Test 13: Input Field Value Attribute
  it('should have correct value attribute in input field', () => {
    render(<Counter inputCount={7} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    
    expect(input.value).toBe('7');
  });

  // Test 14: Input Field Type
  it('should render input field with type="number"', () => {
    render(<Counter inputCount={5} />);
    const input = screen.getByPlaceholderText('Count') as HTMLInputElement;
    
    expect(input.type).toBe('number');
  });

  // Test 15: Buttons Rendering
  it('should render both increment and decrement buttons', () => {
    render(<Counter inputCount={5} />);
    
    expect(screen.getByRole('button', { name: '++' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '--' })).toBeInTheDocument();
  });
});
