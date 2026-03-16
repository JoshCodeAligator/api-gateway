package main

import (
	"fmt"
	"log"
	"net/http"
)

 func productsHandler(w http.ResponseWriter, r *http.Request) {
 	log.Println("Received request for /products")
 	// Handle requests for /products route
 	if r.Method != "GET" {
 		log.Println("Invalid method")
 		errorHandler(w, http.StatusMethodNotAllowed, "Method not allowed")
 		return
 	}
    
 	fmt.Fprintln(w, "This is the products microservice")
 }

