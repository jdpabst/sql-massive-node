INSERT INTO Products
    (id, name, description, price, imageurl)
VALUES ($1, $2, $3, $4, $5) RETURNING Id