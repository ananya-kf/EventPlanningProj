package com.wecp.event_management_system.controllers;

import com.wecp.event_management_system.entities.Task;
//import com.wecp.event_management_system.services.TaskService;
import com.wecp.event_management_system.services.TaskService;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/staff")
public class StaffController {
   @Autowired
   private TaskService taskService;


    @GetMapping("/tasks/{staffId}")
    public ResponseEntity<List<Task>> getTasks(@PathVariable Long staffId) {
      List<Task> tasks = taskService.getAssignedTasks(staffId);
      return new ResponseEntity<>(tasks, HttpStatus.OK);

    }
       // get assigned tasks for the staff with the given staffId and return with status code 200 ok
    

    @PutMapping("/tasks/{taskId}")
    public ResponseEntity<Task> updateTaskStatus(@PathVariable Long taskId, @RequestParam String status) {
      Task updatetask = taskService.updateTaskStatus(taskId, status);
      return new ResponseEntity<>(updatetask, HttpStatus.OK);
      
       // update the status of the task with the given taskId and return the updated task with status code 200 ok
    }
}
