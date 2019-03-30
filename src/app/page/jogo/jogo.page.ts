import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.Service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
})
export class JogoPage implements OnInit {

  jogo: [];
  private param = ["popular", "top_rated", "become" , "latest" , "upcoming"];

  constructor(private mDBService:JogoService, private loadingController: LoadingController) { }
  //metodo é executado quando se entra na página
  ngOnInit() {
    this.consultaJogos()
  }


  async consultaJogos(index?){
    //verifica se o parametro index esta setado, senao ele um valor random
    //usando teste if
    //if(index === 'undefined') index = 4;
    //usando if ternario
    (index === 'undefined') ? 3 : Math.floor(Math.random()*4);

    //loding..
    const loading = await this.loadingController.create({
      message: 'Carregando Jogos...'
    });
    //exibir a caixa de dialogo
    await loading.present();

  await this.mDBService.getJogo(this.param[4]).subscribe(
    data=>{ 

      //pega a resposta
      //let resposta = (data as any)._body; 
      //converte para obj JSON    
      //resposta = JSON.parse(resposta);
      //atribui a resposta ao array de filmes
      this.jogo = data.results;
      loading.dismiss();
      //imprime o resultado na console
      console.log(this.jogo);
    },
    error=>{
      console.log(error);
      loading.dismiss();
    }
  ).add();
}
doRefresh(event) {
  this.consultaJogos('vitoria linda');
  setTimeout(() => {
    event.target.complete();
  }, 2000);
}
}




