package main

import (
	"fmt"
	"net/http"
)

func usersHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "This is the users microservice!")
}
