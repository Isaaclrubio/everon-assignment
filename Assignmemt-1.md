# Software Engineer, Quality Assurance & Automation Assignment

## User Story Assignment
Your team received the following user story for the next sprint:

### User Story
### Background:
The User of “Lost&Found” website should be able to register a lost item

### Design specification:
The form “Register a lost item” should contain inputs for name of the client, date, time, description and
an image of the lost item.

### Acceptance criteria:
After applying the form a new item should appear in the list.

## Questions Section
Please do the following:
1. Review the user story and based on the provided data answer the following questions:
   - Is there enough information for development and testing?
   - What is missing?
2. Propose a solution on how the user story can be improved.
3. Write a checklist on what has to be tested based on current requirements.

## Answers
### Is there enough information for development and testing?  
There's not enough information for the development and testing of the feature/component

### What is missing?
The Design specifications and Acceptance criteria are only mentioning the happy path,
however there are also a few things missing.  
The developer and QA need more information in the design specifications in order to implement the feature.  

Here's a series of questions and comments that I would need to be answered before starting the development and QA process.
**General Issues**
   - Where should the form be displayed? (In which page)
   - Is there going to be a submit button?
   - If there's a submit button what should it read?
   - Should the form have a title/header?
   - Is there going to be a visual aid for the development and QA process?
   - Where should the new item appear, at the top or the bottom of the list?
   - Are all the fields required?

**Name of clients**  
   - Is this going to be an input text or a dropdown list?
   - If it's an input text, what's the maximum and minimum number of characters?
   - Does it accept special characters, alphanumeric or only alphabetic characters?
   - Is there going to be an error message when no name client is provided?  

**Date and Time**
   - Is it going to be an input with free text entry or a calendar?
   - What's the format that will be used to display the date and time?
   - Should the user be able to enter a time that is in the future?
   - Is there going to be displayed an error message if the user tries to enter a future date?
   - Is there going to be an error message if no date and time is provided?

**Description**
   - Does it accept special characters, alphanumeric or only alphabetic characters?
   - What's the maximum and minimum of characters?
   - Is it going to accept formatted text? (bold, italic, underlined, links, bullets, etc.)
   - Is it a requiered field? If it is what should be shown to the user if it's not provided?
   - Is there going to be an error label displayed if the user enters a not supported character?

**Image/Attachment**
   - Is it going to support only one image at a time or multiple attachments?
   - Is it a required field even if the user doesn't have an image of the lost item?
   - What are the supported format images?
   - What's the largest image file size the user can upload?
   - If no image is provided, is there going to be a message for the user?

### Propose a solution on how the user story can be improved.
1. Providing a visual design
2. Describing the different workflows with images rather than with text
3. Writing all the elements that need to be present in the feature (it seems the submit button is missing)
4. Defining the errors that may occur and that need to be handled
5. Explecitly highlighting what's in scope and not in scope for the user story
6. A more descriptive acceptance criteria

### Write a checklist on what has to be tested based on current requirements.
Based on the current requirements and considering only the happy path as mentioned on 
the user story.
1. The form is displayed on the correct page
2. Each field is visible on the form
3. All the fields can be filled with information
4. Submit/apply the form **somehow**
5. Validate the list is updated and the new lost item is displayed