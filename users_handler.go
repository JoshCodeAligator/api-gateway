package main

import (
	"fmt"
	"log"
	"net/http"
)

 func usersHandler(w http.ResponseWriter, r *http.Request) {
 	log.Println("Received request for /users")
 	// Handle requests for /users route
 	if r.Method != "GET" {
 		log.Println("Invalid method")
 		errorHandler(w, http.StatusMethodNotAllowed, "Method not allowed")
 		return
 	}
    
 	fmt.Fprintln(w, "This is the users microservice")
 }



