export function getRandomDate() {
    // Set the start and end date range
    const startDate = new Date('2000-01-01');
    const endDate = new Date('2025-12-31');
    // Calculate a random time between the start and end date
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  
    // Create a new date using the random time
    const randomDate = new Date(randomTime);
  
    // Return the formatted date (adjust the format as needed)
    return randomDate.toISOString().split('T')[0];
  }
  
  // Example usage
//   const randomDate = getRandomDate();
//   console.log(typeof(randomDate));
  