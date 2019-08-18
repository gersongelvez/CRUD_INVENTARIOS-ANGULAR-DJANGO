import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl="http://127.0.0.1:8000";
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getAllMovies() :Observable<any>{
    return this.http.get(this.baseurl+ '/movies/',
    {headers: this.httpHeaders}
    );
  }

  getOneMovie(id) :Observable<any>{
    return this.http.get(this.baseurl+ '/movies/' + id + '/',
    {headers: this.httpHeaders}
    );
  }

  updateMovie(movie) :Observable<any>{
    const body = {title:movie.title, desc: movie.desc, year:movie.year};
    return this.http.put(this.baseurl+ '/movies/' + movie.id + '/', body,
    {headers: this.httpHeaders}
    );
  }

  createMovie(movie) :Observable<any>{
    const body = {title:movie.title, desc: movie.desc, year:movie.year};
    return this.http.post(this.baseurl+ '/movies/', body,
    {headers: this.httpHeaders}
    );
  }

  deleteMovie(id) :Observable<any>{
    return this.http.delete(this.baseurl+ '/movies/' + id + '/',
    {headers: this.httpHeaders}
    );
  }

  //Inician metodos para crud de bienes

  getAllBienes() :Observable<any>{
    return this.http.get(this.baseurl+ '/bien/',
    {headers: this.httpHeaders}
    );
  }

  getOneBien(id) :Observable<any>{
    return this.http.get(this.baseurl+ '/bien/' + id + '/',
    {headers: this.httpHeaders}
    );
  }

  updateBien(bien) :Observable<any>{
    const body = {nombre:bien.nombre, descripcion: bien.descripcion, serial:bien.serial, valor:bien.valor, fecha:bien.fecha, tipo:bien.tipo, estado:bien.estado, area:bien.area, persona:bien.persona};
    return this.http.put(this.baseurl+ '/bien/' + bien.id + '/', body,
    {headers: this.httpHeaders}
    );
  }

  createBien(bien) :Observable<any>{
    const body = {nombre:bien.nombre, descripcion: bien.descripcion, serial:bien.serial, valor:bien.valor, fecha:bien.fecha, tipo:bien.tipo, estado:bien.estado, area:bien.area, persona:bien.persona};
    return this.http.post(this.baseurl+ '/bien/', body,
    {headers: this.httpHeaders}
    );
  }

  deleteBien(id) :Observable<any>{
    return this.http.delete(this.baseurl+ '/bien/' + id + '/',
    {headers: this.httpHeaders}
    );
  }


// Inician metodos para gestion de personas
getAllPersonas() :Observable<any>{
  return this.http.get(this.baseurl+ '/persona/',
  {headers: this.httpHeaders}
  );
}  

getOnePersona(id) :Observable<any>{
  return this.http.get(this.baseurl+ '/persona/' + id + '/',
  {headers: this.httpHeaders}
  );
}

updatePersona(persona) :Observable<any>{
  const body = {nombres:persona.nombres, apellidos: persona.apellidos, cargo:persona.cargo};
  return this.http.put(this.baseurl+ '/persona/' + persona.id + '/', body,
  {headers: this.httpHeaders}
  );
}

createPersona(persona) :Observable<any>{
  const body = {nombres:persona.nombres, apellidos: persona.apellidos, cargo:persona.cargo};
  return this.http.post(this.baseurl+ '/persona/', body,
  {headers: this.httpHeaders}
  );
}

deletePersona(id) :Observable<any>{
  return this.http.delete(this.baseurl+ '/persona/' + id + '/',
  {headers: this.httpHeaders}
  );
}

// Inician metodos para gestion de areas
getAllAreas() :Observable<any>{
  return this.http.get(this.baseurl+ '/area/',
  {headers: this.httpHeaders}
  );
}  

getOneArea(id) :Observable<any>{
  return this.http.get(this.baseurl+ '/area/' + id + '/',
  {headers: this.httpHeaders}
  );
}

updateArea(area) :Observable<any>{
  const body = {nombre:area.nombre};
  return this.http.put(this.baseurl+ '/area/' + area.id + '/', body,
  {headers: this.httpHeaders}
  );
}

createArea(area) :Observable<any>{
  const body = {nombre:area.nombre};
  return this.http.post(this.baseurl+ '/area/', body,
  {headers: this.httpHeaders}
  );
}

deleteArea(id) :Observable<any>{
  return this.http.delete(this.baseurl+ '/area/' + id + '/',
  {headers: this.httpHeaders}
  );
}


// Inician metodos para gestion de estados

getAllEstados() :Observable<any>{
  return this.http.get(this.baseurl+ '/estado/',
  {headers: this.httpHeaders}
  );
}  

getOneEstado(id) :Observable<any>{
  return this.http.get(this.baseurl+ '/estado/' + id + '/',
  {headers: this.httpHeaders}
  );
}

updateEstado(estado) :Observable<any>{
  const body = {nombre:estado.nombre};
  return this.http.put(this.baseurl+ '/estado/' + estado.id + '/', body,
  {headers: this.httpHeaders}
  );
}

createEstado(estado) :Observable<any>{
  const body = {nombre:estado.nombre};
  return this.http.post(this.baseurl+ '/estado/', body,
  {headers: this.httpHeaders}
  );
}

deleteEstado(id) :Observable<any>{
  return this.http.delete(this.baseurl+ '/estado/' + id + '/',
  {headers: this.httpHeaders}
  );
}




// Inician metodos para gestion de tipos

getAllTipos() :Observable<any>{
  return this.http.get(this.baseurl+ '/tipo/',
  {headers: this.httpHeaders}
  );
}  

getOneTipo(id) :Observable<any>{
  return this.http.get(this.baseurl+ '/tipo/' + id + '/',
  {headers: this.httpHeaders}
  );
}

updateTipo(tipo) :Observable<any>{
  const body = {nombre:tipo.nombre};
  return this.http.put(this.baseurl+ '/tipo/' + tipo.id + '/', body,
  {headers: this.httpHeaders}
  );
}

createTipo(tipo) :Observable<any>{
  const body = {nombre:tipo.nombre};
  return this.http.post(this.baseurl+ '/tipo/', body,
  {headers: this.httpHeaders}
  );
}

deleteTipo(id) :Observable<any>{
  return this.http.delete(this.baseurl+ '/tipo/' + id + '/',
  {headers: this.httpHeaders}
  );
}





}
