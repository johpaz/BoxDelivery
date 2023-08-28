// json para crear un profesional

const json = {
  "name": "Elisa Blanco",
  "email": "lys1a@example.com",
  "image": "https://example.com/profile.jpg",
  "genre": "Female",
  "years_exp": "5",
  "description": "Soy una profesional con experiencia en mi campo.",
	"categories": ["Hobbie", "Desarrollo de software"],
	"ocupations": ["Niñero/a","Programador back-end mongodb","Programador front-end angular tailwindcss","Peluquerias"]
}

// Estructura del get all profesionals

const profesionals = [
	{
		"id": 78,
		"name": "Trevor Prueba",
		"email": "trevorDev@example.com",
		"genre": "Male",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 1,
				"category": "Educación",
				"ocupations": [
					{
						"id": "d0d2643e-f8b4-42d5-874c-629c73659192",
						"name": "Docente"
					},
					{
						"id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
						"name": "Docente primaria"
					}
				]
			},
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			}
		]
	},
	{
		"id": 79,
		"name": "Elisa Blanco",
		"email": "lysa@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},
	{
		"id": 80,
		"name": "Elisa Blanco",
		"email": "lys1a@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},	{
		"id": 78,
		"name": "Trevor Prueba",
		"email": "trevorDev@example.com",
		"genre": "Male",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 1,
				"category": "Educación",
				"ocupations": [
					{
						"id": "d0d2643e-f8b4-42d5-874c-629c73659192",
						"name": "Docente"
					},
					{
						"id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
						"name": "Docente primaria"
					}
				]
			},
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			}
		]
	},
	{
		"id": 79,
		"name": "Elisa Blanco",
		"email": "lysa@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},
	{
		"id": 80,
		"name": "Elisa Blanco",
		"email": "lys1a@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},	{
		"id": 78,
		"name": "Trevor Prueba",
		"email": "trevorDev@example.com",
		"genre": "Male",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 1,
				"category": "Educación",
				"ocupations": [
					{
						"id": "d0d2643e-f8b4-42d5-874c-629c73659192",
						"name": "Docente"
					},
					{
						"id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
						"name": "Docente primaria"
					}
				]
			},
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			}
		]
	},
	{
		"id": 79,
		"name": "Elisa Blanco",
		"email": "lysa@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},
	{
		"id": 80,
		"name": "Elisa Blanco",
		"email": "lys1a@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},	{
		"id": 78,
		"name": "Trevor Prueba",
		"email": "trevorDev@example.com",
		"genre": "Male",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 1,
				"category": "Educación",
				"ocupations": [
					{
						"id": "d0d2643e-f8b4-42d5-874c-629c73659192",
						"name": "Docente"
					},
					{
						"id": "a97ce511-83f8-4e5e-8967-1e85f93b1940",
						"name": "Docente primaria"
					}
				]
			},
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			}
		]
	},
	{
		"id": 79,
		"name": "Elisa Blanco",
		"email": "lysa@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	},
	{
		"id": 80,
		"name": "Elisa Blanco",
		"email": "lys1a@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		]
	}
];

// Estrucutra del get by id (para el detail) tienen el id para el map (React suele dar problemas si al realizar un map tiene una key con el id)

const profesionalId = [
	{
		"id": 79,
		"name": "Elisa Blanco",
		"email": "lysa@example.com",
		"genre": "Female",
		"years_exp": "5",
		"description": "Soy una profesional con experiencia en mi campo.",
		"professions": [
			{
				"id": 2,
				"category": "Desarrollo de software",
				"ocupations": [
					{
						"id": "4d9c625a-bc09-441f-88fa-bf004a8c2521",
						"name": "Programador front-end angular tailwindcss"
					},
					{
						"id": "7951cb4c-6d98-4c01-84be-1fe28042a7fe",
						"name": "Programador back-end mongodb"
					}
				]
			},
			{
				"id": 3,
				"category": "Hobbie",
				"ocupations": [
					{
						"id": "66627c3a-ddb1-449e-a8a9-f8ec4156db3a",
						"name": "Niñero/a"
					},
					{
						"id": "ceacbc1a-a5c6-4d4c-891a-e14afecc8d82",
						"name": "Peluquerias"
					}
				]
			}
		],
		"jobimages": [
			{
				"image": [
					"https://example.com/image1.jpg",
					"https://example.com/image2.jpg"
				],
				"description": "Description "
			}
		]
	}
];