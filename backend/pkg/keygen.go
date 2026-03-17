package pkg

import (
	"crypto/rand"
	"encoding/hex"
)	

func GenerateAPIKey() (string, error) {
	key := make([]byte, 32) // 256-bit key
	_, err := rand.Read(key)
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(key), nil
}