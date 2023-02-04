import { Business } from "../business";

export class Data {
  public static businesses: Business[] = [
    { id: '1', name: 'Panda Express', 
      address: {street: '123 Main Street', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-1212'
    },
    { id: '2', name: 'Buffalo Wild Wings', 
      address: {street: '456 Green Street', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-2121'
    },
    { id: '3', name: 'Culvers', 
      address: {street: '1589 Terra Cotta Avenue', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-4567'
    },
    { id: '4', name: 'Portillos', 
      address: {street: '4343 Sample Street', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-8989'
    },
    { id: '5', name: 'Papa Saverios', 
      address: {street: '9 Oak Street', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-3433'
    },
    { id: '6', name: 'Olympic Cafe', 
      address: {street: '339 Railroad Street', city: 'Crystal Lake', state: 'IL', zip: '60014'}, 
      phone: '815-555-2222'
    },
  ];
}
