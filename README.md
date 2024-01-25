
# UnstopFrontend

UnstopFrontend is the frontend part of a train seat booking system, designed to efficiently manage seat reservations in a train coach with a capacity of 80 seats.
![UnstopFrontend Interface](https://i.ibb.co/CmKN6Fs/seatbooking.png)
## Problem Statement

1. The coach has 80 seats, with 7 seats per row except the last row which has 3 seats.
2. A person can reserve up to 7 seats at a time.
3. The priority is to book seats in one row.
4. If not possible, seats are booked as close together as possible.
5. Users can book multiple times until the coach is full.
6. Only the number of seats to be booked is required as input.
7. The system displays booked seat numbers and availability status.

## Setting up the Frontend in Local Environment

To set up UnstopFrontend locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sum1275/UnstopFrontend.git
2. **Update apiUrl**:
   In `src/app/core/services/seat-booking.service.ts`, update the `apiUrl` to point to your local server environment:
   ```typescript
   apiUrl = 'http://localhost:8084/';
3. **Update apiUrl**:
   In the `src/app/core/services/seat-booking.service.ts` file, update the `apiUrl` to point to your local server environment. This ensures that the application connects to the correct backend service while running locally.
   ```typescript
   apiUrl = 'http://localhost:8084/';
4. **Start the Server**:
   To initiate the application server, execute the following command in your terminal:
   ```bash
   ng serve
5. **Contributing**:
   Your contributions are essential to the development and improvement of the UnstopFrontend project. Here are the steps to contribute:

   1. **Fork the Project**: Begin by creating your own copy of the project on GitHub.
   2. **Create Your Feature Branch**: Start a new feature by using the command:
      ```git
      git checkout -b feature/AmazingFeature
      ```
   3. **Commit Your Changes**: After completing your feature, commit your changes with:
      ```git
      git commit -m 'Add some AmazingFeature'
      ```
   4. **Push to the Branch**: Upload your new feature to GitHub using:
      ```git
      git push origin feature/AmazingFeature
      ```
   5. **Open a Pull Request**: Finally, submit your changes for review to be potentially merged into the main project.

This section of the README.md provides a clear and structured guide for potential contributors to participate in enhancing the UnstopFrontend project.


   
