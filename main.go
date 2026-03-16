package main

import (
	"log"
	"net/http"
)

func main() {
	server := http.NewServeMux()

	server.HandleFunc("/users", usersHandler)
	server.HandleFunc("/products", productsHandler)

	log.Fatal(http.ListenAndServe(":8080", server))
}