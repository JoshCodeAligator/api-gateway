package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

func ConnectDatabase() {

	connStr := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		"127.0.0.1",
		5432,
		"joshuadebele",
		"Yolo123$",
		"postgres",
	)

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("DB open error:", err)
	}

	// verify connection
	err = db.Ping()
	if err != nil {
		log.Fatal("DB connection failed:", err)
	}

	DB = db

	log.Println("Connected to PostgreSQL (lib/pq)")
}