import { render, screen } from '@testing-library/react';
import App from './App';

describe('test App.js', () => {
  test('should no longer display react template ', () => {
    //When
    render(<App />);

    //Then
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).not.toBeInTheDocument();
  })

  test('should display header section',()=>{
    //Given

    //When
      render(<App/>);
      const headerElement = screen.getByText("Comment 3000")

    //Then
    expect(headerElement).toHaveTextContent("Comment 3000")
  })

})


