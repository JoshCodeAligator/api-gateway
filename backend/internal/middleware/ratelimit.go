package middleware

import (
	"context"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

var redisClient = redis.NewClient(&redis.Options{
	Addr: "localhost:6379",
})

func RateLimiter(limit int) gin.HandlerFunc {

	return func(c *gin.Context) {

		ip := c.ClientIP()

		key := "rate:" + ip

		count, err := redisClient.Incr(ctx, key).Result()

		if err != nil {
			c.Next()
			return
		}

		if count == 1 {
			redisClient.Expire(ctx, key, time.Minute)
		}

		if count > int64(limit) {

			c.JSON(http.StatusTooManyRequests, gin.H{
				"error": "rate limit exceeded",
			})

			c.Abort()
			return
		}

		c.Next()
	}
}