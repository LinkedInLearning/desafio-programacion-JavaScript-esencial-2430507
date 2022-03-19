const nombres = [
    "June Greene",
    "Magdalena Hardy",
    "Merle Gonzales",
    "Whitaker Anderson",
    "Lucille Landry",
    "Annmarie Burns",
    "Erica Morrison",
    "Twila Dotson",
    "Cash Ratliff",
    "Maria Pierce",
    "Slater Mayo",
    "Gonzales Velazquez",
    "Hogan Tran",
    "Holland Harvey",
    "Carr Porter",
    "Marquez Bruce",
    "Rojas Wall",
    "Florine Lang",
    "Quinn Blanchard",
    "Charles Hughes",
    "Melba Moon",
    "Gilliam Marsh",
    "Lea Salazar",
    "Jackie Hogan",
    "Jacobson Riggs",
    "Mckee Mcclure",
    "Joanna Hampton",
    "Alexander Stokes",
    "Lola Witt",
    "Doyle Lee",
  ];

  // Ordenar los nombres alfabeticamente.

  const ordenadors = nombres.sort((a, b)=> {
      const nombreA = a.split(' ')[0];
      const nombreB = b.split(' ')[0];
      return nombreA < nombreB? -1 : nombreA > nombreB? 1 : 0;
  });

  console.log(ordenadors);
