Feature: Need Help Form

   As a POC User I am able to fill
   The need help form in order to
   Ask for information

   Scenario: A POC User is able to fill the form
      Given the POC user is on the "main" page
      When they go to the "Contact us" page from the "about" tab
      And click on the "Request help" button
      And the user submits the form
      # Then a verification message is displayed