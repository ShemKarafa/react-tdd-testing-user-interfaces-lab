import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
  
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });
  
    // Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text identifying the content", () => {
    // Arrange
    render(<App />);
    
    // Act
    const image = screen.getByAltText("Shem");
    
    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/home/shem/Downloads/Picture2.jpg");
});
  
test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);
    
    // Act
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    
    // Assert
    expect(aboutMeHeading).toBeInTheDocument();
});
  
test("displays a paragraph for your biography", () => {
    // Arrange
    render(<App />);
    
    // Act
    const bioParagraph = screen.getByText(/I'm a full stack software developer/i);
    
    // Assert
    expect(bioParagraph).toBeInTheDocument();
});
  
test("displays a link to your GitHub page", () => {
    // Arrange
    render(<App />);
    
    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
    
    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/ShemKarafa");
});
  
test("displays a link to your LinkedIn page", () => {
    // Arrange
    render(<App />);
    
    // Act
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    
    // Assert
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/nicolous-hunter-8253882a5-5279b4257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app");
});