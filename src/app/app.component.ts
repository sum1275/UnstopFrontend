import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from './core/services/seat-booking.service';

interface Seat {
  row: string;
  seat_no: string;
  is_booked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seat-booking';
  response: Seat[] = [];
  selectedTickets=1;
  bookedSeat:any;

  constructor(private seatBookingService: SeatBookingService) {}

  ngOnInit(): void {
    this.refreshSeats();
  }

  refreshSeats(): void {
    this.seatBookingService.getAvailableSeats().subscribe((response) => {
      this.response = response.availableSeats;
      console.log(this.response);
    });
  }

  getRows(): string[] {
    return [...new Set(this.response.map(seat => seat.row))];
  }

  getSeatsForRow(row: string): Seat[] {
    return this.response.filter(seat => seat.row === row);
  }

  bookTicket(): void {
    this.seatBookingService.bookSeats(this.selectedTickets).subscribe((res) => {
      console.log('Booking Response:', res);
      if (res.status === 0) {
        // If the seat booking is successful, refresh the seats
        this.refreshSeats();
  this.bookedSeat=res.bookedSeats;
  console.log('bookedSeat: ',this.bookedSeat);

      }
    });
  }
}
