package main

import (
	"log"
	"net/http"
)

func main() {
	server := http.NewServeMux()


	log.Fatal(http.ListenAndServe(":8080", server))
}