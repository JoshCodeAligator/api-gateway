package handlers

import (
	"net/http"
	"myproject/internal/services"
	"github.com/gin-gonic/gin"
)

func HealthCheck(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"status": "ok"})
}

type Request struct {
	Owner string `json:"owner"`
}
func CreateKey(c *gin.Context) {
	var req Request
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	apiKey, err := services.GenerateKey()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, gin.H{"api_key": apiKey})
}

func ProtectedData(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "protected api response"})
}
