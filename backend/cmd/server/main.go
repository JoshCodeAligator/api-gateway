package main

import (
	"myproject/internal/middleware"
	"myproject/internal/handlers"
	"github.com/gin-gonic/gin"
)

func main() {

	router := gin.Default()

	router.GET("/health", handlers.HealthCheck)

	router.POST("/apikey", handlers.CreateKey)

	api := router.Group("/api")

	api.Use(middleware.APIKeyAuthMiddleware())
	api.Use(middleware.RateLimitMiddleware(100))

	api.GET("/data", handlers.ProtectedData)

	router.Run(":8080")
}