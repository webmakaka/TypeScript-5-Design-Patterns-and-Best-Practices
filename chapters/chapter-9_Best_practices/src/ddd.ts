// Domain Event
class UserRegisteredEvent {
    constructor(public readonly userId: string, public readonly email: string) {}
  }

  class EventDispatcher {
    private listeners: Function[] = [];
  
    addListener(listener: Function) {
      this.listeners.push(listener);
    }
  
    dispatch(event: any) {
      this.listeners.forEach(listener => listener(event));
    }
  }
  
  // User Service
  class UserService {
    private eventDispatcher: EventDispatcher;
  
    constructor(eventDispatcher: EventDispatcher) {
      this.eventDispatcher = eventDispatcher;
    }
  
    registerUser(userId: string, email: string) {
      // User registration logic here...
      console.log(`User registered: ${userId}`);
  
      // Dispatch domain event
      const event = new UserRegisteredEvent(userId, email);
      this.eventDispatcher.dispatch(event);
    }
  }
  
  // Event Handlers
  function sendWelcomeEmail(event: UserRegisteredEvent) {
    console.log(`Sending welcome email to ${event.email}`);
  }
  
  function notifyAdminOfNewUser(event: UserRegisteredEvent) {
    console.log(`Notifying admin of new user: ${event.userId}`);
  }
  
  // Usage
  const dispatcher = new EventDispatcher();
  const userService = new UserService(dispatcher);
  
  dispatcher.addListener(sendWelcomeEmail);
  dispatcher.addListener(notifyAdminOfNewUser);
  
  userService.registerUser('user123', 'user@example.com');