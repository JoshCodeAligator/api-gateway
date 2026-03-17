# api-gateway


# Run the following query in my SQL database setup:
CREATE TABLE api_keys (
    id SERIAL PRIMARY KEY,
    api_key TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# To run the server:
go run main.go

# To run the tests:
brew install httpie   # on macOS
http GET http://localhost:8080/health
http POST http://localhost:8080/apikey 