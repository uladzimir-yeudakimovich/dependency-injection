export class LoggingService {
  logStatusChange(stasus: string) {
    console.log('A server status changed, new status: ' + stasus);
  }
}