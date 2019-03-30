import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular//common/http';
import { Observable, of } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};




@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private URL_API:string = "https://api.themoviedb.org/3";
  private API_KEY:string= "f8afdbec08f09f89ea268eef4f64b449";

  constructor(private http: HttpClient) { }

  //retornar a lista de top rating movies
  //getTopRatedMovies(){
  //retorna o resultado baseado na url de requisição
  //  return this.http.get(`${this.URL_API}/movie/top_rated?api_key=${this.API_KEY}`)
  //}
  //funçao (metodo) tera um retorno do tipo observable
  getJogo(param:string):Observable<any>{
    const url=`${this.URL_API}/jogo/${param}?api_key=${this.API_KEY}`;
     return this.http.get<any>(url).pipe(
       tap(_ =>console.log(`O parametro requisitado foi:${param}`)),
       catchError(this.handleError<any>(`Faha no getJogo parametro= ${param}`)) 
     );

  }
  //método privado para exibir o erro
  private handleError<T>(Operator = 'operation', result?: T){
    return (error:any):Observable<T> =>{
      console.error(error); //log do erro na console

      //mantem o app rodando por ter retornado o obj vazio
      return of(result as T);
    }
  }
}

//http ionic v3

}
