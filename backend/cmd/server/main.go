package main

import (
	"myproject/internal/database"
	"myproject/internal/handlers"
	"myproject/internal/middleware"

	"github.com/gin-gonic/gin"
)

func main() {
	database.ConnectDatabase()

	router := gin.Default()

	router.GET("/health", handlers.HealthCheck)

	router.POST("/apikey", handlers.CreateKey)

	api := router.Group("/api")

	api.Use(middleware.APIKeyAuthMiddleware())
	api.Use(middleware.RateLimiter(100))

	api.GET("/data", handlers.ProtectedData)

	router.Run(":8080")
}