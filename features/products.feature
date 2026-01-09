Feature: Products

  Scenario: Add product to cart after login
    Given I am logged in
    When I add a product to the cart
    Then the product should be added successfully
