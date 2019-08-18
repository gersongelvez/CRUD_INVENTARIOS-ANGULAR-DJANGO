import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {

  tab;
  
  movies=[{title: 'Vacio'}];
  selectedMovie;

  bienes=[{nombre: '', valor:0}];
  selectedBien;


  personas=[{nombres: ''}];
  selectedPersona;

  areas=[{nombre: ''}];
  selectedArea;

  tipos=[{nombre: ''}];
  selectedTipo;

  estados=[{nombre: ''}];
  selectedEstado;



  formGroupTipo;
  formControlTipo;
  formGroupEstado;
  formControlEstado;
  formGroupArea;
  formControlArea;
  formGroupPersona;
  formControlPersona;


  constructor(private api: ApiService){

    this.tab=0;

    this.getMovies();
    this.selectedMovie={id:-1, title:'',desc:'',year:0}
    
    this.getBienes();
    this.selectedBien={id:-1, valor:0};

    this.getTipos();
    this.selectedTipo={id:-1};

    this.getEstados();
    this.selectedEstado={id:-1};
    
    this.getAreas();
    this.selectedArea={id:-1};
    
    this.getPersonas();
    this.selectedPersona={id:-1};

    this.formGroupTipo = new FormGroup({
      formControlTipo: new FormControl()
    });

    this.formGroupEstado = new FormGroup({
    formControlEstado: new FormControl()
    });

    this.formGroupArea = new FormGroup({
      formControlArea: new FormControl()
    });

    this.formGroupPersona = new FormGroup({
      formControlPersona: new FormControl()
    });


  }

  asignarTab = (tabParam) => {
    this.tab=tabParam;
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies=data;
      },
      error => {
        console.log(error);
      }
    );
  }


  movieClicked = (movie) => {
    this.api.getOneMovie(movie.id).subscribe(
      data => {
        this.selectedMovie=data;
      },
      error => {
        console.log(error);
      }
    );
  }

  
  updateMovie = () => {
    this.api.updateMovie(this.selectedMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }

  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }

  clearMovie = () => {
    this.selectedMovie={id:-1, title:'',desc:'',year:0}
  }

  //inician metodos para crud de bienes

  getBienes = () => {
    this.api.getAllBienes().subscribe(
      data => {
        this.bienes=data;
      },
      error => {
        console.log(error);
      }
    );
  }


  bienClicked = (bien) => {
    this.api.getOneBien(bien.id).subscribe(
      data => {
        this.selectedBien=data;
      },
      error => {
        console.log(error);
      }
    );
  }

  
  updateBien = () => {
    this.api.updateBien(this.selectedBien).subscribe(
      data => {
        this.getBienes();
        this.clearBien();
      },
      error => {
        console.log(error);
      }
    );
  }

  createBien = () => {
    this.api.createBien(this.selectedBien).subscribe(
      data => {
        this.bienes.push(data);
        this.clearBien();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteBien = () => {
    this.api.deleteBien(this.selectedBien.id).subscribe(
      data => {
        this.getBienes();
        this.clearBien();
      },
      error => {
        console.log(error);
      }
    );
  }

  clearBien = () => {
    this.selectedBien={id:-1}
  }


//Métodos para gestion de personas

getPersonas = () => {
  this.api.getAllPersonas().subscribe(
    data => {
      this.personas=data;
    },
    error => {
      console.log(error);
  }
);
}

personaClicked = (persona) => {
  this.api.getOnePersona(persona.id).subscribe(
    data => {
      this.selectedPersona=data;
    },
    error => {
      console.log(error);
    }
  );
}


updatePersona = () => {
  this.api.updatePersona(this.selectedPersona).subscribe(
    data => {
      this.getPersonas();
      this.clearPersona();
    },
    error => {
      console.log(error);
    }
  );
}

createPersona = () => {
  this.api.createPersona(this.selectedPersona).subscribe(
    data => {
      this.personas.push(data);
      this.clearPersona();
    },
    error => {
      console.log(error);
    }
  );
}

deletePersona = () => {
  this.api.deletePersona(this.selectedPersona.id).subscribe(
    data => {
      this.getPersonas();
      this.clearPersona();
    },
    error => {
      console.log(error);
    }
  );
}

clearPersona = () => {
  this.selectedPersona={id:-1}
}


//Métodos para gestion de areas


getAreas = () => {
  this.api.getAllAreas().subscribe(
    data => {
      this.areas=data;
    },
    error => {
      console.log(error);
  }
);
}

areaClicked = (area) => {
  this.api.getOneArea(area.id).subscribe(
    data => {
      this.selectedArea=data;
    },
    error => {
      console.log(error);
    }
  );
}


updateArea = () => {
  this.api.updateArea(this.selectedArea).subscribe(
    data => {
      this.getAreas();
      this.clearArea();
    },
    error => {
      console.log(error);
    }
  );
}

createArea = () => {
  this.api.createArea(this.selectedArea).subscribe(
    data => {
      this.areas.push(data);
      this.clearArea();
    },
    error => {
      console.log(error);
    }
  );
}

deleteArea = () => {
  this.api.deleteArea(this.selectedArea.id).subscribe(
    data => {
      this.getAreas();
      this.clearArea();
    },
    error => {
      console.log(error);
    }
  );
}

clearArea = () => {
  this.selectedArea={id:-1}
}


//Métodos para gestion de estados


getEstados = () => {
  this.api.getAllEstados().subscribe(
    data => {
      this.estados=data;
    },
    error => {
      console.log(error);
  }
);
}

estadoClicked = (estado) => {
  this.api.getOneEstado(estado.id).subscribe(
    data => {
      this.selectedEstado=data;
    },
    error => {
      console.log(error);
    }
  );
}


updateEstado = () => {
  this.api.updateEstado(this.selectedEstado).subscribe(
    data => {
      this.getEstados();
      this.clearEstado();
    },
    error => {
      console.log(error);
    }
  );
}

createEstado = () => {
  this.api.createEstado(this.selectedEstado).subscribe(
    data => {
      this.estados.push(data);
      this.clearEstado();
    },
    error => {
      console.log(error);
    }
  );
}

deleteEstado = () => {
  this.api.deleteEstado(this.selectedEstado.id).subscribe(
    data => {
      this.getEstados();
      this.clearEstado();
    },
    error => {
      console.log(error);
    }
  );
}

clearEstado = () => {
  this.selectedEstado={id:-1}
}

//Métodos para gestion de tipos

getTipos = () => {
  this.api.getAllTipos().subscribe(
    data => {
      this.tipos=data;
    },
    error => {
      console.log(error);
  }
);
}

tipoClicked = (tipo) => {
  this.api.getOneTipo(tipo.id).subscribe(
    data => {
      this.selectedTipo=data;
    },
    error => {
      console.log(error);
    }
  );
}


updateTipo = () => {
  this.api.updateTipo(this.selectedTipo).subscribe(
    data => {
      this.getTipos();
      this.clearTipo();
    },
    error => {
      console.log(error);
    }
  );
}

createTipo = () => {
  this.api.createTipo(this.selectedTipo).subscribe(
    data => {
      this.tipos.push(data);
      this.clearTipo();
    },
    error => {
      console.log(error);
    }
  );
}

deleteTipo = () => {
  this.api.deleteTipo(this.selectedTipo.id).subscribe(
    data => {
      this.getTipos();
      this.clearTipo();
    },
    error => {
      console.log(error);
    }
  );
}

clearTipo = () => {
  this.selectedTipo={id:-1}
}


}
