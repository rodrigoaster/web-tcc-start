import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../../component/header/header";

export const Informacoes = () => {
    return (
        <section>
            <Header/>
            
  <div class="album py-5 bg-light">
    <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
            <div class="card shadow-sm">
                <img src="src/assets/img/informacoes/kwh.jpeg" alt="" />

                <div class="card-body">
                <h3>O que significa "kwh"?</h3>
                <p class="card-text">Conheça mais sobre a sigla que mede o consumo dos seus eletrodomésticos!</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card shadow-sm">

                <img  src="src/assets/img/informacoes/bandeiras.png" alt="" />

                <div class="card-body">
                <h3 class="">Bandeira Verde? Amarela? Vermelha?</h3>
                <p class="card-text">Descubra como as bandeiras tarifárias alteram sua conta de energia</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card shadow-sm">
                
                <img height={"361px"} src="src/assets/img/informacoes/14-calculadora-800x533.jpg" alt="" />

                <div class="card-body">
                <h3>ICMS, PIS E COFINS.</h3>
                <p>Tenha uma noção melhor do quanto os impostos mudam sua conta de energia!</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div class="col">
            <div class="card shadow-sm">
                <img height={"326px"} src="src/assets/img/informacoes/etiquetas.jpeg" alt="" />

                <div class="card-body">
                <h3>Etiquetas de eficiência energética.</h3>
                <p class="card-text">O que é e como elas ajudam na hora de comprar eletrodomésticos?</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card shadow-sm">
                <img height={"269px"} src="src/assets/img/informacoes/eletros.jpg" alt="" /> 

                <div class="card-body">
                <h3>O que significa a potência dos equipamentos?</h3>
                <p class="card-text">Veja um breve resumo de como a potência dos equipamentos pode ser útil na hora de economizar!</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="col">
            <div class="card shadow-sm">
                <img height={"234px"} src="src/assets/img/informacoes/tomada.jpeg" alt="" />                 
                <div class="card-body">
                <h3>Porquê desligar os equipamentos da tomada quando não estão sendo usados.</h3>
                <p class="card-text">Desliguei meu aparelho mas não retirei a energia da tomada, saiba como isso pode afetar sua conta de energia.</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-outline-warning">Descubra agora!</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>
    )
}