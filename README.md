# ST10518561 - Part 2 - WEDE5020
Student: Zethembiso Mpanza | ST10518561

## PART 1: FEEDBACK AND FIXES [10 MARKS]

### Lecturer Feedback Received in Part 1:
1. Images missing alt attributes and title attributes
2. Navigation links were not consistent across all pages
3. No semantic HTML5 tags used (only divs)
4. File structure was disorganized - CSS was inside HTML

### Fixes Implemented for Part 2 - Comprehensive Updates:

#### 1. Fixed Images Accessibility:
- BEFORE (Part 1): <img src="image.jpg">
- AFTER (Part 2): <img src="Images/image.jpg" alt="Description of product" title="Product Name">
- Added alt and title to ALL 12 images across 5 pages

#### 2. Fixed Navigation Consistency:
- BEFORE: Some pages had broken links to enquiry.html
- AFTER: Created same <nav> with <ul><li><a> on ALL pages: Home, About, Products, Enquiry, Contact
- All links now use relative paths and work correctly

#### 3. Fixed Semantic Structure:
- BEFORE: Used only <div> tags
- AFTER: Added <header>, <nav>, <main>, <section>, <article>, <footer> on all pages for better SEO and accessibility

#### 4. Fixed File Organization:
- BEFORE: CSS was internal <style> in HTML
- AFTER: Created external folder CSS/ with external stylesheet CSS/style.css linked in all 5 HTML files using <link rel="stylesheet" href="CSS/style.css">

### Summary:
All Part 1 feedback has been comprehensively addressed and documented. Website now meets accessibility, consistency, semantic and organization standards.

## References [5 Marks]
- W3Schools. 2023. CSS Flexbox. [Online]. Available at: https://www.w3schools.com/css/css3_flexbox.asp [Accessed 20 September 2025]
- MDN Web Docs. 2023. CSS Grid Layout. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout [Accessed 20 September 2025]
- W3Schools. 2023. CSS Media Queries - Responsive Web Design. [Online]. Available at: https://www.w3schools.com/css/css3_mediaqueries.asp [Accessed 20 September 2025]