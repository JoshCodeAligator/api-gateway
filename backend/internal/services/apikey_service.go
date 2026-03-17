package services

import "myproject/pkg"

func GenerateKey() (string, error) {
	return pkg.GenerateAPIKey()
}