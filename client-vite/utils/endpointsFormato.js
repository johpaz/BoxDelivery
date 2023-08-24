// Estructura del json que mandamos desde insomnia:

const jsonProfesional = {
    "name": "Trevor Prueba",
    "email": "Pruebaawd1s511@example.com",
    "image": "https://example.com/profile.jpg",
    "genre": "female",
    "years_exp": "5",
    "description": "Soy una profesional con experiencia en mi campo.",
      "categories": ["Educación", "Desarrollo de software"],
      "ocupations": ["Docente","Programador front-end angular tailwindcss","Docente primaria"]
  };
  
  // Endpoint get category -> En caso de que lo necesiten se puede buscar por nombre y por id
  
  const categories = [
      {
          "id": 1,
          "name": "Educación",
          "Ocupations": [
              {
                  "id": "d0d2643e-f8b4-42d5-874c-629c73659192",
                  "name": "Docente"
              },
              {
                  "id": "3647a0e7-5ae9-47a1-8875-8fd8f14ff3ef",
                  "name": "Docente universitario"
              },
              {
                  "id": "ee424a28-943a-4a5f-a74f-4b5829fe62c2",
                  "name": "Docente educación fisica"
              },
              {
                  "id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
                  "name": "Docente primaria"
              }
          ]
      },
      {
          "id": 5,
          "name": "Salud",
          "Ocupations": [
              {
                  "id": "016c45c9-3d39-4a69-8428-92d39104c3a0",
                  "name": "Médico forense"
              },
              {
                  "id": "4ea3c4b7-363a-405c-a0f0-2e8b0f2053df",
                  "name": "Doctor cardiovascular"
              },
              {
                  "id": "519a8458-5133-4242-8dbe-853b2e75ff58",
                  "name": "Doctor quimioterapia"
              }
          ]
      },
      {
          "id": 2,
          "name": "Desarrollo de software",
          "Ocupations": [
              {
                  "id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
                  "name": "Programador front-end angular tailwindcss"
              },
              {
                  "id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
                  "name": "Programador back-end mongodb"
              },
              {
                  "id": "06687775-c6b8-4a79-9460-e2cb3c264aa1",
                  "name": "Programador fullstack mern"
              }
          ]
      },
      {
          "id": 4,
          "name": "Comercio",
          "Ocupations": [
              {
                  "id": "ead4986d-1535-4e37-82e5-693475bd752a",
                  "name": "Cajera"
              },
              {
                  "id": "2db233da-bdfb-4546-b636-0dc2a44d83e8",
                  "name": "Carnicero"
              }
          ]
      },
      {
          "id": 3,
          "name": "Hobbie",
          "Ocupations": [
              {
                  "id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
                  "name": "Niñero/a"
              }
          ]
      },
      {
          "id": 6,
          "name": "Ingenieria",
          "Ocupations": [
              {
                  "id": "0c986a47-b160-48e1-a77f-ba205b8b5c28",
                  "name": "Ingenieria en memes"
              },
              {
                  "id": "1d84e54d-b081-4dd5-84e6-3da518e2edb6",
                  "name": "Ingenieria en software"
              }
          ]
      }
  ];
  
  // Endpoint get ocupations -> Tiene lo mismo que el endpoint de category
  
  const ocupations = [
      {
          "id": "d0d2643e-f8b4-42d5-874c-629c73659192",
          "name": "Docente",
          "CategoryId": 1
      },
      {
          "id": "3647a0e7-5ae9-47a1-8875-8fd8f14ff3ef",
          "name": "Docente universitario",
          "CategoryId": 1
      },
      {
          "id": "ee424a28-943a-4a5f-a74f-4b5829fe62c2",
          "name": "Docente educación fisica",
          "CategoryId": 1
      },
      {
          "id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
          "name": "Docente primaria",
          "CategoryId": 1
      },
      {
          "id": "016c45c9-3d39-4a69-8428-92d39104c3a0",
          "name": "Médico forense",
          "CategoryId": 5
      },
      {
          "id": "4ea3c4b7-363a-405c-a0f0-2e8b0f2053df",
          "name": "Doctor cardiovascular",
          "CategoryId": 5
      },
      {
          "id": "519a8458-5133-4242-8dbe-853b2e75ff58",
          "name": "Doctor quimioterapia",
          "CategoryId": 5
      },
      {
          "id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
          "name": "Programador front-end angular tailwindcss",
          "CategoryId": 2
      },
      {
          "id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
          "name": "Programador back-end mongodb",
          "CategoryId": 2
      },
      {
          "id": "06687775-c6b8-4a79-9460-e2cb3c264aa1",
          "name": "Programador fullstack mern",
          "CategoryId": 2
      },
      {
          "id": "ead4986d-1535-4e37-82e5-693475bd752a",
          "name": "Cajera",
          "CategoryId": 4
      },
      {
          "id": "2db233da-bdfb-4546-b636-0dc2a44d83e8",
          "name": "Carnicero",
          "CategoryId": 4
      },
      {
          "id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
          "name": "Niñero/a",
          "CategoryId": 3
      },
      {
          "id": "0c986a47-b160-48e1-a77f-ba205b8b5c28",
          "name": "Ingenieria en memes",
          "CategoryId": 6
      },
      {
          "id": "1d84e54d-b081-4dd5-84e6-3da518e2edb6",
          "name": "Ingenieria en software",
          "CategoryId": 6
      }
  ];
  
  // Posible formato del detalle del profesional -> get profesional byId
  // Aun no está implementado el getAllProfesional, pero ustedes pueden decir que info necesitan para renderizar las cartas normalmente, donde se aplicarían los filtros
  
  const profesionalDetail = {
          "name": "Trevor Prueba",
          "email": "Pruebaawd1s511@example.com",
          "genre": "female",
          "years_exp": "5",
          "description": "Soy una profesional con experiencia en mi campo.",
          "categories": [
              {
                  "name": "Educación",
                  "ocupations": [
                      {
                          "name": "Docente"
                      },
                      {
                          "name": "Docente primaria"
                      }
                  ]
              },
              {
                  "name": "Desarrollo de software",
                  "ocupations": [
                      {
                          "name": "Programador front-end angular tailwindcss"
                      }
                  ]
              }
          ]
  };
  
  // Posible formato del detalle del cliente
  
  const clientDetail = {
    "name": "Pablo",
    "email": "christian23@gmail.com",
    "image": "image.jpg",
    "genre": "Male",
    "rating": "0",
    "description": "Soy de Belgrano",
    "Posts": [
      {
        "tittle": "Busco carpintero",
        "image": "carpintero.png",
        "content": "Se solicita carpintero para arreglar una puerta"
      }
    ]
  }