# api-gateway


# Run the following query in my SQL database setup:
CREATE TABLE api_keys (
    id SERIAL PRIMARY KEY,
    api_key TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

# To run the GO server:
cd backend/cmd/server
go run main.go

# To access PostgreSQL database:
brew services start postgresql
psql postgres

# To run the tests:
brew install httpie   # on macOS
http GET http://localhost:8080/health
http POST http://localhost:8080/apikey 