package main

import (
	"golang.org/x/time/rate"
	"log"
	"net/http"
)
var usersLimiter = rate.NewLimiter(rate.Limit(1), 3)
var productsLimiter = rate.NewLimiter(rate.Limit(2), 5)


func main() {
	server := http.NewServeMux()

	server.HandleFunc("/users", usersHandler)
	server.HandleFunc("/products", productsHandler)

	log.Fatal(http.ListenAndServe(":8080", server))
	log.SetFlags(log.LstdFlags | log.Lmicroseconds | log.Lshortfile)

}