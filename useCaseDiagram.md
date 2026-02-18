```mermaid
useCaseDiagram
    actor "Attendee" as A
    actor "Organizer" as O
    actor "System" as S

    package "EventHive System" {
        usecase "Register/Login" as UC1
        usecase "View Profile" as UC2
        
        usecase "Browse Events" as UC3
        usecase "Search for Events" as UC4
        usecase "Book Ticket" as UC5
        usecase "View My Tickets" as UC6
        usecase "Leave Review" as UC7

        usecase "Create Event" as UC8
        usecase "Update Event" as UC9
        usecase "Delete Event" as UC10
        usecase "View Dashboard" as UC11
    }

    A --> UC1
    A --> UC2
    A --> UC3
    A --> UC4
    A --> UC5
    A --> UC6
    A --> UC7

    O --> UC1
    O --> UC2
    O --> UC8
    O --> UC9
    O --> UC10
    O --> UC11

    UC5 ..> UC1 : <<include>>
    UC8 ..> UC1 : <<include>>
    
    S --> UC1
```
