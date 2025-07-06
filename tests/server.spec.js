const request = require("supertest");
const app = require("../index");

describe("Operaciones CRUD de cafes", () => {
  // 1. GET /cafes → status 200 y un array con al menos 1 objeto
  test("GET /cafes devuelve status 200 y un arreglo con al menos 1 café", async () => {
    const response = await request(app).get("/cafes");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // 2. DELETE /cafes/:id → status 404 si el café no existe
  test("DELETE /cafes/:id con id inexistente devuelve status 404", async () => {
    const response = await request(app)
      .delete("/cafes/9999")
      .set("Authorization", "token-falso");

    expect(response.statusCode).toBe(404);
  });

  // 3. POST /cafes → status 201 al agregar un nuevo café
  test("POST /cafes agrega un nuevo café y devuelve status 201", async () => {
    const nuevoCafe = {
      id: Date.now(), // id unico
      nombre: "Café de prueba"
    };

    const response = await request(app).post("/cafes").send(nuevoCafe);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(nuevoCafe)
      ])
    );
  });

  // 4. PUT /cafes/:id con id diferente al del payload → status 400
  test("PUT /cafes/:id devuelve status 400 si el id no coincide con el payload", async () => {
    const cafe = {
      id: "2",
      nombre: "Café actualizado"
    };

    const response = await request(app).put("/cafes/999").send(cafe);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe(
      "El id del parámetro no coincide con el id del café recibido"
    );
  });
});
