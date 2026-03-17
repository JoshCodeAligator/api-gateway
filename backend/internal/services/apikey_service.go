package services

import (
	"log"
	"myproject/pkg"
	"myproject/internal/database"
)


func GenerateKey() (string, error) {
	apiKey := pkg.GenerateAPIKey()

	log.Println("Generated key:", apiKey)

	query := `INSERT INTO api_keys (api_key) VALUES ($1)`

	result, err := database.DB.Exec(query, apiKey)
	if err != nil {
		log.Println("Insert failed:", err)
		return "", err
	}

	rows, err := result.RowsAffected()
    if err != nil {
        log.Println("Error fetching affected rows:", err)
    } else {
        log.Println("Rows inserted:", rows)
    }

    return apiKey, nil
}