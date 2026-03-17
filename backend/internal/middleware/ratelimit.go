package middleware

import (
	"net/http"
	"sync"
	"github.com/gin-gonic/gin"
)

var requests = make(map[string]int)
var mu sync.Mutex

func RateLimitMiddleware(maxRequests int) gin.HandlerFunc {
	return func(c *gin.Context) {
		ip := c.ClientIP()

		mu.Lock()
		requests[ip]++
		count := requests[ip]
		mu.Unlock()

		if count > maxRequests {
			c.JSON(http.StatusTooManyRequests, gin.H{"error": "Rate limit exceeded"})
			c.Abort()
			return
		}
		c.Next()
	}
}
