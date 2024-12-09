function Ticket(age) {
    if (age <= 12) {
      console.log("ticket is 10$");
    } else if (age > 12 && age < 18) {
      console.log("ticket is 15$");
    } else {
      console.log("ticket is 20$");
    }
}
  
Ticket(11)
Ticket(15)
Ticket(18)