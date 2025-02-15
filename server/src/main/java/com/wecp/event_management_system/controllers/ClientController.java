package com.wecp.event_management_system.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wecp.event_management_system.entities.Client;
import com.wecp.event_management_system.entities.Event;
//import com.wecp.event_management_system.services.EventService;
import com.wecp.event_management_system.services.EventService;
import com.wecp.event_management_system.services.UserService;

@RestController
@RequestMapping("/api/client")
public class ClientController {

    @Autowired
    EventService eventService;

    @Autowired
    private UserService userService;

    @GetMapping("/events/{clientId}")
    public ResponseEntity<List<Event>> getAllEventsById(@PathVariable Long clientId) {
        return ResponseEntity.status(HttpStatus.OK).body(eventService.getAllEvents(clientId));
    }

    @PutMapping("event/{eventId}")
    public ResponseEntity<Event> updateFeedback(@PathVariable Long eventId, @RequestParam String feedback) {
        return ResponseEntity.status(HttpStatus.OK).body(eventService.updateFeedback(eventId, feedback));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Client>> getAllClient()
    {
        return  ResponseEntity.ok(userService.getAllClient());
    }
}
