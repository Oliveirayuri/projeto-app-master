import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/Jogo.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jogo-details',
  templateUrl: './jogo-details.page.html',
  styleUrls: ['./jogo-details.page.scss'],
})
export class JogoDetailsPage implements OnInit {
    private jogo ={}
 
    constructor(private mDBService:JogoService, private loadingController: LoadingController , private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.consultaJogo();
    }
  
  
  
    async consultaJogo(){
      //loding..
      const loading = await this.loadingController.create({
        message: 'Carregando jogo...'
      });
      //exibir a caixa de dialogo
      await loading.present();
  
      await this.mDBService.getJogo(this.route.snapshot.paramMap.get('id')).subscribe(
        data=>{ 
          //pega a resposta
          //let resposta = (data as any)._body; 
          //converte para obj JSON    
          //resposta = JSON.parse(resposta);
          //atribui a resposta ao array de filmes
          this.jogo = data;
          console.log(this.jogo);
          loading.dismiss();
          //imprime o resultado na console
          console.log(this.jogo);
        },
        error=>{
          console.log(error);
          loading.dismiss();
        }
      )
    }
  }
   