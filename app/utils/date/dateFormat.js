export class DateFormat {
  static yyyyMMDD(date) {
    if (!date) return null;
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${year}-${month}-${day}`;
  }

  static yyyyMMDDHHMMSS(date) {
    if (!date) return null;
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    const hour = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
  }

  static isToday(date) {
    if (!date) return null;
    const dateInput = new Date(date);
    const currentDate = new Date();

    return (
      dateInput.getFullYear() === currentDate.getFullYear() &&
      dateInput.getMonth() === currentDate.getMonth() &&
      dateInput.getDate() === currentDate.getDate()
    );
  }
}
