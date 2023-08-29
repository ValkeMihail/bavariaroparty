export function formatDateAndTime(dateTimeString : string) {
  const dateTime = new Date(dateTimeString);
  
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
    
  });
  
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return `${formattedDate} | ${formattedTime}`;
}


export function getDayAndMonth(dateTimeString : string) {
  const dateTime = new Date(dateTimeString);
  
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
  
  return `${formattedDate}`;
}
