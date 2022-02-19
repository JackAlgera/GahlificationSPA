
class TimeService {
  public getDisplayTime(dateStr: string) {
    const date = new Date(dateStr);

    return `${date.getHours() < 9 ? '0' + date.getHours() : date.getHours()}h${date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()}`;
  }

  public getDisplayDate(dateStr: string) {
    const date = new Date(dateStr);

    return `${date.getMonth() < 9 ? '0' + date.getMonth() : date.getMonth()}/${date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}`;
  }
}

export default new TimeService();
